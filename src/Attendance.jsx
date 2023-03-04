import React from 'react';
import SideBar  from './SideBar';
import Content from './Content';
import Starter from './Starter';
import Profile from './Profile';
import { Route,Routes } from 'react-router-dom';
import { useState } from 'react';
function Attendance(){
    const [state,setState]=useState({
      selectedState:0,

    });
    function changeState(p){
      // console.log("Here")
      setState({selectedState:p});
    }
    return (
        <>
        <div>
          <table style={{borderSpacing:0, borderPadding:0, width:"100%"}}>
            <tr>
             
              <td style={{padding:"0",background:"#1B2537", verticalAlign:"top",width:"30vh "}} >
              <SideBar selectedState={state.selectedState} changeState={changeState}/>
              </td>
              <td style={{padding:"0", background:"#141A28",height:"100vh", verticalAlign:"top"}}>
              <Content/>
              {/* <Routes> */}
                {/* <Route path='/' element={<Starter/>}/>
                <Route path='/Starter' element={<Starter/>}/>
                <Route path='/Profile' element={<Profile/>}/> */}
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
export default Attendance;