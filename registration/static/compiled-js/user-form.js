'use strict';

var UserForm = React.createClass({
  displayName: 'UserForm',

  getInitialState: function getInitialState() {
    return {};
  },
  setStateValue: function setStateValue(stateValue, value) {
    var data = {};
    data[stateValue] = value;
    var newState = $.extend(this.state, data);
    this.setState(newState);
  },
  saveUser: function saveUser(event) {
    event.preventDefault();
    var apiUrl = '/api/users/create';
    $.post(apiUrl, this.state).then(function (promise) {
      window.location.href = '/admin';
    });
  },
  componentDidUpdate: function componentDidUpdate() {
    var num_regex = /^\d+$/;
    var form = $('#user-form-component');
    var stateSelect = $('#state_input');
    var countrySelect = $('#country_input');
    var selectValid = stateSelect.val() && countrySelect.val();
    var postal = $('#postal_input').val();
    var postalLength = postal.length;
    var postalLengthValid = postalLength === 9 || postalLength === 5;
    form.validate();
    if (!form.valid() || !selectValid || !postalLengthValid || !num_regex.test(postal)) $('#save-button').attr('disabled', 'disabled');else $('#save-button').removeAttr('disabled');
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Register a New User'
      ),
      React.createElement(
        'h4',
        null,
        ' * = required field'
      ),
      React.createElement(
        'form',
        { className: 'ui form', id: 'user-form-component',
          onSubmit: this.saveUser },
        React.createElement(
          'div',
          { className: 'ui grid' },
          React.createElement(TextInput, { label: 'First Name',
            stateField: 'first_name',
            setStateValue: this.setStateValue,
            inputId: 'first_name_input',
            required: true
          }),
          React.createElement(TextInput, { label: 'Last Name',
            stateField: 'last_name',
            setStateValue: this.setStateValue,
            inputId: 'last_name_input',
            required: true
          })
        ),
        React.createElement(TextInput, { label: 'Address Line 1',
          stateField: 'address_1',
          setStateValue: this.setStateValue,
          inputId: 'address_1_input',
          required: true
        }),
        React.createElement(TextInput, { label: 'Address Line 2',
          stateField: 'address_2',
          setStateValue: this.setStateValue,
          inputId: 'address_2_input'
        }),
        React.createElement(TextInput, { label: 'City',
          stateField: 'city',
          setStateValue: this.setStateValue,
          inputId: 'city_input',
          required: true
        }),
        React.createElement(StateSelect, { setStateValue: this.setStateValue,
          stateField: 'state',
          inputId: 'state_input',
          required: true
        }),
        React.createElement(CountrySelect, { setStateValue: this.setStateValue,
          stateField: 'country',
          inputId: 'country_input'
        }),
        React.createElement(TextInput, { label: 'Postal Code (must be 5 or 9 digits long)',
          stateField: 'postal',
          setStateValue: this.setStateValue,
          inputId: 'postal_input',
          required: true
        }),
        React.createElement(
          'div',
          null,
          React.createElement(
            'button',
            { className: 'ui primary button',
              onClick: this.saveUser,
              type: 'submit',
              id: 'save-button',
              disabled: true },
            'Save'
          )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(UserForm, null), document.getElementById('user-form'));