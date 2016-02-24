var UserForm = React.createClass({
  getInitialState: function(){
    return {};
  },
  setStateValue: function(stateValue, value){
   var data = {};
   data[stateValue] = value;
   var newState = $.extend(this.state, data);
   this.setState(newState);
  },
  saveUser: function(event){
    event.preventDefault();
    var apiUrl = '/api/users/create';
    $.post(apiUrl, this.state)
      .then(function(promise){
        window.location.href='/admin';
      });
  },
  componentDidUpdate: function(){
    var num_regex = /^\d+$/;
    var form = $('#user-form-component');
    var stateSelect = $('#state_input');
    var countrySelect = $('#country_input');
    var selectValid = (stateSelect.val() && countrySelect.val());
    var postal = $('#postal_input').val()
    var postalLength = postal.length;
    var postalLengthValid = (postalLength===9||postalLength===5);
    form.validate()
    if (!form.valid() || !selectValid ||
        !postalLengthValid || !num_regex.test(postal))
      $('#save-button').attr('disabled', 'disabled');
    else
      $('#save-button').removeAttr('disabled');
  },
  render: function(){
    return (
      <div>
        <h1>Register a New User</h1>
        <h4> * = required field</h4>
        <form className="ui form" id="user-form-component"
              onSubmit={this.saveUser}>
          <div className="ui grid">
            <TextInput label="First Name"
                       stateField="first_name"
                       setStateValue={this.setStateValue}
                       inputId="first_name_input"
                       required
                       />
            <TextInput label="Last Name"
                       stateField="last_name"
                       setStateValue={this.setStateValue}
                       inputId="last_name_input"
                       required
                       />
          </div>
          <TextInput label="Address Line 1"
                     stateField="address_1"
                     setStateValue={this.setStateValue}
                     inputId="address_1_input"
                     required
                     />
          <TextInput label="Address Line 2"
                     stateField="address_2"
                     setStateValue={this.setStateValue}
                     inputId="address_2_input"
                     />
          <TextInput label="City"
                     stateField="city"
                     setStateValue={this.setStateValue}
                     inputId="city_input"
                     required
                     />
            <StateSelect setStateValue={this.setStateValue}
                         stateField="state"
                         inputId="state_input"
                         required
                         />
            <CountrySelect setStateValue={this.setStateValue}
                           stateField="country"
                           inputId="country_input"
                           />
          <TextInput label="Postal Code (must be 5 or 9 digits long)"
                     stateField="postal"
                     setStateValue={this.setStateValue}
                     inputId="postal_input"
                     required
                     />
          <div>
            <button className="ui primary button"
                    onClick={this.saveUser}
                    type="submit"
                    id="save-button"
                    disabled>
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
});

ReactDOM.render(<UserForm/>, document.getElementById('user-form'));
