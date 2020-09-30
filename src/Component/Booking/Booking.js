import React from 'react';
import './booking.css'
import { Link, useParams } from 'react-router-dom';
import dataCollection from '../data.json';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Booking = () => {
    const { dynamicLocation } = useParams();
    const tourInfo = dataCollection.find(pd => pd.location === dynamicLocation);
    const { location, aboutLocation } = tourInfo;
    return (
        <div className="d-flex row container text-justify bookingSection">
            <div className="aboutSection col-md-5">
                <h1>About {location} : </h1>
                <p>{aboutLocation}</p>
            </div>
            <div className="col-md-3">

            </div>
            <div className="col-md-4 bookingForm">
                <label htmlFor="origin">Origin</label>
                <input type="text" name="origin" id="" />
                <br />
                <label htmlFor="destination">destination</label>
                <input type="text" name="destination" value={location} id="" />
                <form noValidate>
                    <TextField
                        id="date"
                        label="From"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="date"
                        label="To"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
                <br/>
                <Link to="/hotels">
                    <button>Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Booking;