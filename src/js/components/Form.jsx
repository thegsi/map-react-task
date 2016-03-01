var React = require('react');
var PropTypes = React.PropTypes;

var Formsy = require('formsy-react');
var Input = require('formsy-material-ui').FormsyText;

var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;


var AddressInputForm = React.createClass({

  propTypes:{
    setStatewithGeoCode: React.PropTypes.func,
    canSubmit: React.PropTypes.bool,
    enableButton: React.PropTypes.func,
    disableButton: React.PropTypes.func
  },

  enableButton: function () {
    this.props.enableButton();
  },

  disableButton: function () {
    this.props.disableButton();
  },

  submit: function (addressData) {

    //TO DO change text input colour back to original
    this.refs.houseNumber.resetValue();
    this.refs.street.resetValue();
    this.refs.city.resetValue();
    this.props.setStatewithGeoCode(addressData);
  },


  render: function () {

    var divStyle = {paddingTop:'1em',
                   paddingRight:'3em',
                   paddingBottom:'3em',
                   paddingLeft:'3em',
                   fontFamily: 'Roboto',
                   fontSize: "14px"};

    //TO DO change label text to lower case
    var buttonStyle = {paddingTop:'0.5em',
                       paddingRight:'0.5em',
                       paddingBottom:'0.5em',
                       paddingLeft:'0.5em',
                       fontFamily: 'Roboto',
                       fontSize: "14px"};

      return (
          <div style={divStyle}>
            <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
              <Input ref="houseNumber"
                  name="House-Number"
                  label="House number"
                  placeholder="House number"
                  value=""
                  type="text"
                  validations="isNumeric"
                  fullWidth="true"
                  onKeyDown={() => console.log("onEnterKeyDown")}
                  required/>
                <Input ref="street"
                  name="Street"
                  label="Street"
                  placeholder="Street"
                  value=""
                  type="text"
                  fullWidth="true"
                  onKeyDown={() => console.log("onEnterKeyDown")}
                  required/>
                <Input ref="city"
                  name="City"
                  label="City"
                  placeholder="City"
                  value=""
                  type="text"
                  fullWidth="true"
                  onKeyDown={() => console.log("onEnterKeyDown")}
                  required/>
            <div style={buttonStyle}>
              <RaisedButton label="Display address" type="submit" id="inputButtonGeocode"  disabled={!this.props.canSubmit} fullWidth="true" />
            </div>
          </Formsy.Form>

            <div style={buttonStyle}>
              <RaisedButton label="Clear markers" onClick={this.props.clearStateMarkers} id="clearStateMarkersButton" fullWidth="true" />
            </div>
        </div>
      )
    }
});


module.exports = AddressInputForm;
