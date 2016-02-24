'use strict';

var NavBar = React.createClass({
  displayName: 'NavBar',

  getInitialState: function getInitialState() {
    return {};
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'ui vertical menu' },
        React.createElement(
          'a',
          { className: 'item',
            href: '/admin' },
          'Admin View',
          React.createElement('i', { className: 'users icon' })
        ),
        React.createElement(
          'a',
          { className: 'item',
            href: '/users/register' },
          'Register a User',
          React.createElement('i', { className: 'add user icon' })
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(NavBar, null), document.getElementById('nav-bar'));