var React       = require('react');

var Formsy = require('formsy-react');
var Input = require('formsy-react-components').Input;

var AddressInputForm  = React.createClass({


  enableButton: function () {
      this.props.enableButton();
  },

  disableButton: function () {

    //this.props.disableButton();
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
              <button type="submit" id="inputButtonGeocode"  disabled={!this.props.canSubmit}>Click to Geocode</button>
            </Formsy.Form>
          </div>
      )
    }
});



var InputForm = React.createClass({

  render: function(){

    return (
        <div>
          <AddressInputForm setStatewithGeoCode={this.props.setStatewithGeoCode} />
        </div>
    )
  }

});

module.exports = AddressInputForm;
