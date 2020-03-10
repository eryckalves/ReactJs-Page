import React, { Component } from "react";
import "./SliderAbout.css";

export class SilderAbout extends Component {

    constructor(props) {
        super(props);
        //Important bind : get all info about the page and send to funciton
        //this.verifyActiveBtn = this.verifyActiveBtn.bind(this);
        this.state = {
            currentSlider: 0,
            prevSlider:0,
            indexteste: "",
            Quote:
                {
                    0:{
                        name:"Joss Whedon",
                        text:"Humor keeps us alive. Humor and food. Don’t forget food. You can go a week without laughing.",
                    },
                    1:{
                        name:"Elizabeth Gilbert",
                        text:"Tell me what you eat, and I will tell you what you are.",
                    },
                    2:{
                        name:"Gary Taubes",
                        text:"We don’t get fat because we overeat; we overeat because we’re getting fat.",
                    }
                }
        };
    }

    render() {

        return (
            <div className="slider-about">
                <div className="slider-content">
                    <p className="slider-item-quote">{this.state.Quote[this.state.currentSlider].text}</p>
                    <p className="slider-item-title">{this.state.Quote[this.state.currentSlider].name}</p>
                </div>
                <div className="button-section">
                    {/* count how many items are in Quote and do whatever you want   */}
                    {Object.keys(this.state.Quote).map(index =>(
                        <span
                            onClick={ () => this.setState({currentSlider : index, prevSlider: this.state.currentSlider})}
                            className={(parseInt(this.state.currentSlider) === parseInt(index) ? "Active" :"")}
                            key={index}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default SilderAbout

