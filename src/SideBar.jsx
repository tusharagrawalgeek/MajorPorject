import React from "react";
import { ReactDOM } from "react";
import './App.css';
function SideBar(){
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
                    <td><h5>Class Attendance</h5></td>
                </tr>
                <tr>
                    <td><h5>My Feedback</h5></td>
                </tr>
                <tr>
                    <td><h5>Profile</h5></td>
                </tr>
                <tr>
                    <td><h5>Subjects</h5></td>
                </tr>
                <tr>
                    <td><h5>Notices</h5></td>
                </tr>
                <tr>
                    <td><h5>Registration Form</h5></td>
                </tr>
                <tr>
                    <td><h5>Marks</h5></td>
                </tr>
                <tr>
                    <td><h5>Upload Documents</h5></td>
                </tr>
                <tr>
                    <td><h5>Logout</h5></td>
                </tr>
            </table>
            </div>

        </div>
        </>
    );
}
export default SideBar;