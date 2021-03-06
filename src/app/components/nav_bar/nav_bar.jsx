import React from 'react';
import { Link, hashHistory } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand trial" href="#">Triage</a>
            </div>
            <ul className="nav navbar-nav">
              <li><a href="#">Home</a></li>
              <li><Link to={'/questions'}>change</Link></li>
              <li><Link to={'/assignments'}>Underwriter Assignments</Link></li>
            </ul>
            <form className="navbar-form navbar-left">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" />
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit">
                    <i className="glyphicon glyphicon-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default NavBar;
