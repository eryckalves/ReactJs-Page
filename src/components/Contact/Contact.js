import React, { Component } from 'react'
import "./Contact.css"
import SimpleMap from "./GoogleMaps"
import { TextField , Paper, Button, GridList ,GridListTile } from '@material-ui/core';
import  SimpleReactLightbox  from "simple-react-lightbox";
import  {SRLWrapper }  from "simple-react-lightbox";
import contactImg1 from "../../images/Contact1.jpg";
import contactImg2 from "../../images/Contact2.jpg";
import contactImg3 from "../../images/Contact3.jpg";
import contactImg4 from "../../images/Contact4.jpg";

export class Contact extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
        }
    }
    

    render() { 
        const tileData = [
                            {
                                img: contactImg1,
                                title: "contact1"
                            },
                            {
                                img: contactImg2, 
                                title: "contact2"
                            },
                            {
                                img: contactImg3,
                                title: "contact3"
                            },
                            {
                                img: contactImg4,
                                title: "contact4"
                            }
                        ]
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
                        <SimpleReactLightbox>
                            <SRLWrapper>
                                <GridList cellHeight={160} className="" cols={2}>
                                {tileData.map(tile => (
                                <GridListTile key={tile.img} cols={tile.cols || 2}>
                                <a href={tile.img} data-attribute="SRL">
                                    <img src={tile.img} alt={tile.title} />
                                </a>
                                </GridListTile>
                                ))}
                                </GridList>
                            </SRLWrapper>
                        </SimpleReactLightbox>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
