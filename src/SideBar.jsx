// import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { ReactDOM } from "react";
import './App.css';
import App from "./App";
// var clicked=true;
var click=false;
function SideBar(){
    // fxn(){
    //     this.click=!this.click;
    //     console.log(click);
    // }
    // render() {
    
    // function clickedbtn(){
    //     clicked=true;
    //     return;
    // }
   
    return (
        <>      
        <div style={{
            color:"#DDE1E9",
            background:"#1B2537",
        }}>
            <div style={{paddingTop:"50px",paddingBottom:"50px"}}> 
            <table style={{margin:"auto", borderSpacing:1  }}>
                <tr>
                    <td> <img className="profileImg" width="190px" height="190px" src="./logo.jpg "></img></td>
                </tr>
                <tr>
                    <td style={{}}> <h4 style={{margin:0}}>Tushar Agrawal</h4></td>
                </tr>
                <tr>
                    <td className="nametd" style={{fontSize:"12px"}}>Student</td>
                </tr>
                <tr>
                    <td><br/></td>
                </tr>
                <tr>
                    <td><h5><button className="btn-sidebar">Profile</button></h5></td>
                </tr>
                <tr>
                     <td><h5><button className={true?"btn-sidebar-clicked":"btn-sidebar"} onClick={null}>Subjects</button></h5></td>
                </tr>
                {/* {console.log(click)} */}
                <tr>
                    <td><h5><button className="btn-sidebar-clicked">Class Attendance</button></h5></td>
                </tr>
                <tr>
                    <td><h5><button className="btn-sidebar">My Feedback</button></h5></td>
                </tr>
                
                <tr>
                    <td><h5><button className="btn-sidebar">Notices</button></h5></td>
                </tr>
                <tr>
                    <td><h5><button className="btn-sidebar">Registration Form</button></h5></td>
                </tr>
                <tr>
                    <td><h5><button className="btn-sidebar">Marks</button></h5></td>
                </tr>
                <tr>
                     <td><h5><button className="btn-sidebar">Upload Documents</button></h5></td>
                </tr>
                <tr>
                    <td><h5><button className="btn-sidebar">Logout</button></h5></td>
                </tr>
            </table>
            </div>

        </div>
        </>
    );

}
// function handleBtnClick(){
//     console.log("Clicked")
//     clicked=true;
//     return;
// }


  export default SideBar;