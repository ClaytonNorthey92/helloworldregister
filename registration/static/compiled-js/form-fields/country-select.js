"use strict";

var CountrySelect = React.createClass({
  displayName: "CountrySelect",

  getInitialState: function getInitialState() {
    return {};
  },
  setStateValue: setValue,
  render: function render() {
    return React.createElement(
      "select",
      { className: "ui dropdown user-form-field",
        onChange: this.setStateValue,
        id: this.props.inputId,
        required: true },
      React.createElement(
        "option",
        { value: "" },
        "Country *"
      ),
      React.createElement(
        "option",
        { value: "US" },
        "USA"
      )
    );
  }
});