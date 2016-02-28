var React       = require('react');
var Component = require('react').Component;

var GoogleMapLoader = require("react-google-maps").GoogleMapLoader;
var GoogleMap = require("react-google-maps").GoogleMap;
var Marker = require("react-google-maps").Marker;


var SimpleMap = function (props) {
  return (

    <section style={{height: "200px"}}>
      <GoogleMapLoader
         containerElement={
         <div
           {...this.props}
           style={{
             height: "100%",
           }}
          />
         }

        googleMapElement={
          <GoogleMap
            ref={map => console.log(map)}
            defaultZoom={3}
            defaultCenter={{lat:-25.363882, lng: 131.044922}}
          />

         }
      />
    </section>
  );
}

module.exports = SimpleMap;
// onClick={this.handleMapClick}{this.state.markers.map((marker, index) => {
//   return (
//     <Marker
//       {...marker}
//       onRightClick={this.handleMarkerRightclick.bind(this, index)} />
//   );
// })}
//</GoogleMap>
