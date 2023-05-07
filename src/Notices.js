import React from "react";
import './style.css';
import * as colors from "./colors";
import NoticeTable from "./NoticeTable";
function Notices(){
    return(
        <>
            <div style={{ margin: "2rem", color: "#DDE1E9" }}>
            <div style={{marginBottom:"3rem"}}>
                    <h3 style={{marginBlockStart:"0.6em",marginBlockEnd:"0em"}}>NOTICES</h3>
                    <div style={{color:"#43C6A2", fontSize:"14px"}}>description about notices</div>
            </div>
            <div>
                <NoticeTable/>
                
                {/* <Table/> */}
                </div>
            </div>
        </>
    );
}
export default Notices;