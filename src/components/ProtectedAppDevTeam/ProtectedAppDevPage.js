import React from 'react';
import { ShellPage } from '../ShellPage';
import { logout } from '../../helpers/auth';

const devPageObj = {
  title: "Development Root",
  text: "Anything served from this root page will be viewable to development team members whose emails have been whitelisted in config."
};

export const ProtectedAppDevPage = ( ) => {
  return (
    <ShellPage logout={logout} infoObj={devPageObj}/>
  )
}