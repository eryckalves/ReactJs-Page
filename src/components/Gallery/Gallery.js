import React, { Component } from 'react'
import './Gallery.css';
import ImgGallery from "./imgGallery";
import {Textfield , Grid , Cell} from "react-mdl";

export class Gallery extends Component {    

    constructor(props) {
        super(props)
        this.updateSearch = this.updateSearch.bind(this)
        this.state = {
            search: "",
        }
    }

    updateSearch = event =>
    {
        this.setState({search: event.target.value.substr(0,20) })
    }

    render() {
        
        return (
            <div className="gallery-section">
                <Grid>
                <Cell className="img-title-section" col={12}>
                    <h1>Gallery</h1>
                </Cell>
                <Cell className="img-search-section" col={12}>
                    <Textfield
                        className="img-search-textfield"
                        floatingLabel
                        value={this.state.search}
                        onChange={this.updateSearch}
                        label="Type the tags of the image for search..."
                        style={{width: '300px'}}
                    />
                </Cell>
                <Cell className="img-content-section" col={12}>
                    <ImgGallery search={this.state.search} />
                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Gallery
