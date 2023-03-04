// import { click } from "@testing-library/user-event/dist/click";
import React,{useState} from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import './App.css';
import App from "./App";
// import 'logo.jpg';
// var clicked=true;

function SideBar2(props){    
    function handleClick(event){
        const name=event.target.name;
        if(props.selectedState!==name)
        return props.changeState(name);
    }
    // console.log(props.data[0].name)
    return (
        <>      
        <div style={{
            color:"#DDE1E9",
            background:"#1B2537",
            height:"100vh"
        }}>
            <div style={{paddingTop:"50px",paddingBottom:"50px",height:"80%"}}> 
            <table style={{margin:"auto", borderSpacing:1,height:"100%"}}>
                <tr>
                    <td> <img className="profileImg" width="190px" height="190px" src="./logo192.png"></img></td>
                </tr>
                <tr>
                    <td style={{}}> <h4 style={{margin:0}}>Abha Sharma</h4></td>
                </tr>
                <tr>
                    <td className="nametd" style={{fontSize:"12px"}}>Teacher</td>
                </tr>
                <tr>
                    <td><br/></td>
                </tr>
                <tr>
                <td><h5>
                    <button
                    name="profile" 
                    className={props.selectedState==="profile"?"btn-sidebar-clicked":"btn-sidebar"}
                    onClick={handleClick}>
                        Profile
                    </button>
                    </h5></td>               
                </tr>
                <tr>
                <td><h5>
                    <button
                    name="subjects" 
                    className={props.selectedState==="subjects"?"btn-sidebar-clicked":"btn-sidebar"}
                    onClick={handleClick}>
                        Subjects
                    </button>
                    </h5></td>
                   
                </tr>
                <tr>
                <td><h5>
                    <button
                    name="attendance" 
                    className={props.selectedState==="attendance"?"btn-sidebar-clicked":"btn-sidebar"}
                    onClick={(handleClick)}>
                        Class Attendance
                    </button>
                    </h5></td>
                </tr>
                <tr>
                <td><h5>
                    <button
                    name="students" 
                    className={props.selectedState==="students"?"btn-sidebar-clicked":"btn-sidebar"}
                    onClick={handleClick}>
                        My Students
                    </button>
                    </h5></td>
                </tr>
                <tr>
                <td><h5>
                    <button
                    name="notices" 
                    className={props.selectedState==="notices"?"btn-sidebar-clicked":"btn-sidebar"}
                    onClick={handleClick}>
                        Notices
                    </button>
                    </h5></td>
                </tr>
                {/* <tr>
                    <td><h5><button className="btn-sidebar">Registration Form</button></h5></td>
                </tr> */}
                <tr>
                    <td><h5><button className="btn-sidebar">Marks</button></h5></td>
                </tr>
                <tr>
                     <td><h5><button className="btn-sidebar">Upload Documents</button></h5></td>
                </tr>
                <tr>
                    <td><h5><Link to="/"><button className="btn-sidebar">Logout</button></Link></h5></td>
                </tr>
            </table>
            </div>

        </div>
        </>
    );
}
  export default SideBar2;