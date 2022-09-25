import React from "react";
import { useParams } from 'react-router-dom';
import Venue from '../layout/Venue';

export default function VenueInputPage() {
    const { venueProps } = useParams();
    const venue = JSON.parse(venueProps)
    console.log(venue.code);
    console.log(venue.description);
    console.log(venue);
    console.log(venueProps);
    return(
        <React.Fragment>
            <h2>Venue Input Page</h2>
            <p> page under construction</p>
            <p>{venueProps}</p>
            <Venue {...venue} />
        </React.Fragment>
    );
}