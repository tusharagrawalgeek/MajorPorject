import React from 'react';
import SideBar  from './SideBar';
import Content from './Content';
import Starter from './Starter';
import Profile from './Profile';
import { Route,Routes } from 'react-router-dom';
import { useState } from 'react';
function Attendance(props){
  
    return (
        <>
        <div>
          <table style={{borderSpacing:0, borderPadding:0, width:"100%"}}>
            <tr>
              <Content/>
            </tr>
          </table>
        </div>
        </>
      );
}
export default Attendance;