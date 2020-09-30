import React from 'react';
import dataCollection from '../data.json';
import SingleLocation from '../SingleLocation/SingleLocation';
import './homeDisplay.css';

const HomeDisplay = () => {
    const hangleLocationClick = (location) => {
        console.log(location, ' clicked')
    }

    return (
        <div className='homeDisplayApp'>
            <h1>Our Most Popular Packages</h1>
            {
                dataCollection.map(data => <SingleLocation singleLocation={data} locationBG={data.locationPhoto} hangleLocationClick={hangleLocationClick} key={data.location}/>)
            }
        </div>
    );
};

export default HomeDisplay;