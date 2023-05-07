import React, { useEffect } from "react";
import { useState } from "react";
import "./style.css";
import axios from "axios";
import Modal from "./Modal";
import FileBase64 from "react-file-base64";
import uploadStudent from "./api/uploadStudent";
import getStudents from "./api/getStudents";
import * as subjects from "./Subjects/subjects";
import * as colors from './colors';
function Students() {
  const [state, setState] = useState({
    studentForm: false,
    name: "",
    roll: "",
    department: "",
    year: "",
    section: "",
    username: "",
    // profile:"",
    img: "",
    search: "",
    allStudents: null,
    showMessage: false,
    message: "",
    messageType: "",
    str: "",
    uploadStudent: false,
    subjects:[]
  });
  useEffect(() => {
    async function uploadStudentAPI() {
      const term=[];
      state.subjects.map(i=>{
        term.push({name:i,obtMarks:"",maxMarks:"",facultyCode:""});
      })
      const newStudent = {
        name: state.name,
        roll: Number(state.roll),
        department: state.department,
        year: Number(state.year),
        section: state.section,
        username: state.username,
        password: state.username,
        dp: state.img[0].base64,
        profile: "student",
        subjects:state.subjects,
        marks:[term,term,term]
      };
      console.log(newStudent);
      const resp = await uploadStudent(newStudent);
      if (resp) {
        setState({
          ...state,
          name: "",
          roll: "",
          department: "",
          year: "",
          section: "",
          username: "",
          img: "",
          uploadStudent: false,
          subjects:[]
        });
      }
    }
    if (state.uploadStudent) {
      uploadStudentAPI();
    }
  }, [state.uploadStudent]);
  useEffect(() => {
    async function getStudentAPI() {
      const data = await getStudents();
      if (data) {
        setState({ ...state, allStudents: data });
      }
    }
    getStudentAPI();
  }, []);
  function handleClick(e) {
    const obj = e.target;
    if(obj.name==="deleteSubject"){
        console.log(obj.getAttribute("value"));
        const val=obj.getAttribute("value");
        state.subjects.splice(val,1);
        setState({...state});
    }
    if (obj.name === "addStudent") {
      setState((prev) => {
        return { ...prev, studentForm: true };
      });
      return;
    }
    if (obj.name === "cancel") {
      setState((prev) => {
        return {
          ...prev,
          studentForm: false,
          name: "",
          roll: "",
          department: "",
          year: "",
          section: "",
          username: "",
          img: "",
        };
      });
      return;
    }
    if (obj.name === "submit") {
      setState({ ...state, uploadStudent: true });
    }
  }
  function handleChange(e) {
    const obj = e.target;
    if(obj.name==="subject"){
        state.subjects.push(obj.value);
        console.log(state.subjects);
        setState({...state});
    }
    if (obj.name === "search") {
      setState((prev) => {
        return {
          ...prev,
          [obj.name]: obj.value,
          str: obj.value,
        };
      });
      return;
    }else
    setState((prev) => {
      return {
        ...prev,
        [obj.name]: obj.value,
      };
    });
  }
  function display() {
    if (state.showMessage) {
      setTimeout(
        () =>
          setState((prev) => {
            return {
              ...prev,
              showMessage: false,
            };
          }),
        3000
      );
      return (
        <Modal
          show={state.showMessage}
          type={state.messageType}
          message={state.message}
        />
      );
    }
    return;
  }
  return (
    <>
    {console.log(state.subjects)}
      {display()}
      {/* <Icon sx={{ color: "white" }}>add_circle</Icon> */}
      {!state.studentForm && (
        <div style={{ margin: "25px", color: "#DDE1E9" }}>
          <h3 style={{ marginBlockStart: "0.6em", marginBlockEnd: "0em" }}>
            MY STUDENTS
          </h3>
          <div style={{ color: "#43C6A2", fontSize: "0.7em" }}>
            {" "}
            The following list contains students being taught or mentored by you
          </div>
        </div>
      )}
      {state.studentForm && (
        <button
          className="btn1"
          name="cancel"
          onClick={handleClick}
          style={{ margin: "50px 11% 50px 0", float: "right" }}
        >
          X
        </button>
      )}
      {!state.studentForm && (
        <button
          className="btn1"
          name="addStudent"
          style={{ margin: "20px 11% 20px ", float: "right" }}
          onClick={handleClick}
        >
          Add student
        </button>
      )}
      {console.log(state.str)}
      {state.studentForm ? (
        <>
          <table
            style={{
              margin: "12% auto",
              width: "50%",
              color: "#DDE1E9",
              background: "#1B2537",
              boxShadow: "2px 2px 5px 0px black",
              padding: "10px",
            }}
            cellSpacing="5px"
          >
            <tr>
              <td className="td-label" width="50%">
                Name
              </td>
              <td>
                <input
                  type="text"
                  width="50%"
                  className="td-unedit"
                  name="name"
                  value={state.name}
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td className="td-label">Roll No.</td>
              <td>
                <input
                  className="td-unedit"
                  name="roll"
                  value={state.roll}
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td className="td-label">Department</td>
              <td>
                <input
                  className="td-unedit"
                  name="department"
                  value={state.department}
                  onChange={handleChange}
                ></input>
              </td>{" "}
            </tr>
            <tr>
              <td className="td-label">Year</td>
              <td>
                <input
                  className="td-unedit"
                  name="year"
                  value={state.year}
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td className="td-label">Section</td>
              <td>
                <input
                  className="td-unedit"
                  name="section"
                  value={state.section}
                  onChange={handleChange}
                ></input>
              </td>
            </tr>

            <tr>
              <td className="td-label">Username</td>
              <td>
                <input
                  className="td-unedit"
                  name="username"
                  value={state.username}
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td className="td-label">Photo</td>
              <td>
                <FileBase64
                  multiple="false"
                  onDone={(base64) => setState({ ...state, img: base64 })}
                ></FileBase64>
              </td>
            </tr>
            <tr>
              <td className="td-label">Subjects</td>
              <td>
                <select
                  name="subject"
                  className="select"
                  id="subject"
                  onChange={handleChange}
                >
                  <option value="" style={{ background: colors.sidebar_bg }}>
                    --Select--
                  </option>

                  {subjects.default.map((i) => {
                    return (
                      <option
                        value={i}
                        style={{ background: colors.sidebar_bg }}
                      >
                        {subjects[i]}
                      </option>
                    );
                  })}
                </select>
                {state.subjects.map((i,ind)=>{
                                return(
                                  <>
                                  <div style={{display:"inline", padding:"0.1rem 0.1rem 0.1rem 0.7rem", background:"", borderRadius:"0.2rem",margin:"0 0.2rem", boxShadow:"1px 1px 3px 0px black"}}>
                                    {i}
                                    <button name="deleteSubject" value={ind} style={{background:"none", border:"0",verticalAlign:"middle",margin:"0 0 0.4rem 0",color:"grey"}} onClick={handleClick}>x</button>
                                  </div>
                                  </>
                                );
                              })}
              </td>
            </tr>
          </table>
          <button
            className="btn3"
            style={{ margin: "1rem 3rem" }}
            name="submit"
            onClick={handleClick}
          >
            Add
          </button>
        </>
      ) : (
        <>
          <div style={{ width: "20%", margin: "100px 11% 0px auto" }}>
            <input
              style={{
                width: "100%",
                boxShadow: "2px 1.5px 2px 0px black",
                WebkitBoxShadow: "2px 1.5px 2px 0px black",
                background: "#1B2537",
                color: "white",
                border: "0",
                outline: "none",
                padding: "3px 7px 3px 7px",
              }}
              name="search"
              onChange={handleChange}
              className="searchbar"
              placeholder="Search by name, roll no. or branch"
              value={state.search}
            ></input>
          </div>
          <StudentsTable str={state.str} />
        </>
      )}
    </>
  );
  function StudentsTable(props) {
    console.log(props);
    return (
      <>
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
                width="25%"
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
                width="25%"
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
                width="25%"
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
                width="25%"
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
            </tr>
            {state.allStudents !== null && state.allStudents !== undefined
              ? state.allStudents.map((i) => {
                  if (
                    i.name !== "" &&
                    i.name !== undefined &&
                    i.name !== null &&
                    i.roll !== "" &&
                    i.roll !== undefined &&
                    i.roll !== null &&
                    i.department !== "" &&
                    i.department !== undefined &&
                    i.department !== null &&
                    (i.name.toUpperCase().includes(props.str.toUpperCase()) ||
                      i.roll.toString().includes(props.str.toUpperCase()) ||
                      i.department
                        .toUpperCase()
                        .includes(props.str.toUpperCase()) ||
                      i.section
                        .toUpperCase()
                        .includes(props.str.toUpperCase()) ||
                      i.year.toString().includes(props.str.toUpperCase()))
                  )
                    return (
                      <tr>
                        <td className="student-data">{i.name}</td>
                        <td className="student-data">{i.roll}</td>
                        <td className="student-data">{i.department}</td>
                        <td className="student-data">{i.year}</td>
                        <td className="student-data">{i.section}</td>
                      </tr>
                    );
                  return;
                })
              : ""}
          </table>
        </div>
      </>
    );
  }
}

export default Students;
