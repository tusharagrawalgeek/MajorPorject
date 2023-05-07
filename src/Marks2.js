import React, { useEffect } from "react";
import { useState } from "react";
import "./style.css";
import findStudents from "./Search functions/findStudents";
import fetchStudent from "./api/fetchStudents";
import * as colors from './colors';
import * as subjects from "./Subjects/subjects";
import './style.css';
import updateMarks from "./api/updateMarks";
function Marks2(props) {
  const teacher = {
    classes: ["ClassA", "Class B", "class C"],
    subjects: ["sub1", "sub2", "sub3"],
  };
  const[state,setState]=useState(
    {
        teacher:props.user,
        currentState:"class",
        class:null,
        subject:null,
        students:[],
        fetchStudents:false,
        maxmarks:100,
        marks:[],
        term:0
    }
  );
  //  useEffect(()=>{
  //   if(state.subject!==null&&state.class!==null){
  //       const students=findStudents(state.class,state.subject);
  //       setState({...state,students:students});
  //   }
  //  },[state.subject])
   useEffect(()=>{
    async function fetchStudentAPI(){
      const data=await fetchStudent(state.class,state.subject);
      console.log(data);
      if(data!==null&&data!==undefined){
        data.map(i=>{
          // console.log(i.marks);
          state.marks.push({id:i._id,marks:""});
        })
        console.log(state.marks);
        setState({...state,students:data,fetchStudents:false});
      }else{
        setState({...state,fetchStudents:false});
      }
    }
    if(state.fetchStudents){
      fetchStudentAPI();
    }
   },[state.fetchStudents])
  function handleClass(e){
    const val=e.target.getAttribute("value");
    setState({...state, class:val, currentState:"subject"})
  }
  function handleSubject(e){
    const val=e.target.getAttribute("value");
    setState({...state, subject:val, currentState:"students",fetchStudents:true})
  }
  function handleMarksChange(e){
    // console.log(e.target);
    const id=e.target.name;
    const val=e.target.value;
    // console.log(id,val);
    state.marks.some((i,ind)=>{
      if(i.id===id){
        console.log(i.id,id);
        state.marks[ind].marks=Number(val);
        return true;
      }
      return false;
    })
    console.log(state.marks);
    setState({...state});
  }
  function findValue(e){
    console.log(e);
    return 0;
  }
  function handleSubmit(){
    state.marks.map(async i=>{
      const stud=await state.students.some(async s=>{
        if(s._id===i.id){
          const currentMarks=s.marks;
          console.log(currentMarks);
          currentMarks[state.term].some(k=>{
            if(k.name===state.subject){
              k.obtMarks=i.marks;
              k.maxMarks=state.maxmarks;
              return true;
            }
            return false;
          })
          console.log(currentMarks);
          await updateMarks(i.id,currentMarks);
          return true;
        }
        return false;
      })
      // await updateMarks(i.id,state.term,state.subject,i.marks, state.maxmarks);
    })
  }
  return (
    <>
    {console.log(state.students)}
      <div style={{ margin: "25px", color: "#DDE1E9" }}>
        <h3 style={{ marginBlockStart: "0.6em", marginBlockEnd: "0em" }}>
          MARKS
        </h3>
        <div style={{ color: "#43C6A2", fontSize: "0.7em" }}>
          {" "}
          description about this page
        </div>
        {state.currentState==="class"?
        <div>
            <table style={{
                margin:"5rem auto"
            }}>
                {state.teacher.sections.length===0?<>
                No classes allotted to you
                </>:
                <>
                {
                    state.teacher.sections.map((i,ind)=>{
                        return(
                            <>
                            <tr>
                                {/* <Link to={i}> */}
                                <td className="tdspace" onClick={handleClass} value={i[0]}>{i[0]}</td>
                                {/* </Link> */}
                            </tr>
                            </>
                        );
                    })
                }
                </>}
            </table>
            
        </div>
        :
        state.currentState==="subject"?
        <div>
            <table style={{
                margin:"5rem auto"
            }}>
                {console.log(state.class)}
                <>
                {   
                  state.teacher.sections.map((i,ind)=>{
                    console.log(i[0],state.class);
                    if(i[0]===state.class){
                      console.log(state.teacher.sections[ind][2]);
                    
                    return(
                      <>
                      <tr>
                          <td className="tdspace" onClick={handleSubject} value={i[1]}>{i[2]}</td>
                      </tr>
                      </>
                  );
                    }
                  })
                }
                </>
            </table>
        </div>
        :
        state.currentState==="students"?
        <>
        {console.log(state.class,state.subject)}
        <div style={{
          width:"80%",margin: "20px auto 0px auto"}}
           >
              <div >
        <div style={{color:colors.green, display:"inline"}}>Subject Code :  </div>
          {state.subject}
          <br/>
          <div style={{color:colors.green, display:"inline"}}>Subject :</div>
          {subjects[state.subject]}
          <br/>
          <div style={{color:colors.green, display:"inline"}}>Maximum marks :</div>
          <input className="td-unedit" value={state.maxmarks}></input>
          </div>
          </div>
        <div
          style={{
            margin: "20px auto 0px auto",
            color: "#DDE1E9",
            background: "#1B2537",
            width: "80%",
            height: "50%",
            overflowY: "scroll",
            boxShadow: "4px 3px 8px 0px black",
            WebkitBoxShadow: "4px 3px 8px 1px black",
          }}
        >
          
          <table
            style={{
              width: "100%",
              padding: "10px",
              background: "#1B2537",
              fontSize: "12px",
            }}
          >
            <tr>
              <td
                width="25%"
                style={{
                  color: "#43C6A2",
                  position: "sticky",
                  top: "0",
                  background: "#1B2537",
                  borderBottom: "2px solid #141A28",
                }}
              >
                <b>Name</b>
              </td>
              <td
                width="20%"
                style={{
                  color: "#43C6A2",
                  position: "sticky",
                  top: "0",
                  background: "#1B2537",
                  borderBottom: "2px solid #141A28",
                }}
              >
                <b>Roll no</b>
              </td>
              <td
                width="15%"
                style={{
                  color: "#43C6A2",
                  position: "sticky",
                  top: "0",
                  background: "#1B2537",
                  borderBottom: "2px solid #141A28",
                }}
              >
                <b>Branch</b>
              </td>
              <td
                width="15%"
                style={{
                  color: "#43C6A2",
                  position: "sticky",
                  top: "0",
                  background: "#1B2537",
                  borderBottom: "2px solid #141A28",
                }}
              >
                <b>Year</b>
              </td>
              <td
                width="15%"
                style={{
                  color: "#43C6A2",
                  position: "sticky",
                  top: "0",
                  background: "#1B2537",
                  borderBottom: "2px solid #141A28",
                }}
              >
                <b>Section</b>
              </td>
              <td
                width="20%"
                style={{
                  color: "#43C6A2",
                  position: "sticky",
                  top: "0",
                  background: "#1B2537",
                  borderBottom: "2px solid #141A28",
                }}
              >
                <b>Obt. marks</b>
              </td>
            </tr>
            {state.students.map((i,ind)=>{
              return(
                <>
                <tr>
                        <td className="student-data">{i.name}</td>
                        <td className="student-data">{i.roll}</td>
                        <td className="student-data">{i.department}</td>
                        <td className="student-data">{i.year}</td>
                        <td className="student-data">{i.section}</td>
                        <td className="student-data">
                          <input  className="td-unedit" name={i._id} value={state.marks[ind].marks} onChange={handleMarksChange}></input>
                        </td>
                      </tr>
                </>
              );
            })}
            </table>
            
            </div>
            <div style={{
          width:"80%",margin: "20px auto 0px auto"}}
           >
             
            <button className="btn1" name="submit" onClick={handleSubmit} style={{color:colors.green  }}>Submit</button>
        </div>
        </>
        :
        <>
        </>
            }
      </div>
    </>
  );
}
export default Marks2;
