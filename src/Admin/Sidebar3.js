import React,{useState} from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import App from "../App";
import admin_img from '../base64 imgs/admin'
function SideBar3(props){
    const user=props.user;
    const[state, setState]=useState({
        user:user
    })
    
    function handleClick(event){
        const name=event.target.getAttribute("name");
        console.log(name);
        props.changeState(name);
    }
    
    return (
        <>      
        {console.log(state.user)}
        <div style={{
            color:"#DDE1E9",
            background:"#1B2537",
            height:"100vh",
           
        }}>
            <div style={{paddingTop:"50px",paddingBottom:"50px",height:"80%"}}> 
            <table style={{margin:"auto", borderSpacing:1,height:"100%"}}>
                <tr>
                    <td> 
                        <img className="profileImg" width="190px" height="190px" src={admin_img}/>
                            {/* </img> */}
                            </td>
                </tr>
                <tr>
                    <td style={{}}> <h4 style={{margin:0}}>{state.user.name}</h4></td>
                </tr>
                <tr>
                    <td className="nametd" style={{fontSize:"12px"}}>Admin</td>
                </tr>
                <tr>
                    <td><br/></td>
                </tr>
                <tr>
                <td><h5>
                    <Link to="profile">
                    <button
                    name="profile" 
                    className={props.selectedState==="profile"?"btn-sidebar-clicked":"btn-sidebar"}
                    onClick={handleClick}>
                        Profile
                    </button>

                    </Link>
                    </h5></td>               
                </tr>
                <tr>
                <td><h5>
                    <Link to="notices">
                    <button
                    name="notices" 
                    className={props.selectedState==="notices"?"btn-sidebar-clicked":"btn-sidebar"}
                    onClick={handleClick}>
                        Notices
                    </button>
                    </Link>
                    </h5></td>
                </tr>
                <tr>
                <td><h5>
                    <Link to="teachers">
                    <button
                    name="teachers" 
                    className={props.selectedState==="teachers"?"btn-sidebar-clicked":"btn-sidebar"}
                    onClick={handleClick}>
                         Teachers
                    </button>
                    </Link>
                    </h5></td>
                </tr>
                <tr>
                <td><h5>
                    <Link to="students">
                    <button
                    name="students" 
                    className={props.selectedState==="students"?"btn-sidebar-clicked":"btn-sidebar"}
                    onClick={handleClick}>
                         Students
                    </button>
                    </Link>
                    </h5></td>
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
// function handleBtnClick(){
//     console.log("Clicked")
//     clicked=true;
//     return;
// }


  export default SideBar3;