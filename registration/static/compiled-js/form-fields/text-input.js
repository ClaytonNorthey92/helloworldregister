'use strict';

var TextInput = React.createClass({
  displayName: 'TextInput',

  getInitialState: function getInitialState() {
    return {};
  },
  setStateValue: setValue,
  componentDidMount: function componentDidMount() {
    var input = document.getElementById(this.props.inputId);
    if ('required' in this.props) {
      input.required = true;
    }
  },
  render: function render() {
    if ('required' in this.props) var styleString = "field required";
    return React.createElement(
      'div',
      { className: 'user-form-field' },
      React.createElement(
        'div',
        { className: styleString || "field" },
        React.createElement(
          'label',
          null,
          this.props.label
        ),
        React.createElement('input', { type: 'text',
          onChange: this.setStateValue,
          id: this.props.inputId,
          name: this.props.inputId
        })
      )
    );
  }
});