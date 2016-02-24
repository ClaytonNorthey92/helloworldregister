"use strict";

var StateSelect = React.createClass({
  displayName: "StateSelect",

  getInitialState: function getInitialState() {
    return {};
  },
  setStateValue: setValue,
  componentDidMount: function componentDidMount() {
    $.get('/api/users/state_choices').then((function (promise) {
      var stateElements = _.map(promise, function (state) {
        return React.createElement(
          "option",
          { key: state, value: state },
          state
        );
      });
      this.setState({ stateElements: stateElements });
    }).bind(this));
  },
  render: function render() {
    var dom = null;
    if (!this.state.stateElements) dom = React.createElement("div", null);else {
      dom = React.createElement(
        "select",
        { className: "ui dropdown user-form-field",
          onChange: this.setStateValue,
          id: this.props.inputId,
          required: true },
        React.createElement(
          "option",
          { value: "", invalid: true },
          "State *"
        ),
        this.state.stateElements
      );
    }
    return dom;
  }
});