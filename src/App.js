// import logo from './logo.svg';
import './App.css';
import Starter from './Starter.jsx';
import React from 'react';
import SideBar  from './SideBar';
import Content from './Content';
const click=false;
function App(){
  return (
    <>
    <div>
      <table style={{borderSpacing:0, borderPadding:0, width:"100%"}}>
        <tr>
          {/* <td style={{padding:"0",height:"100%", verticalAlign:"top"}}>
          <div style={{
            width:"220px"
          }}>
          <SideBar/>
          </div>
          </td> */}
          <td style={{padding:"0",background:"#1B2537", verticalAlign:"top",width:"30vh "}} >
          <SideBar/>
          </td>
          <td style={{padding:"0", background:"#141A28",height:"100vh", verticalAlign:"top"}}>
          <Content/>
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
export default App;
