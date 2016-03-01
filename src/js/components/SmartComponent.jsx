var React = require('react');
var Component = require('react').Component;

var InputForm = require('./Form.jsx');
var SimpleMap = require('./SimpleMapRender.jsx');

var center = require('turf-center');


var mui = require('material-ui');
var AppBar = mui.AppBar;


var SmartComponent = React.createClass({

  getInitialState: function() {
      return {
               markers:[{
                 position: {
                   lat: 55.236152,
                   lng: -3.1744107
                 },
                 key: "EH9 1RJ",
                 defaultAnimation: 2
               }],
               canSubmit: false
      }
  },

  enableButton: function () {
      this.setState({
        canSubmit: true
      });
  },

  disableButton: function () {
    this.setState({
      canSubmit: false
    });
  },

  clearStateMarkers: function(){
    this.setState({
                markers:[]
    })
  },

  setStatewithCenterPoint: function(){

    var stateMarkersArray = this.state.markers.slice();

    var stateMarkersArrayGeoJSON = {
      "type": "FeatureCollection",
      "features": []
    };

    //Convert Google Maps markers to GeoJSON version or Turf.JS to analyse
    stateMarkersArray.forEach(function(elem, i){
      var elemLat = elem.position.lat;
      var elemLng = elem.position.lng;

      var markerGeoJSON = {
        "type": "Feature",
        "properties": {},
        "geometry": {
           "type": "Point",
           "coordinates": [elemLat, elemLng]
         }
      }

     stateMarkersArrayGeoJSON.features.push(markerGeoJSON);
    });


    var centerPt = center(stateMarkersArrayGeoJSON);

    var centerLat = centerPt.geometry.coordinates[0];
    var centerLng = centerPt.geometry.coordinates[1];

    //Create Google Maps version of centre point marker from Turf.JS GeoJSON result. With more time I would configure Google Maps to use GeoJSON markers.
    var newMarkerCenter = {
      position: {
        lat: centerLat,
        lng: centerLng
      },
      key: "center",
      defaultAnimation: 1
    };

    stateMarkersArray.push(newMarkerCenter);

    this.setState({
      markers:stateMarkersArray
    })
  },

  setStatewithGeoCode: function(addressData){

    var houseNumber = addressData.House-Number;
    var street = "+" + addressData.Street.split(' ').join('+')  + "+";
    var city = addressData.City;

    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + houseNumber + street + city + "&components=country:UK&key=" + "AIzaSyC3u_S_ildAPZJKvq_ztsOt1tjgxCIW5ZU";

    //Change scope so ajax request can change the component's state
    var setStatewithGeoCodeThis = this;
    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json',
      success: function(gMapsresult){

        var lat = gMapsresult.results[0].geometry.location.lat;
        var lng = gMapsresult.results[0].geometry.location.lng;
        var key = gMapsresult.results[0].address_components[5].short_name + " : " + setStatewithGeoCodeThis.state.markers.length;

        //Error handle for responses with no coordinates
        if(isNaN(lat) || isNaN(lng)) {
          return window.alert("This is not a valid address");
        } else {
          var newMarker = {
            position: {
              lat: lat,
              lng: lng
            },
            key: key,
            defaultAnimation: 2
          };

          var stateMarkersArray = setStatewithGeoCodeThis.state.markers.slice();
          var stateMarkersArrayLength = stateMarkersArray.length - 1;

          //Remove old center from the state. Possibly not the best way to do this, I added centerpoint late im the day.
          if (stateMarkersArrayLength > 0 && stateMarkersArray[stateMarkersArrayLength].key === "center"){
            stateMarkersArray.pop();
          };
          stateMarkersArray.push(newMarker);

          setStatewithGeoCodeThis.setState({
            markers:stateMarkersArray
          })
          setStatewithGeoCodeThis.setStatewithCenterPoint();
        }
      }
    })

  },


  render: function(){

    return (
      <div>
        <AppBar title="Google maps geocoder UK" iconElementLeft={<div></div>} />
        <SimpleMap markers={this.state.markers} />
        <InputForm canSubmit={this.state.canSubmit} enableButton={this.enableButton} disableButton={this.disableButton} setStatewithGeoCode={this.setStatewithGeoCode} clearStateMarkers={this.clearStateMarkers} />
       </div>
     )
   }

})

module.exports = SmartComponent;
