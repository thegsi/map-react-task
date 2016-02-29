var React       = require('react');
var Component = require('react').Component;

var InputForm = require('./Form.jsx');
var SimpleMap = require('./SimpleMapRender.jsx');


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

  setStatewithGeoCode: function(addressData){

    var houseNumber = addressData.House-Number;
    var street = "+" + addressData.Street.split(' ').join('+')  + "+";
    var city = addressData.City;

    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + houseNumber + street + city + "&components=country:UK&key=" + "AIzaSyC3u_S_ildAPZJKvq_ztsOt1tjgxCIW5ZU";

    //Allow ajax request to change the component's state
    var setStatewithGeoCodeThis = this;
    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json',
      success: function(gMapsresult){

        var lat = gMapsresult.results[0].geometry.location.lat;
        var lng = gMapsresult.results[0].geometry.location.lng;
        var key = gMapsresult.results[0].address_components[5].short_name + " " + setStatewithGeoCodeThis.state.markers.length;
        //console.log(gMapsresult.results[0].address_components[5].short_name);

        var newMarker = {
          position: {
            lat: lat,
            lng: lng
          },
          key: key,
          defaultAnimation: 2
        };

        var stateMarkersArray = setStatewithGeoCodeThis.state.markers.slice();
        stateMarkersArray.push(newMarker)

        setStatewithGeoCodeThis.setState({
                      markers:stateMarkersArray
                     })
      }
    })

  },


render: function(){

  return (
          <div>
            <SimpleMap markers={this.state.markers} />
            <InputForm canSubmit={this.state.canSubmit} enableButton={this.enableButton} disableButton={this.disableButton} setStatewithGeoCode={this.setStatewithGeoCode} clearStateMarkers={this.clearStateMarkers} />
          </div>
        )
  }

})

module.exports = SmartComponent;
