// import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import App from "./App";
// var clicked=true;

function SideBar(props) {
  const [state, setState] = useState({
    user: props.user,
  });

  function handleClick(event) {
    const name = event.target.getAttribute("name");
    console.log(name);
    props.changeState(name);
  }

  return (
    <>
      {/* {console.log(state.user.img[0].base64)} */}
      <div
        style={{
          color: "#DDE1E9",
          background: "#1B2537",
          height: "100vh",
        }}
      >
        <div
          style={{ paddingTop: "50px", paddingBottom: "50px", height: "80%" }}
        >
          <table style={{ margin: "auto", borderSpacing: 1, height: "100%" }}>
            <tr>
              <td>
                <img
                  className="profileImg"
                  width="190px"
                  height="190px"
                  src={state.user.dp}
                ></img>
              </td>
            </tr>
            <tr>
              <td style={{}}>
                {" "}
                <h4 style={{ margin: 0 }}>{state.user.name}</h4>
              </td>
            </tr>
            <tr>
              <td className="nametd" style={{ fontSize: "12px" }}>
                Student
              </td>
            </tr>
            <tr>
              <td>
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <h5>
                  <Link to="profile">
                    <button
                      name="profile"
                      className={
                        props.selectedState === "profile"
                          ? "btn-sidebar-clicked"
                          : "btn-sidebar"
                      }
                      onClick={handleClick}
                    >
                      Profile
                    </button>
                  </Link>
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>
                  <Link to="subjectsandfeedback">
                    <button
                      name="subjectsandfeedback"
                      className={
                        props.selectedState === "subjectsandfeedback"
                          ? "btn-sidebar-clicked"
                          : "btn-sidebar"
                      }
                      onClick={handleClick}
                    >
                      Subjects & Feedback
                    </button>
                  </Link>
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>
                  <Link to="attendance">
                    <button
                      name="attendance"
                      className={
                        props.selectedState === "attendance"
                          ? "btn-sidebar-clicked"
                          : "btn-sidebar"
                      }
                      // className="btn-sidebar-clicked"
                      onClick={handleClick}
                    >
                      Class Attendance
                    </button>
                  </Link>
                </h5>
              </td>
            </tr>
            {/* <tr>
                <td><h5>
                    <Link to="feedback">
                    <button
                    name="feedback" 
                    className={props.selectedState==="feedback"?"btn-sidebar-clicked":"btn-sidebar"}
                    onClick={handleClick}>
                        My Feedback
                    </button>
                    </Link>
                    </h5></td>
                </tr> */}
            <tr>
              <td>
                <h5>
                  <Link to="notices">
                    <button
                      name="notices"
                      className={
                        props.selectedState === "notices"
                          ? "btn-sidebar-clicked"
                          : "btn-sidebar"
                      }
                      onClick={handleClick}
                    >
                      Notices
                    </button>
                  </Link>
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>
                  <button className="btn-sidebar">Registration Form</button>
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>
                  <Link to="marks">
                    <button
                      name="marks"
                      className={
                        props.selectedState === "marks"
                          ? "btn-sidebar-clicked"
                          : "btn-sidebar"
                      }
                      onClick={handleClick}
                    >
                      Marks
                    </button>
                  </Link>
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>
                  <Link to="documents">
                    <button
                      name="documents"
                      className={
                        props.selectedState === "documents"
                          ? "btn-sidebar-clicked"
                          : "btn-sidebar"
                      }
                      onClick={handleClick}
                    >
                      Documents
                    </button>
                  </Link>
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>
                  <Link to="/">
                    <button className="btn-sidebar">Logout</button>
                  </Link>
                </h5>
              </td>
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
