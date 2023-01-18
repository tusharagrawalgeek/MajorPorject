// import { click } from "@testing-library/user-event/dist/click";
import React,{useState} from "react";
import { ReactDOM } from "react";
import './App.css';
import App from "./App";
// var clicked=true;

function SideBar(){
    const [state,setState]=useState({selectedState:0});
    
    function handleClick(event){
        const name=event.target.name;
        // if(name===1){

        // }else if(name===2){

        // }
        setState((prev)=>{
            var val=0;
            if(name==="0"){
                val=0;
            }else if(name==="1"){
                val=1;
            }
            
            return{
                // ...prev,
                selectedState:val
            }
        });
        // console.log("click")
        // const newState={
        //     selectedState:i
        // }
        // setState({selectedState:i});
    }
    console.log(state);
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
                    <td><h5><button name="0" className={state.selectedState===0?"btn-sidebar-clicked":"btn-sidebar"} onClick={handleClick}>Pofile</button></h5></td>                
                </tr>
                <tr>
                     <td><h5><button name="1" className={state.selectedState===1?"btn-sidebar-clicked":"btn-sidebar"} onClick={handleClick}>Subjects</button></h5></td>
                </tr>
                <tr>
                <td><h5><button className={state.selectedState===2?"btn-sidebar-clicked":"btn-sidebar"} onClick={() => {setState({selectedState:2})}}>Class Attendance</button></h5></td>
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