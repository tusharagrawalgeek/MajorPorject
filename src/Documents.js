import React from "react";
import * as colors from './colors';
import './style.css';
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
function Documents(){
    const [state,setState]=useState(
        {
            selectedState:""
        }
    )
    function handleClick(e){
        const obj=e.target;
    }
    function urlChecker(){
        const a=window.location.href.split("/");
        var n=a.length;
        console.log(a[n-1]);
        if(a[n-1]==="documents")
        return true;
        return false;
    }
    return(
        <>
            <div style={{ margin: "2rem", color: "#DDE1E9" }}>
            {urlChecker()?
            <>            <div style={{marginBottom:"3rem"}}>
                    <h3 style={{marginBlockStart:"0.6em",marginBlockEnd:"0em"}}>DOCUMENTS</h3>
                    <div style={{color:"#43C6A2", fontSize:"14px"}}>description about documents</div>
            </div>
            <div style={{
                padding:"3rem",
                fontSize:"0.8rem"
            }}>
                <table style={{
                    margin:"auto"
                }}>
                    <tr>
                        <Link to="registrationDocuments" className="link" >
                        <td className="tdspace" onClick={handleClick}>
                            Registration Documents
                        </td>
                        </Link>
                    </tr>
                    <tr>
                    <Link to="feeDocuments"  className="link">
                        <td className="tdspace" onClick={handleClick}>
                            Fee Documents
                        </td>
                        </Link>
                    </tr>
                    <tr>
                    <Link to="hostelDocuments"  className="link">
                        <td className="tdspace" onClick={handleClick}>
                            Hostel Documents
                        </td>
                        </Link>
                    </tr>
                </table>
            </div>
            </>
            :
            <Outlet/>
            }   
            </div>
        </>
    );
}
export default Documents;