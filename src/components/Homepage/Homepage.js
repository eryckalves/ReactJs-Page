import React, { Component } from 'react'
import './Homepage.css';
import {Grid , Cell } from 'react-mdl'
import avatar from '../../images/eryckalves.jpg'; // Tell webpack this JS file uses this image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare , faReact, faHtml5 , faCss3 , faYoutubeSquare , faInstagram ,faTwitter, faLaravel ,faBootstrap } from '@fortawesome/free-brands-svg-icons';
import Button from '@material-ui/core/Button';

export class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <Grid className="homepage-grid">
                    <Cell className="homepage-Cell" col={12}>
                        <div className="avatar-section-img">
                            <img col1="col1" className="avatar-img" src={avatar} alt=""/>
                        </div>                       
                    </Cell>
                    <div className="homepage-card">
                        <Cell className="homepage-card-items" col={8} >
                            <Cell className="homepage-card-item" col={4}>
                                <h1>Language</h1>
                                <a href="/"><FontAwesomeIcon className="homepage-card-item-icon" icon={faReact}/> ReactJS</a>
                                <a href="/"><FontAwesomeIcon className="homepage-card-item-icon" icon={faLaravel}/> Laravel</a>
                                <a href="/"><FontAwesomeIcon className="homepage-card-item-icon" icon={faBootstrap}/> Bootstrap4</a>
                                <a href="/"><FontAwesomeIcon className="homepage-card-item-icon" icon={faCss3}/> CSS3</a>
                                <a href="/"><FontAwesomeIcon className="homepage-card-item-icon" icon={faHtml5}/> HTML5</a>
                                
                            </Cell>
                            <Cell className="homepage-card-item" col={4}>
                                <h1>Social Media</h1>
                                <a href="/"><FontAwesomeIcon className="homepage-card-item-icon" icon={faYoutubeSquare}/> Youtube</a>
                                <a href="/"><FontAwesomeIcon className="homepage-card-item-icon" icon={faInstagram}/> Instagram</a>
                                <a href="/"><FontAwesomeIcon className="homepage-card-item-icon" icon={faTwitter}/> Twitter</a>
                                <a href="/"><FontAwesomeIcon className="homepage-card-item-icon" icon={faFacebookSquare}/> Facebook</a>                     
                            </Cell>
                            <Cell className="homepage-card-item" col={4}>
                                <div className="">
                                    <h1>FULLSTACK</h1>
                                    <span>A full stack web developer is a person who can develop both client and server software.</span>
                                </div>                       
                            </Cell>
                        </Cell>
                    </div>
                    <Cell className="codes-section" col={12}>
                        <div>
                            <h1> Codes GibHub</h1>
                            <a href="https://github.com/eryckalves" target="_blank" rel="noopener noreferrer"><Button className="codes-button">Site</Button></a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Homepage
