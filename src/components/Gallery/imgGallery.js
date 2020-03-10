import React, { Component } from 'react';
import Gallery1 from "../../images/Gallery1.jpg";
import Gallery2 from "../../images/Gallery2.jpg";
import Gallery3 from "../../images/Gallery3.jpg";
import Gallery4 from "../../images/Gallery4.jpg";
import "./imgGallery.css"

export class imgGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgNest:[
                {
                    id:1,
                    imgPath: Gallery1,
                    captions: "montain people lake"
                },
                {
                    id:2,
                    imgPath: Gallery2,
                    captions: "city tree sea"
                },
                {
                    id:3,
                    imgPath: Gallery3,
                    captions: "montain lake snow"
                },
                {
                    id:4,
                    imgPath: Gallery4,
                    captions: "city lake house"
                }
            ],
            
        }
    }

    searchForm = (search) =>{
        return (imgNestItem) =>
        { 
           return imgNestItem.captions.includes(search.toLowerCase()) || !search ;
        }
    }

    render() {
        return (
            <div className="imgGallery-section">
                {this.state.imgNest.filter(this.searchForm(this.props.search).bind(this)).map( imgItem => (
                <div className="imgGalley-item" key={imgItem.id}>
                    <p key={imgItem.id+1000}>{imgItem.captions}</p>
                    <img key={imgItem.id+2000} src={imgItem.imgPath} alt=""/>
                </div>
                ) )}
            </div>
        )
    }
}

export default imgGallery
