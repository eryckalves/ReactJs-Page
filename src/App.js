import React from 'react';
import './App.css';
import { Layout, Header , Navigation , Drawer , Content } from 'react-mdl';
import {  Route, Switch , Link } from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import Aboutus from './components/Aboutus/Aboutus';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Gallery from './components/Gallery/Gallery';
import Footers from './components/Footers/Footers';

function App() {
  return (
    <div className="App">
        <Layout>
            <Header className="header-color" title="Eryck" scroll>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/project">Project</Link>
                    <Link to="/gallery">Gallery</Link>
                </Navigation>
            </Header>
            <Drawer title="Eryck Alves">
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/project">Project</Link>
                    <Link to="/gallery">Gallery</Link>
                </Navigation>
            </Drawer>
            <Content>
              <Switch>
                  <Route path="/" exact component={Homepage} />
                  <Route path="/Aboutus" exact component={Aboutus} />
                  <Route path="/Contact" exact component={Contact} />
                  <Route path="/Projects" exact component={Projects} />
                  <Route path="/Gallery" exact component={Gallery} />
              </Switch>
              <Footers/>
            </Content>
        </Layout>
    </div>
  );
}

export default App;
