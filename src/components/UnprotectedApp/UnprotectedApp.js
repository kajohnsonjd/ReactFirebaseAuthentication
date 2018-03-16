import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Register } from './Register'
import { Login }from './Login';


export class UnprotectedApp extends Component {
  render () {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <a class="navbar-brand">Firebase Authentication for Developers & Beta Testers</a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
               </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">
                      <Link to='/home'>
                        Login <span class="sr-only">(current)</span>
                      </Link>
                    </a>
                  </li>
                  <li class="nav-item">
                    <Link to='/home/register'>
                      <a class="nav-link" href="#">Register</a>
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