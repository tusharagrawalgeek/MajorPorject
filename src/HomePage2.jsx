import React from 'react';
import SideBar2  from './SideBar2';
import Content from './Content';
import Starter from './Starter';
import Profile from './Profile';
import { Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import Students from './Students';
import axios from 'axios';
function HomePage2(props){
    var page="Content";
    const [state,setState]=useState({
      selectedState:"profile",
      user:null
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
    if(state.user===null){
      axios.get('http://localhost:3001/user')
          .then(response=>{
              // console.log(response.data)
              console.log("here");
              console.log(response.data);
              if(state.user===null)
              setState(prev=>{
                return({
                  ...prev,
                  user:response.data
                })
              })    
  
          })
          .catch(err=>{
              console.log(err);
          })
          return;
      }
    return (
        <>
        <div>
          <table style={{borderSpacing:0, borderPadding:0, width:"100%"}}>
            <tr>
             
              <td style={{padding:"0",background:"#1B2537", verticalAlign:"top",width:"30vh "}} >
              <SideBar2 selectedState={state.selectedState} changeState={changeState}/>
              </td>
              <td style={{padding:"0", background:"#141A28",height:"100vh", verticalAlign:"top"}}>
              {state.selectedState==="attendance"&&<Content/>}
              {state.selectedState==="profile"&&<Profile user={state.user}/>}
              {state.selectedState==="students"&&<Students/>}
              {/* <Routes> */}
                {/* <Route path='//Attendance' element={<Attendance/>}/> */}
                {/* <Route path='/Starter' element={<Starter/>}/> */}
                {/* <Route path='/Profile' element={<Profile/>}/> */}
              {/* </Routes> */}
              {/* <Content/> */}
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
export default HomePage2;