var CountrySelect = React.createClass({
  getInitialState: function(){
    return {};
  },
  setStateValue: setValue,
  render: function(){
    return (
      <select className="ui dropdown user-form-field"
              onChange={this.setStateValue}
              id={this.props.inputId}
              required>
        <option value="">Country *</option>
        <option value="US">USA</option>
      </select>
    )
  }
});