import React, { useState, useEffect } from "react";

export default function VenueKpisForm (props) {
    let [formData, setFormData] = useState([]);
    
    useEffect(() => {
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

    const categories = [];
    formData.forEach((kpi, index) => {if (index === 0 || kpi.category !== formData[index-1].category) categories.push(kpi.category)});
    console.log(categories);

    
    return (
            <form className="VenueInputForm" onSubmit={handleSubmit} >
                {
                categories.map((cat, index) => {
                    return (
                        <div key={`div_0_${index}`}>
                            <h3 key={`cat${index}`}>{cat}</h3>
                            {formData.filter(kpi => kpi.category === cat).map(kpi => {
                                let x = 1
                                return (
                                    <div key={`div${kpi.topicId}`}>
                                    <label key={`lab${kpi.topicId}`} htmlFor={kpi.topicId}>{kpi.name}</label>
                                    <input key={`trk${kpi.topicId}`} id={`trk${kpi.topicId}`} type="checkbox" name={`track${kpi.name}`} checked={kpi.track} onChange={handleChange} />
                                    <input key={`inp${kpi.topicId}`} id={kpi.topicId} name={kpi.name} value={kpi.value} onChange={handleChange} />
                                    {kpi.type.endsWith('-status') && <input key={`stu${kpi.topicId}`} id={kpi.topicId} name={`stu${kpi.name}`} value={kpi.value} onChange={handleChange} />}
                                    </div>
                                )
                            })
                            }
                        </div>
                    )
                })}
            </form>
    );
}

/*
                {formData.map((kpi, index) => {
                    return (
                        <div key={`div_0_${index}`}>
                        {(index === 0 || kpi.category !== formData[index-1].category) && <h3 key={`cat${index}`}>{kpi.category}</h3>}
                        <div key ={`div${index}`}>
                        <label key={`lab${index}`} htmlFor={kpi.topicId}>{kpi.name}</label>
                        <input key={`inp${index}`} id={kpi.topicId} name={kpi.name} value={kpi.value} onChange={handleChange} />
                        </div>
                        </div>
                    )
                })}

*/