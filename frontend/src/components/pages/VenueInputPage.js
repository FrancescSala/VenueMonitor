import React from "react";
import { useParams } from 'react-router-dom';
import VenueHorizontalLayout from '../layout/VenueHorizontalLayout';
    /* In this page I want the data of the venue ot be rendered different 
       from how is rendered in page VenueListPage. 
       I have prefered then to create a new Venue component, to be doing 
       a lot of conditional rendering and conditional styling
    */ 
import VenueKpisForm from '../layout/VenueKpisForm';

export default function VenueInputPage() {
    const { venueProps } = useParams();
    const venue = JSON.parse(venueProps);
    const venueCode = venue.code;
    
    return(
        <React.Fragment>
            <h2>Venue Input Page</h2>
            <p> page under construction</p>
{/*            <VenueHorizontalLayout {...venue} /> */}
            <VenueKpisForm venue={venueCode} />
        </React.Fragment>
    );
}