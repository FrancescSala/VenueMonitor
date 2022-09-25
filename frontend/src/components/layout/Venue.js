import React from 'react';
import { Link } from 'react-router-dom';

export default function Venue(props) {
    const linkDestination = `/vm/venues/input/${JSON.stringify(props)}`;
    return (
        <div className="Venue">
          <Link to={linkDestination}>
            <img className="Venue--Picture" src={`/venues/${props.code}.jpeg`} alt={props.description}></img>
          </Link>
          <Link to={linkDestination}>
            <div className="Venue--Code"> {props.code}</div>
          </Link>
          <div className="Venue--Name">{props.name}</div>
          <div className="Venue--Disciplines">
            {props.disciplines.map(dis => <img className="Venue--DisIcon" src={`/disciplines/${dis.code}_transparent.png`} key={`${props.code}#${dis.code}`} alt={dis} title={dis.name}></img>)}
          </div>
        </div>
    );
}
