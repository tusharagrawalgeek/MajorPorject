import React, { useEffect, useState } from "react";
import getStudentMarks from "./api/getStudentMarks";
import * as subjects from './Subjects/subjects';
import * as colors from './colors';
function Marks(props){
    const [state,setState]=useState(
        {   user:props.user,
            marks:[]
        }
    );
    useEffect(()=>{
        const data=getStudentMarks();
        setState({...state,marks:data})
    },[])
    return(
        <>
         <div style={{ margin: "2rem", color: "#DDE1E9" }}>
            <div style={{marginBottom:"3rem"}}>
                    <h3 style={{marginBlockStart:"0.6em",marginBlockEnd:"0em"}}>MARKS</h3>
                    <div style={{color:"#43C6A2", fontSize:"14px"}}>description about marks</div>
                </div>
                <MarksTable marks={state.user.marks} ind={0} title="SESSIONAL 1"/>
                <MarksTable marks={state.user.marks} ind={1} title="SESSIONAL 2"/>
                <MarksTable marks={state.user.marks} ind={2} title="PUT"/>
                
            </div>
        </>
    );
}
function MarksTable(props){
    if(props.marks.length!=0){
        const marks=props.marks[props.ind];
    return(
        <>
        <div style={{
            boxShadow:"2px 2px 5px 0px black",
            margin:"1rem auto"
        }}> 
            <table style={{
                width:"100%",
                background:colors.sidebar_bg,
                padding:"1rem",
                fontSize:"0.8rem",
                border:0,
            }}> 
            <caption style={{background:colors.sidebar_bg,paddingTop:"0.5rem",color:colors.white,fontWeight:"bolder",fontSize:"1rem",letterSpacing:"0.1rem"}}>
                {props.title}
            </caption>
                <tr>
                    <th style={{width:"5%", color: "#43C6A2",              
                borderBottom: "2px solid #141A28",
                padding: "5px",
                fontWeight:"bold"
                }}>
                        S.No.
                    </th>
                    <th style={{width:"10%", color: "#43C6A2",              
                borderBottom: "2px solid #141A28",
                padding: "5px",
                fontWeight:"bold",
                }}>
                        Subject Code
                    </th>
                    <th style={{width:"fit-content", color: "#43C6A2",              
                borderBottom: "2px solid #141A28",
                padding: "5px",
                fontWeight:"bold"}}>
                        Subject Name
                    </th>
                    <th style={{width:"10%", color: "#43C6A2",              
                borderBottom: "2px solid #141A28",
                padding: "5px",
                fontWeight:"bold"}}>
                        Subject Type
                    </th>
                    <th style={{width:"10%", color: "#43C6A2",              
                borderBottom: "2px solid #141A28",
                padding: "5px",
                fontWeight:"bold"}}>
                        Faculty Code
                    </th>
                    <th style={{width:"15%", color: "#43C6A2",              
                borderBottom: "2px solid #141A28",
                padding: "5px",
                fontWeight:"bold"}}>
                        Faculty Name
                    </th>
                    <th style={{width:"10%", color: "#43C6A2",              
                borderBottom: "2px solid #141A28",
                padding: "5px",
                fontWeight:"bold"}}>
                        Obt. Marks
                    </th>
                    <th style={{width:"10%", color: "#43C6A2",              
                borderBottom: "2px solid #141A28",
                padding: "5px",
                fontWeight:"bold"}}>
                        Max. Marks
                    </th>
                    <th style={{width:"5%", color: "#43C6A2",              
                borderBottom: "2px solid #141A28",
                padding: "5px",
                fontWeight:"bold"}}>
                        %age
                    </th>
                </tr>
                {marks.map((i,ind)=>{
                    return(
                        <tr>
                            <td style={{padding: "5px",textAlign:"center"}}>
                                {ind+1}
                            </td>
                            <td style={{padding: "5px",textAlign:"center"}}>
                                {i.name}
                            </td>
                            <td style={{padding: "5px",textAlign:"center"}}>
                                {subjects[subjects.default[ind]]}
                            </td>
                            <td style={{padding: "5px",textAlign:"center"}}>
                                Theory
                            </td>
                            <td style={{padding: "5px",textAlign:"center"}}>
                                {i.facultyCode}
                            </td>
                            <td style={{padding: "5px",textAlign:"center"}}>
                                Ajay Kushwaha
                            </td>
                            <td style={{padding: "5px",textAlign:"center"}}>
                                {i.obtMarks}
                            </td>
                            <td style={{padding: "5px",textAlign:"center"}}>
                                {i.maxMarks}
                            </td>
                            <td style={{padding: "5px",textAlign:"center"}}>
                                {((Number(i.obtMarks)*100/Number(i.maxMarks)))}
                            </td>
                        </tr>
                    );
                })}
            </table>
            </div>
        </>
    );
    }
}
export default Marks;