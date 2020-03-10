import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./GoogleMaps.css"
import GoogleMapsIcon from "../../images/googleMapIcon.png"

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -25.3895813,
      lng: -49.230458
    },
    zoom: 15
  };

  render() {

    const AnyReactComponent = ({ text }) => 
    <div className="google-maps-icon">
    <p>{text}</p>
    <img src={GoogleMapsIcon} alt=""/>
    </div>;

    return (
      // Important! Always set the container height explicitly
      <div className="google-maps-section">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAoxCBzGTzazye6AgkNxBTDhwaeYf0SRKM" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent 
            lat={-25.3893432}
            lng={-49.2312437}
            text={'Park Bacacheri'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;