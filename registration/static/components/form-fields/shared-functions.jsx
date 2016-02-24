var setValue = function(event){
    this.props.setStateValue(this.props.stateField,
                             event.target.value);
}