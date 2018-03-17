import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Register } from './Register'
import { Login }from './Login';


export class UnprotectedApp extends Component {
  render () {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <a className="navbar-brand">Firebase Authentication for Developers & Beta Testers</a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      <Link to='/home'>
                        Login <span className="sr-only">(current)</span>
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to='/home/register'>
                      <a className="nav-link" href="#">Register</a>
                    </Link>
                  </li>
                 </ul>
              </div>
            </nav>
          <div>
          <Switch>
            <Route path='/home/register' component={Register} />
            <Route path='/home' component={Login} />
          </Switch>
        </div>
      </div>
    )
  }
}