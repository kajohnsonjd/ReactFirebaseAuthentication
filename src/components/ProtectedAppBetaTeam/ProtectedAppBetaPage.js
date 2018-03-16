import React from 'react';
import { ShellPage } from '../ShellPage';
import { logout } from '../../helpers/auth';

const betaObj = {
  title: "Beta Testing Root",
  text: "Anything served from this root page will be viewable to beta testers whose emails have been whitelisted in config."
};

export const ProtectedAppBetaPage = ( ) => {
  return (
    <ShellPage logout={logout} infoObj={betaObj}/>
  )
}