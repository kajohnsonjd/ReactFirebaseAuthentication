import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, withRouter, Switch} from 'react-router-dom';
import { ProtectedAppBetaPage } from './ProtectedAppBetaTeam/ProtectedAppBetaPage';
import { ProtectedAppVisitorPage } from './ProtectedAppVisitors/ProtectedAppVisitorPage';
import { ProtectedAppDevPage } from './ProtectedAppDevTeam/ProtectedAppDevPage';
import { UnprotectedApp } from './UnprotectedApp/UnprotectedApp';
import { firebaseAuth, devTeam, betaTesters } from '../config/constants';


const styles = {
  appDiv: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Verdana',
  },
  splashDiv: {
    display: 'flex',
    height: '90px',
    padding: '10px',
  },
  navAndContentContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  footerContainer: {
    width: '100%',
    height: '200px',
  },
}

class App extends Component {
  constructor(props){
    super(props),
    this.state = {
      userEmail: 'nullUser',
      url: '/home',
      loading:  false,
    }
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged(authUser => { authUser
        ? this.props.history.push(this.viewableByUserStatus(authUser.email))
        : this.props.history.push('/home')
    })
  }
  viewableByUserStatus(userEmail){
    let url;
        
    if (devTeam.indexOf(userEmail) !== -1){
        url = '/appDev'
    } else if (betaTesters.indexOf(userEmail) !== -1){
        url = '/appBeta'
    } else if (userEmail){
        url = '/appVisitor'
    } else {
        url = '/home'
    }
    return url;      
  }
        
  componentWillUnmount () {
    this.removeListener()
  }
        
  logout () {
    firebaseAuth().doSignout()
  }
    
  render() {
    const {history} = this.props;
    return (
        <div>
          <div>
            <section style={styles.navAndContentContainer}>     
              <Switch>
                <Route path='/home' component={UnprotectedApp} />
                <Route path='/appDev' component={ProtectedAppDevPage} />
                <Route path='/appBeta' component={ProtectedAppBetaPage} />
                <Route path='/appVisitor' component={ProtectedAppVisitorPage} />
              </Switch>
            </section>
          </div>
        </div>
        )
  }
}

export default withRouter(App);