var StateSelect = React.createClass({
  getInitialState: function(){
    return {};
  },
  setStateValue: setValue,
  componentDidMount:function(){
    $.get('/api/users/state_choices')
      .then(function(promise){
        var stateElements = _.map(promise, function(state){
          return (<option key={state} value={state}>{state}</option>)
        });
        this.setState({stateElements: stateElements});
      }.bind(this));
  },
  render: function(){
    var dom = null;
    if (!this.state.stateElements)
      dom = (<div></div>)
    else { 
      dom = (
        <select className="ui dropdown user-form-field"
                onChange={this.setStateValue}
                id={this.props.inputId}
                required>
          <option value="" invalid>State *</option>
          {this.state.stateElements}
        </select>
      )
    }
    return dom;
  }
});