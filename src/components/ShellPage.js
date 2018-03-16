import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { logout } from '../helpers/auth';

const styles = { 
  shellDiv: {
    padding: '20px',
  },
  shellArticle: {
    padding: '20px',
  },
  shellSection1: {},
  shellH1: {},
  shellSection2: {},
  shellP: {},
};


export class ShellPage extends Component {
  render(){
    return (
      <div style={styles.shellDiv}>
        <article style={styles.shellArticle}>
          <section style={styles.shellSection1}>
            <h1 style={styles.shellH1}>
              Firebase Authentication for Devs/Beta Testers :: {this.props.infoObj.title}
            </h1>
          </section>
          <section style={styles.shellSection2}>
            <p style={styles.shellP}>
              {this.props.infoObj.text}
            </p>
            <button  type="submit" className="btn btn-primary" onClick={() => { logout()}}>Log Out</button>
          </section>
        </article>
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