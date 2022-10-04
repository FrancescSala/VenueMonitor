import React, { useState, useEffect } from "react";

export default function VenueKpisForm (props) {
    let [formData, setFormData] = useState([]);
    console.log('in Render');
    
    useEffect(() => {
        console.log('in useEffect');
            const url = 'http://localhost:4000/topics/' + props.venue;
            fetch(url)
                .then((res) => { 
                    if(!res.ok) throw new Error(`${res.status} ${res.statusText}`);
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
    },[props.venue]);

    const  handleSubmit = (event) => {
            event.preventDefault();
    }

    const handleChange = (event) => {
        const {name, type,value,checked} = event.target;
        setFormData(prevState => ( {...prevState, [name]: type === 'checkbox' ? checked : value, feedback: ''}));
    }

    // const categories = [];
    // formData.forEach((kpi, index) => {if (index === 0 || kpi.category !== formData[index-1].category) categories.push(kpi.category)});
    // console.log(categories);
    const categories = ['Equipment Deliveries'];

    
    return (
            <form key ={`${Math.random()}`}className="VenueInputForm" onSubmit={handleSubmit} >
                { categories.map((cat, index) => {
                    return (
                        <div key={`div_0_${index}_${Math.random()}`}>
                            <h3 key={`cat${index}_${Math.random()}`} className="VIF--Category">{cat}</h3>
                            <table key={`tab_${cat}_${Math.random()}`}>
                            {console.log(`category is ${cat}`)}
                            {console.log(Math.random())}
                            {console.log(Math.random())}
                            {formData.filter(kpi => kpi.category === cat).map((kpi,index2) => {
                                console.log(kpi.topicId);
                                return (
                                    <React.Fragment key={`frg${kpi.topicId}_${Math.random()}`}>
                                    {index2 === 0 && 
                                        <thead key={`hed_hed${kpi.topicId}_${Math.random()}`}>
                                        <tr key={`hed${kpi.topicId}_${Math.random()}`} className="VIF--TableHeader">
                                            <th key={`hed_name${kpi.topicId}_${Math.random()}`}></th>
                                            <th key={`hed_trck${kpi.topicId}_${Math.random()}`}>Track</th>
                                            <th key={`hed_valu${kpi.topicId}_${Math.random()}`}>Kpi</th>
                                            {kpi.type.endsWith('-status') && <th key={`hed_stat${kpi.topicId}_${Math.random()}`}>Status</th>}
                                        </tr>
                                        </thead>
                                    }
                                    <tbody key={`bod${kpi.topicId}_${Math.random()}`}>
                                    <tr key={`row${kpi.topicId}_${Math.random()}`}>
                                        <td key={`name${kpi.topicId}_${Math.random()}`}>{kpi.name}</td>
                                        <td key={`trck${kpi.topicId}_${Math.random()}`}>{kpi.track}</td>
                                        <td key={`valu${kpi.topicId}_${Math.random()}`}>{kpi.value}</td>
                                        <td key={`stat${kpi.topicId}_${Math.random()}`}>status for {kpi.value}</td>
                                    </tr>
                                    </tbody>
                                    </React.Fragment>

                                )
                            })
                            }
                            </table>
                        </div>
                    )})
                }
            </form>
    );
}
