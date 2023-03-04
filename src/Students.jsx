import React from "react";
import { useState } from "react";
import './style.css';
import axios from 'axios';
import Modal from "./Modal";
// const fs=require('fs')
// import fs from 'fs-react';
// import { writeFile } from "fs-react";
// import {addStudent} from './database.js';
// import { addStudent } from "./database";
function addStudent(student){
    var students;
    
    // fs.readFileSync('data.txt','utf-8',function (err,data){
    //     students=JSON.parse(data);
    //     students.push(student);
        // writeFile('data.txt', JSON.stringify(students), (err) => {
        //     if (err) throw err;
        // })
    // })
}
function Students(){
    const[state, setState]=useState({
        studentForm:false,
        name:"",
        roll:"",
        department:"",
        year:"",
        section:"",
        username:"",
        img:"",
        search:"",
        allStudents:null,
        showMessage:false,
        message:"",
        messageType:"",
        str:"",
        // addStudentButton:true,
        // cancelForm:false
        // pass:""
    });
    // function handleSubmit(){
    //     setState(prev=>{
    //         return({
    //             ...prev,
    //             showMessage:true
    //         });
    //     })

    // }
    function handleClick(e){

        const obj=e.target;
        // var key="",value="";
        if(obj.name==="addStudent"){
            setState(prev=>{
                return(
                    {...prev,
                        studentForm:true
                    }
                );
            });
            return;
        }
        if(obj.name==="cancel"){
            setState(prev=>{
                return({
                    ...prev,
                    studentForm:false,
                    name:"",
                    roll:"",
                    department:"",
                    year:"",
                    section:"",
                    username:"",
                    img:"",
                })
            })
            return;
        }
        if(obj.name==="submit"){
            // addStudent(state);
            var student={
                name:state.name,
                roll:state.roll,
                department:state.department,
                year:state.year,
                section:state.year,
                section:state.section,
                username:state.username,
                pass:state.username,
                img:state.img
            }
            // console.log(student)
            const url="http://localhost:3001/"
            axios.post(url,student)
            .then(response=>{
                // console.log(response)
                if(response.status>=200&&response.status<300){
                    setState(prev=>{
                        return({
                            ...prev,
                            message:"Student added successfully",
                            showMessage:true,
                            messageType:"success"
                        });
                    });
                }
            })
            .catch(err=>{
                setState(prev=>{
                    console.log(err.message)
                    return({
                        ...prev,
                        message:err.message,
                        showMessage:true,
                        messageType:"error"
                    });
                });
            })  
            // addStudent(student);
            setState({
                studentForm:true,
                name:"",
                roll:"",
                department:"",
                year:"",
                section:"",
                username:"",
                img:"",
                str:"",
                allStudents:null
            })
        }
        
        // setState({});
    }

    function handleChange(e){
        const obj=e.target;
        if(obj.name==="img"){
            const file=e.target.files[0];
            // console.log(file);
            const reader=new FileReader();
            reader.addEventListener("load",()=>{
                // console.log((reader.result).toString());
                setState(prev=>{
                    return({
                        ...prev,
                        img:reader.result
                    });
                });
            }
            )
            reader.readAsDataURL(file);
            // console.log(obj.name+" "+)
            return;
        }
        if(obj.name==="search"){
            setState(prev=>{
                return({
                    ...prev,
                    [obj.name]:obj.value,
                    str:obj.value
                });
            });
            return;
        }
        setState(prev=>{
            return({
                ...prev,
                [obj.name]:obj.value
            });
        });
    }
    if(state.allStudents===null&&!state.showMessage){
        axios.get('http://localhost:3001/')
        .then(response=>{
            // console.log(response.data)
           setState(prev=>{
            return({
                ...prev,
                allStudents:response.data
            })
           })
            
        })
        .catch(err=>{
            console.log(err.message)
            setState(prev=>{
                return({
                    ...prev,
                    message:err.message,
                    showMessage:true,
                    messageType:"error",
                    allStudents:undefined
                });
            });
        })
        return;
    }
    function display(){
        if(state.showMessage){
        setTimeout(
            ()=>setState(prev=>{
                return(
                    {
                        ...prev,
                        showMessage:false
                    }
                )
            }),3000
        )
        return <Modal show={state.showMessage} type={state.messageType} message={state.message}/>
        }return;
    }
    return(
        <>  
        {display()}
        {/* <Icon sx={{ color: "white" }}>add_circle</Icon> */}
        {!state.studentForm&&
        <div style={{margin:"25px",color:"#DDE1E9"}}>
                    <h3 style={{marginBlockStart:"0.6em",marginBlockEnd:"0em"}}>MY STUDENTS</h3>
                    <div style={{color:"#43C6A2", fontSize:"0.7em"}}> The following list contains students being taught or mentored by you</div>
        </div>}
        {state.studentForm&&
        <button className="btn1" name="cancel" onClick={handleClick} style={{margin:"50px 11% 50px 0",float:"right"}}>X</button>}
        {!state.studentForm&&
            <button className="btn1" name="addStudent" style={{margin:"20px 11% 20px ",float:"right"}} onClick={handleClick}>Add student</button>}
            {console.log(state.str)}
            {state.studentForm?
            <>
            <table 
                 style={{margin:"12% auto",width:"50%",color:"#DDE1E9",background:"#1B2537",
                         boxShadow:"2px 2px 5px 0px black",padding:"10px"}} cellSpacing="5px">
                        <tr>
                            <td className='td-label' width="50%">Name</td>
                            <td ><input type="text" width="50%" className="td-unedit" name="name" value={state.name} onChange={handleChange}></input></td>
                        </tr>
                        <tr>
                        <td className='td-label'>Roll No.</td>
                        <td ><input className="td-unedit" name="roll" value={state.roll} onChange={handleChange}></input></td>
                        </tr>
                        <tr>
                            <td className='td-label'>Department</td>
                            <td ><input className="td-unedit" name="department" value={state.department} onChange={handleChange}></input></td>                        </tr>
                        <tr>
                            <td className='td-label'>Year</td>
                            <td ><input className="td-unedit" name="year" value={state.year} onChange={handleChange}></input></td>
                        </tr>
                        <tr>
                            <td className='td-label'>Section</td>
                            <td ><input className="td-unedit" name="section" value={state.section} onChange={handleChange}></input></td>
                        </tr>
                       
                         
                        <tr>
                            <td className='td-label'>Username</td>
                            <td ><input className="td-unedit" name="username" value={state.username} onChange={handleChange}></input></td>
                        </tr>
                        <tr>
                            <td className='td-label'>Photo</td>
                            <td ><input type="file" className="td-unedit-1" name="img"  onChange={handleChange}></input></td>
                        </tr>
                    </table>
                    <button className="btn1" style={{margin:"100px"}}    name="submit" onClick={handleClick}>Add</button>
            </>
            :<>
            <div style={{width:"20%",margin:"100px 11% 0px auto",
                            }}>
                    <input style={{
                        width:"100%",
                        boxShadow:"2px 1.5px 2px 0px black",
                        WebkitBoxShadow:"2px 1.5px 2px 0px black",
                        background:"#1B2537",
                        color:"white",
                        border:"0",
                        outline:"none",
                        padding:"3px 7px 3px 7px"
                    }}
                    name="search"
                    onChange={handleChange}
                    className="searchbar"
                    placeholder='Search by name, roll no. or branch' 
                    value={state.search}></input>
                </div>
                <StudentsTable str={state.str}/>
            </>
            }
        </>
    );
    function StudentsTable(props){
        console.log(props);
        return(
            <>
                <div style={{margin:"20px auto 0px auto",color:"#DDE1E9",background:"#1B2537",width:"80%",height:"50%",overflowY:"scroll",
                            boxShadow:"4px 3px 8px 0px black",
                            WebkitBoxShadow:"4px 3px 8px 1px black"
                            }}>
                    <table style={{width:"100%",padding:"10px",background:"#1B2537",fontSize:"12px"}}>
                        <tr>
                            <td width="25%" style={{color:"#43C6A2",position:"sticky",top:"0",background:"#1B2537",borderBottom:"2px solid #141A28"}}><b>Name</b></td>
                            <td width="25%" style={{color:"#43C6A2",position:"sticky",top:"0",background:"#1B2537",borderBottom:"2px solid #141A28"}}><b>Roll no</b></td>
                            <td width="25%" style={{color:"#43C6A2",position:"sticky",top:"0",background:"#1B2537",borderBottom:"2px solid #141A28"}}><b>Branch</b></td>
                            <td width="25%" style={{color:"#43C6A2",position:"sticky",top:"0",background:"#1B2537",borderBottom:"2px solid #141A28"}}><b>Section</b></td>

                        </tr>
                        {
                            state.allStudents!==null&&state.allStudents!==undefined?state.allStudents.map(i=>{
                                if(i.name!==''&&i.name!==undefined&&i.name!==null&&
                                i.roll!==''&&i.roll!==undefined&&i.roll!==null&&
                                i.department!==''&&i.department!==undefined&&i.department!==null&&
                                (i.name.toUpperCase().includes(props.str.toUpperCase())||
                                i.roll.toUpperCase().includes(props.str.toUpperCase())||
                                i.department.toUpperCase().includes(props.str.toUpperCase())))
                                return(<tr>
                                    {/* <td className="student data">Name</td> */}
                                    <td className="student-data">{i.name}</td>
                                    <td className="student-data">{i.roll}</td>
                                    <td className="student-data">{i.department}</td>
                                    <td className="student-data">{i.year+i.section}</td>
                                </tr>)
                                return;
                            }):""
                        }
                    </table>
                </div>
            </>
        );
    }
    
}

export default Students;