import React from 'react';
import { ShellPage } from '../ShellPage';

const visitorPageObj = {
  title: "Welcome to Visitors",
  text: "Anything served from this root page will be viewable to visitors who, despite the warning that registration would not grant them access, registered anyway, but whose emails have not been listed in the Dev or Beta arrays in config."
};

export const ProtectedAppVisitorPage = ( ) => {
  return (
    <ShellPage infoObj={visitorPageObj}/>
  )
}