import React, { useState, useEffect, useRef } from "react";

export default function VenueKpisForm(props) {
    let [formData, setFormData] = useState([]);
    let [statuses, setStatuses] = useState([]);
    let refList = useRef(null); // to refrence the topic chosen by user. No need to make it as a controled input


    useEffect(() => {
        const url = 'http://localhost:4000/topics/' + props.venue;
        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                else return res.json();
            })
            .then(data => {
                setFormData(Array.from(data));
            })
            .catch(error => {
                console.log(url);
                console.dir(error);
                console.log(error.response);
            });
    }, [props.venue]);


    useEffect(() => {
        if (formData.some(kpi => kpi.type.endsWith('status'))) {
            const url = 'http://localhost:4000/statuses/';
            fetch(url)
                .then((res) => {
                    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                    else return res.json();
                })
                .then(data => {
                    setStatuses(Array.from(data));
                })
                .catch(error => {
                    console.log(url);
                    console.dir(error);
                    console.log(error.response);
                });
        }
    }, [formData]);

    console.log(statuses);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {
        const { id, type, value, checked } = event.target;
        console.log(id, type, value, checked);
        setFormData(prevState => {
            const aux = Array.from(prevState);
            if (type === 'checkbox')
                aux[aux.findIndex(item => item.topicId === Number.parseInt(id, 10))].track = checked;
            if (type === 'text')
                aux[aux.findIndex(item => item.topicId === Number.parseInt(id, 10))].value = value;
            return aux;
        });
        //setFormData(prevState => ( {...prevState, [name]: type === 'checkbox' ? checked : value, feedback: ''}));
    }

    //    const categories = [];
    //    formData.forEach((kpi, index) => {if (index === 0 || kpi.category !== formData[index-1].category) categories.push(kpi.category)});
    //    console.log(categories);
    const categories = ['Equipment Deliveries'];
    let options = statuses.map(status => {
        return <td><option key={`stat${status.id.toString()}`} value={status.name}></option></td>
    })


    console.log('calen els status? ' + formData.some(kpi => kpi.type.endsWith('status')));
    return (
        <form className="VenueInputForm" onSubmit={handleSubmit} >
            {categories.map((cat, index) => {
                return (
                    <div key={`div_0_${index}`}>
                        <h3 key={`cat${index}`} className="VIF--Category">{cat}</h3>
                        <table key={`tab_${cat}`}>
                            {formData.filter(kpi => kpi.category === cat).map((kpi, index2) => {
                                return (
                                    <React.Fragment key={`frg${kpi.topicId}`}>
                                        {index2 === 0 &&
                                            <thead key={`hed_hed${kpi.topicId}`}>
                                                <tr key={`hed${kpi.topicId}`} className="VIF--TableHeader">
                                                    <th key={`hed_name${kpi.topicId}`}></th>
                                                    <th key={`hed_trck${kpi.topicId}`}>Track</th>
                                                    <th key={`hed_valu${kpi.topicId}`}>Kpi</th>
                                                    {kpi.type.endsWith('-status') && <th key={`hed_stat${kpi.topicId}`}>Status</th>}
                                                </tr>
                                            </thead>
                                        }
                                        <tbody key={`bod${kpi.topicId}`}>
                                            <tr key={`row${kpi.topicId}`}>
                                                <td> <label key={`name${kpi.topicId}`} htmlFor={kpi.topicId}>{kpi.name}</label></td>
                                                <td><input type="checkbox" key={`trck${kpi.topicId}`} id={kpi.topicId} checked={kpi.track} onChange={handleChange} /></td>
                                                <td><input type="text" key={`valu${kpi.topicId}`} id={kpi.topicId} value={kpi.value} onChange={handleChange} required />
                                                    {kpi.type.startsWith('percentage') && "%"}
                                                </td>
                                                {formData.some(kpi => kpi.type.endsWith('status')) &&
                                                    <td><select className='init--topicselection' id="topic" name="topic" ref={refList}>
                                                        {statuses.map(status => {
                                                            console.log(kpi.value, ' ', status.name);  // WRONG: TO DO - in the kpi we need also a field status (from DB: vto_staus in table venuetopics)
                                                            return <option key={`stat${status.id.toString()}`} value={status.name} selected={(kpi.value === status.name) ? "selected" : ""}>
                                                                {status.name}
                                                            </option>
                                                        })}
                                                    </select></td>
                                                }
                                            </tr>
                                        </tbody>
                                    </React.Fragment>
                                )
                            })
                            }
                        </table>
                    </div>
                )
            })
            }
        </form>
    );
}

/*
                                                        {statuses.map(status => {
                                                            return <td><option key={`stat${status.id.toString()}`} value={status.name}></option></td>
                                                        }}

*/


//{topics.map(elem => <option value={elem.code.toString()} key={elem.code.toString()}>{elem.name}</option>)}
// <td><input type="text" key={`stat${kpi.topicId}`} id={kpi.topicId} value={`status for ${kpi.value}`} onChange={handleChange} /></td>
