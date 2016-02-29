var React       = require('react');
var PropTypes = React.PropTypes;

var Formsy = require('formsy-react');
var Input = require('formsy-react-components').Input;

var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;


var AddressInputForm  = React.createClass({

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

    this.props.setStatewithGeoCode(addressData);
  },


  render: function () {

      return (
          <div>
            <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
              <Input name="House-Number"
                  label="House-Number"
                  value=""
                  type="text"
                  validations="isNumeric"
                  required required/>
              <Input name="Street"
                  label="Street"
                  value=""
                  type="text"
                  required required/>
              <Input name="City"
                  label="City"
                  value=""
                  type="text"
                  required required/>
                <button type="submit" id="inputButtonGeocode"  disabled={!this.props.canSubmit}>Display address</button>
                <RaisedButton label="Display address" type="submit" id="inputButtonGeocode"  disabled={!this.props.canSubmit} />
          </Formsy.Form>
          <RaisedButton label="Clear markers" onClick={this.props.clearStateMarkers} id="clearStateMarkersButton" />
        </div>
      )
    }
});


module.exports = AddressInputForm;
