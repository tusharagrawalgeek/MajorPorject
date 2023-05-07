import React from 'react';
import { Outlet, Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import SideBar3 from './Sidebar3';
import axios from 'axios';
function HomePage3(props){
    const [state,setState]=useState({
      selectedState:"profile",
      user:props.user
    });
    function changeState(p){
      // console.log("Here")
      setState(prev=>{
      return({
        ...prev,
        selectedState:p
      });  
    })
  }
    return (
        <>
        {/* {console.log(props.user)} */}
        <div>
          <table style={{borderSpacing:0, borderPadding:0, width:"100%"}}>
            <tr>
             
              <td style={{padding:"0",background:"#1B2537", verticalAlign:"top",width:"30vh "}} >
              <SideBar3 user={state.user} selectedState={state.selectedState} changeState={changeState}/>
              </td>
              <td style={{padding:"0", background:"#141A28",height:"100vh", verticalAlign:"top"}}>
              <Outlet/> 
              </td>
            </tr>
          </table>
        </div>
        {/* <div style={{
          background:" yellow",
          fontFamily:"Source Sans Pro"
          }}>
          
    
        </div> */}
        
        </>
      );
}
export default HomePage3;