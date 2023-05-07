import React from 'react';
import SideBar  from './SideBar';
import Content from './Content';
import Starter from './Starter';
import Profile from './Profile';
import { Outlet, Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import Attendance from './Attendance';
// import students from './data';
import axios from 'axios';
function HomePage(props){
    var page="Content";
    const [state,setState]=useState({
      selectedState:"profile",
      user:props.user
    });
    function changeState(p){
      console.log("Here")
      setState(prev=>{
        return {
          ...prev,
          selectedState:p
        }
      });
    }

    // if(state.user===null){
    // axios.get('http://localhost:3001/user')
    //     .then(response=>{
    //         // console.log(response.data)
    //         console.log("here");
    //         console.log(response.data);
    //         if(state.user===null)
    //         setState (prev=>{
    //           return({
    //             ...prev,
    //             user:response.data
    //           })
    //         })    

    //     })
    //     .catch(err=>{
    //         console.log(err);
    //     })
    //     return;
    // }
    return (
        <>
        {console.log(state.user)}
        <div>
          <table style={{borderSpacing:0, borderPadding:0, width:"100%"}}>
            <tr>
             
              <td style={{padding:"0",background:"#1B2537", verticalAlign:"top",width:"30vh "}} >
              <SideBar user={state.user} selectedState={state.selectedState} changeState={changeState}/>
              
              </td>
              <td style={{padding:"", background:"#141A28",height:"100vh", verticalAlign:"top"}}>
              <Outlet/>
              </td>
            </tr>
          </table>
        </div>
        
        </>
      );
}
export default HomePage;