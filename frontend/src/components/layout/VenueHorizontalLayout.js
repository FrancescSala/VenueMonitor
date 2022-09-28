import React from 'react';

export default function VenueHorizontalLayout(props) {
    return (
        <div className="VenueHL">
          <img className="VenueHL--Picture" src={`/venues/${props.code}.jpeg`} alt={props.description}></img>
          <div className="VenueHL--Container">
            <div className="VenueHL--Code"> {props.code}</div>
            <div className="VenueHL--Name">{props.name}</div>
            <p className="VenueHL--Description">{props.description}</p>
            <div className="VenueHL--Disciplines">
              {props.disciplines.map(dis => <img className="Venue--DisIcon" src={`/disciplines/${dis.code}_transparent.png`} key={`${props.code}#${dis.code}`} alt={dis} title={dis.name}></img>)}
            </div>
          </div>
        </div>
    );
}
