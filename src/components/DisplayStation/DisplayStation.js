import React from 'react';
import './DisplayStation.css'

export const DisplayStation = props => {
    return (
        <div className='station-container '>
        <h2>{props.station}</h2>
        </div>
    );
}