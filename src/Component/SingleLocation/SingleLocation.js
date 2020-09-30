import React from 'react';
import { Link } from 'react-router-dom';
import './singleLoocation.css';

const SingleLocation = (props) => {
    const { location, locationPhoto } = props.singleLocation;
    const bg = props.locationBG;
    const hangleLocationClick = props.hangleLocationClick;

    return (
        <Link to={`/tour/${location}`}>
            <div className="locationContainer" onClick={() => hangleLocationClick(location)}>
                <div className="locationDiv" style={{ backgroundImage: 'url(' + bg + ')' }}>
                    <h1>{location}</h1>
                </div>
            </div>
        </Link>
    );
};

export default SingleLocation;