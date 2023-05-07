import { borderColor } from "@mui/system";
import React from "react";
import { ReactDOM } from "react";
import './App.css';
const c=[1,2,3,4,1,1,5,6];
const r=[1,2,3,4,5,2,2,2,2,2,2,1,1,2,3,1,3,1,1,1,1,1,1,1,1,];
function random(){
    if (Math.random()>=.5)
        return "att-td-off";
    return "att-td-on";
}
function Col(){
    return (
    <td className={random()}>KCS-512</td>
    );
}
function Row(){
    return (
    <tr>
        {c.map(Col)}
    </tr>
    );
}
function Content() {
        return(
            <>
            <div style={{margin:"25px",color:"#DDE1E9"}}>
                <div style={{}}>
                    <h3 style={{marginBlockStart:"0.6em",marginBlockEnd:"0em"}}>CLASS ATTENDANCE</h3>
                    <div style={{color:"#43C6A2", fontSize:"14px"}}> The attendance is updated on daily basis.</div>
                </div>
                <div style={{marginBlockStart:"1em",height:"100%",background:"#141A28"}}>
                <div style={{background:"#1B2537",width:"85%",height:"80vh",fontSize:"10px",overflowY:"scroll",display:"inline-block"}}>
                <table style={{ borderCollapse:"collapse",height:"100%"}} width="100%" >
                    <thead></thead>
                    <tbody>
                        {r.map(Row)}
                    </tbody>
                </table>
                </div>
                </div>
            </div>
            </>
        );
    
}
export default Content;