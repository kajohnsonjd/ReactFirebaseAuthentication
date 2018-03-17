import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { logout } from '../helpers/auth';



export class ShellPage extends Component {
  render(){
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">
              Firebase Authentication for Developers & Beta Testers 
            </a>
        </nav>
        <div className="col-sm-6 col-sm-offset-3">
          <h1>{this.props.infoObj.title}</h1>
          <p className="lead">
            {this.props.infoObj.text}
          </p>
          <button type="submit" className="btn btn-primary" onClick={() => { logout()}}>Log Out</button>
        </div>
      </div>
    )
  }
};

ShellPage.propTypes = {
  infoObj: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    
  })
}