import React, { Component } from 'react'
import './Homepage.css';
import {Grid , Cell, Button } from 'react-mdl'
import avatar from '../../images/eryckalves.jpg'; // Tell webpack this JS file uses this image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare , faReact, faHtml5 , faCss3 , faYoutubeSquare , faInstagram ,faTwitter, faLaravel } from '@fortawesome/free-brands-svg-icons'

export class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <Grid className="homepage-grip">
                    <Cell className="homepage-Cell" col={12}>
                        <div className="avatar-section-img">
                            <img col1="col1" className="avatar-img" src={avatar} alt=""/>
                        </div>
                        <div col2="col2" className="banner-text">
                            <h1>Full Stack</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptate.</p>
                            <div className="avatar-section-icon">
                                <div className="avatar-item-icon">
                                    <FontAwesomeIcon className="avatar-icon" icon={faReact} /><span>ReactJS</span>
                                </div>
                                <div className="avatar-item-icon">
                                    <FontAwesomeIcon className="avatar-icon" icon={faLaravel} /><span>Laravel</span>
                                </div>
                                <div className="avatar-item-icon">
                                    <FontAwesomeIcon className="avatar-icon" icon={faHtml5} /><span>HTML</span>
                                </div>
                                <div className="avatar-item-icon">
                                    <FontAwesomeIcon className="avatar-icon" icon={faCss3} /><span>CSS3</span>
                                </div>
                            </div>
                            <div className="social-media">
                                    <a href="/"><FontAwesomeIcon className="avatar-icon" icon={faFacebookSquare} /></a>
                                    <a href="/"><FontAwesomeIcon className="avatar-icon" icon={faYoutubeSquare} /></a>
                                    <a href="/"><FontAwesomeIcon className="avatar-icon" icon={faInstagram} /></a>
                                    <a href="/"><FontAwesomeIcon className="avatar-icon" icon={faTwitter} /></a>
                            </div>
                        </div>
                        <div col3="col3" className="codes-section">
                            <h1> Codes GibHub</h1>
                            <a href="https://github.com/eryckalves" target="_blank" rel="noopener noreferrer"><Button className="codes-button" raised>Site</Button></a>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Homepage
