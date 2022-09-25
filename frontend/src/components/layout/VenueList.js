import {useState, useEffect } from 'react';
import Venue from './Venue';


export default function VenueList() {

  let [venues,setVenues] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/venues')
        .then((res) => { 
            if(!res.ok) throw new Error(`${res.status} ${res.statusText}`);
            else return res.json();
          })
        .then(data => {setVenues(data);})
        .catch(error => {
            console.dir(error);
            console.log(error.response);
            console.log(error.message);
        });
      // Note: In this case we do not need to return a clean-up function
    },[]);

  return (
  
    <div>
        <div className="VenueList">{venues.map((venue) => <div key={venue.code}><Venue {...venue}/></div>)}</div>
    </div>
  );
}

