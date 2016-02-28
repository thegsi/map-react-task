var React       = require('react');
var Component = require('react').Component;
//var env = require('env2')('.env');

var InputForm = require('./Form.jsx');
//var Markers = require('./Markers.jsx');
var SimpleMap = require('./SimpleMapRender.jsx');


var SmartComponent = React.createClass({

  getInitialState: function() {
      return {
               markers:[{
                 position: {
                   lat: 55.236152,
                   lng: -3.1744107
                 },
                 key: "blacket",
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


  setStatewithGeoCode: function(addressData){
  
    var houseNumber = addressData.House-Number;
    var street = "+" + addressData.Street.split(' ').join('+')  + "+";
    var city = addressData.City;

    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + houseNumber + street + city + "&components=country:UK&key=" + "AIzaSyC3u_S_ildAPZJKvq_ztsOt1tjgxCIW5ZU";


    var setStatewithGeoCodeThis = this;
    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json',
      success: function(result){

        var lat = result.results[0].geometry.location.lat;
        var lng = result.results[0].geometry.location.lng;

        setStatewithGeoCodeThis.setState({
                      markers:[{
                        position: {
                          lat: lat,
                          lng: lng
                        },
                        key: "blacket",
                        defaultAnimation: 2
                      }]
                     })
      }
    })

  },


render: function(){

  return (
          <div>
            <InputForm canSubmit={this.state.canSubmit} enableButton={this.enableButton} disableButton={this.disableButton} setStatewithGeoCode={this.setStatewithGeoCode} />
            <SimpleMap markers={this.state.markers} />
          </div>
        )
  }

})

module.exports = SmartComponent;
