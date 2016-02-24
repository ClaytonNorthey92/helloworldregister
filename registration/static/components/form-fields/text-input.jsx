var TextInput = React.createClass({
  getInitialState: function(){
    return {};
  },
  setStateValue: setValue,
  componentDidMount: function(){
    var input = document.getElementById(this.props.inputId);
    if ('required' in this.props){
      input.required = true;
    }
  },
  render: function(){
    if ('required' in this.props)
      var styleString = "field required";
    return (
      <div className="user-form-field">
        <div className={styleString || "field"}>
          <label>{this.props.label}</label>
          <input type="text"
                 onChange={this.setStateValue}
                 id={this.props.inputId}
                 name={this.props.inputId}
                 />
        </div>
      </div>
    );
  }
})