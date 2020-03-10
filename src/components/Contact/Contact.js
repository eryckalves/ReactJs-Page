import React, { Component } from 'react'
import "./Contact.css"
import SimpleMap from "./GoogleMaps"
import { TextField , Paper, Button } from '@material-ui/core';
import contactImg1 from "../../images/Contact1.jpg";
import contactImg2 from "../../images/Contact2.jpg";

export class Contact extends Component {

    render() {

        return (
            <div className="contact-section">
                <h1>Contact</h1>
                <div className="contact-items">
                    <div className="contact-items-form-map">
                        <div className="contact-items-left">
                            <Paper className="contact-maps-left">
                                <p>R. Paulo Nadolny - Bacacheri, Curitiba - PR, 82510-410</p>
                                <div className="contact-google-map"><SimpleMap/></div>    
                            </Paper>
                        </div>
                        <div className="contact-items-right">
                            <Paper className="contact-items-right-paper">
                                <p>Send us a Message</p>
                                <div className="contact-items-right-content">
                                    <TextField id="1" label="Name" />
                                    <TextField id="2" label="E-mail" />
                                    <TextField id="3" label="Contact Number" />
                                    <div className="contact-right-button">
                                        <Button  variant="contained" color="primary">Send</Button>
                                    </div>
                                </div>
                            </Paper>
                        </div>
                    </div>
                    <div className="expasionPanel-content">
                        <img src={contactImg1} alt=""/>
                        <img src={contactImg2} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
