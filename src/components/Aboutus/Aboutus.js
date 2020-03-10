import React, { Component } from 'react';
import './Aboutus.css';
import {Grid , Cell} from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import SliderAbout from './SilderAbout';
import CardAbout from "./AboutCard";

export class Aboutus extends Component {
    
    render() {       
        return (
            <div className="section-aboutus">
                <div className="aboutus-title">
                    <h1>About US</h1>
                </div>
                <Grid className="aboutus-grip">
                    <Cell className="about-title" col={12}>
                        <h1>
                            We Are What we Eat. #<FontAwesomeIcon className="avatar-icon" icon={faPizzaSlice} />
                        </h1>  
                    </Cell>
                    <Cell className="about-sub-title" col={12}>
                        <h5>Wrong !! We are not what we eat, we are what the animals ate.</h5>
                    </Cell>
                    <Cell col={12}>
                         <CardAbout ></CardAbout>
                    </Cell>
                    <Cell col={12} className="section-slider">
                            <SliderAbout/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Aboutus

