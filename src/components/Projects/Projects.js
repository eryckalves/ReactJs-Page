import React, { Component } from 'react'
import './Projects.css';
import {Tabs , Tab , Grid , Cell , Card , CardTitle, CardText , CardActions, Button} from 'react-mdl'
import cardImgReact from "../../images/reactlogo.png"
import cardImgLaravel from "../../images/laravellogo.png"

export class Projects extends Component {

    constructor(props){
        super(props);
        this.state= {activeTab :0};
    };

    toggleCategories() {
        switch (this.state.activeTab) {
            case 0:
              return( 
                <div className="section-cards">
                    <div className="card-item">
                        <Card className="Card" >
                            <CardTitle className="img-card" expand style={{color: '#fff', background: 'url(' + cardImgReact  +') center / cover #010a43' , height: "300px"}}><h1>ReactjS</h1></CardTitle>
                            <CardText className="card-txt">
                                Language used ReactJS, JavaScript , CSS3 , HTML5 , Font-Awesome, react-router-dom and etc...
                            </CardText>
                            <CardActions border>
                                <a href="https://eryckvalves.000webhostapp.com/"><Button colored>View Site</Button></a>
                                <a href="https://github.com/eryckalves/ReactJs-Page"><Button colored>GitRuB CodE</Button></a>
                            </CardActions>
                        </Card>
                    </div>

                </div>
              )
            case 1:
                return( 
                    <div className="section-cards">
                        <div className="card-item">
                            <Card className="Card" >
                                <CardTitle className="img-card" expand style={{color: '#fff', background: 'url(' + cardImgLaravel  +') center / cover #010a43' , height: "300px"}}><h1>LaraveL</h1></CardTitle>
                                <CardText className="card-txt">
                                    Language used Laravel, JavaScript , CSS3 , HTML5 , Bootrap, Font-Awesome, Vue.JS and etc...
                                </CardText>
                                <CardActions border>
                                    <a href="https://eryckalves.000webhostapp.com/"><Button colored>View Site</Button></a>
                                    <a href="https://github.com/eryckalves/laravel_portifolio/"><Button colored>GitRuB CodE</Button></a>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                )
            default:
                return <div>falhou</div>
          }
    };

    render() {

        return (
            <div className="section-projects">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab : tabId})}>
                    <Tab>ReactJs</Tab>
                    <Tab>Laravel</Tab>
                </Tabs>

                <section className="section-projects-grip">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects
