var NavBar = React.createClass({
  getInitialState: function(){
    return {};
  },
  render: function(){
    return (
      <div>
        <div className="ui vertical menu">
          <a className='item'
             href='/admin'>
              Admin View
              <i className='users icon'></i>
          </a>
          <a className='item'
             href='/users/register'>
              Register a User
            <i className='add user icon'></i>
          </a>
        </div>
      </div>
    )
  }
});

ReactDOM.render(<NavBar/>, document.getElementById('nav-bar'));
