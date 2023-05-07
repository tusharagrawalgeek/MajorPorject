import React from "react";
import searchGeneralQuery from "./Search functions/searchGeneralQuery";
import * as colors from "./colors";
import { useEffect, useState } from "react";
import getTeachers from "./api/getTeachers";

function TeachersTable(props) {
  const [state, setState] = useState({
    btnClass: "btn3",
    searchValue: "",
    data: [],
    dataToDisplay: [],
  });
  
  useEffect(() => {
    async function getteacher() {
      const data = await getTeachers();
      console.log(data);
      if (data !== null && data.length !== 0)
        setState({ ...state, data: data, dataToDisplay: data });
    }
    getteacher();
  }, []);
  useEffect(() => {
    console.log("here");
    if (state.data.length != 0) {
      const searchData = searchGeneralQuery(state.searchValue, state.data);
      setState({ ...state, dataToDisplay: searchData });
    }
  }, [state.searchValue]);
  function handleChange(e) {
    const obj = e.target;
    if (obj.name === "searchValue") {
      setState({ ...state, [obj.name]: obj.value });
    }
  }
  function handleMouseOver() {
    setState((prev) => {
      return { ...prev, btnClass: "btn2" };
    });
  }
  function handleMouseOut() {
    setState((prev) => {
      return { ...prev, btnClass: "btn3" };
    });
  }
  function handleClick(e) {
    const name = e.target.getAttribute("name");
    console.log(name);
    if (name === "addTeacher") {
      setState({ ...state, addTeacherForm: true, showTable: false });
    }
    if(name==="cancel"){
        setState({ ...state, addTeacherForm: false, showTable: true });
    }
  }
  return (
    <>
            <div
        style={{
          margin: "auto",
          
          width: "80%",
          height: "60vh",
        }}
      >
             <div
          style={{
            height: "100%",
            width: "100%",
            background: colors.sidebar_bg,
          }}
        >
              <div
                style={{
                  padding: "1rem 2rem 1rem",
                  float: "right",
                }}
              >
                <input
                  className="td-unedit"
                  name="searchValue"
                  placeholder="Search..."
                  onChange={handleChange}
                ></input>
              </div>
              <div
                style={{
                  overflowY: "auto",
                  height: "100%",
                  width: "100%",
                  background: colors.sidebar_bg,
                }}
              >
                <table
                  style={{
                    padding: "1rem",
                    width: "100%",
                    fontSize: "0.8rem",
                  }}
                >
                  <tr>
                    <td
                      width="10%"
                      style={{
                        color: "#43C6A2",
                        position: "sticky",
                        top: "0",
                        background: "#1B2537",
                        borderBottom: "2px solid #141A28",
                      }}
                    >
                      <b>S.No.</b>
                    </td>
                    <td
                      width="70%"
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
                      <b>Department</b>
                    </td>
                  </tr>
                  {state.dataToDisplay.map((i, ind) => {
                    return (
                      <>
                        <tr>
                          <td>{ind + 1}</td>
                          <td>{i.name}</td>
                          <td>{i.department}</td>
                        </tr>
                      </>
                    );
                  })}
                </table>
              </div>
              <button
                name="addTeacher"
                className={state.btnClass}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{ marginTop: "1rem" }}
                onClick={()=>props.showTeacherForm()}
              >
                <b>Add teacher</b>
              </button>
              </div>
              </div>
            </>
          
  );
}
export default TeachersTable;
