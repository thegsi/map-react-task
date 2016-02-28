var React       = require('react');
var Component = require('react').Component;

var GoogleMapLoader = require("react-google-maps").GoogleMapLoader;
var GoogleMap = require("react-google-maps").GoogleMap;
var Marker = require("react-google-maps").Marker;


var SimpleMap = function (props) {

  return (
    <section style={{height: "200px"}}>
      <GoogleMapLoader
         containerElement={<div {...props} style={{height: "100%"}}/>}
         googleMapElement={
           <GoogleMap ref={map => console.log("GoogleMap", map)} defaultZoom={3} defaultCenter={{lat:55.936152, lng: -3.1744107}} >
             {props.markers.map((marker, index) => {
               return (
                 <Marker {...marker} />
               );
             })}
          </GoogleMap>
         }
      />
    </section>
  );
}

module.exports = SimpleMap;

// { onRightClick={this.handleMarkerRightclick.bind(this, index)} }
