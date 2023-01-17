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
      <table style={{borderSpacing:0, borderPadding:0}}>
        <tr>
          <td style={{padding:"0", verticalAlign:"top"}}>
          <div style={{
            width:"220px"
          }}>
          <SideBar/>
          </div>
          </td>
          <td style={{padding:"0", width:"100%",height:"120%", background:"#141A28", verticalAlign:"top"}}>
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
