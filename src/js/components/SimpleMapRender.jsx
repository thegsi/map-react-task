var React       = require('react');
var Component = require('react').Component;

var GoogleMapLoader = require("react-google-maps").GoogleMapLoader;
var GoogleMap = require("react-google-maps").GoogleMap;
var Marker = require("react-google-maps").Marker;


var SimpleMap = function (props) {

  return (
    <section style={{height: "25em"}}>
      <GoogleMapLoader
         containerElement={<div {...props} style={{height: "25em"}}/>}
         googleMapElement={
           <GoogleMap ref={map => console.log("GoogleMap", map)} defaultZoom={5} defaultCenter={{lat:52.169423, lng: -1.225141}}  >
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
