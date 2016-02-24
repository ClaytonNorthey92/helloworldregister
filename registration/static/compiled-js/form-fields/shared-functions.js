"use strict";

var setValue = function setValue(event) {
    this.props.setStateValue(this.props.stateField, event.target.value);
};