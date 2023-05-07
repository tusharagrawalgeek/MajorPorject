import React from "react";
import "./style.css";
import * as colors from "./colors";
function SubjectsAndFeedback() {
  return (
    <>
      <div style={{ marginTop: "2rem", color: "#DDE1E9" }}>
        <table
          style={{
            margin: "auto",
            width: "80%",
            background: "#1B2537",
            borderSpacing: "0",
            padding: "10px",
            fontSize:"0.8rem"
          }}
        >
          <caption
            style={{
              background: "#1B2537",
              padding: "10px",
              fontWeight: "bold",
              fontSize: "1rem",
              color: colors.green,
            }}
          >
            Subjects
          </caption>
          <tr>
            <td
              style={{
                color: "#43C6A2",
                position: "sticky",
                top: "0",
                background: "#1B2537",
                borderBottom: "2px solid #141A28",
                border: "1px solid #DDE1E9",
                padding: "5px",
              }}
            >
              <b>S.No.</b>
            </td>
            <td
              style={{
                color: "#43C6A2",
                position: "sticky",
                top: "0",
                background: "#1B2537",
                borderBottom: "2px solid #141A28",
                border: "1px solid #DDE1E9",
                padding: "5px",
              }}
            >
              <b>Subject code</b>
            </td>
            <td
              style={{
                color: "#43C6A2",
                position: "sticky",
                top: "0",
                background: "#1B2537",
                borderBottom: "2px solid #141A28",
                border: "1px solid #DDE1E9",
                padding: "5px",
              }}
            >
              <b>Subject name</b>
            </td>
            <td
              style={{
                color: "#43C6A2",
                position: "sticky",
                top: "0",
                background: "#1B2537",
                borderBottom: "2px solid #141A28",
                border: "1px solid #DDE1E9",
                padding: "5px",
              }}
            >
              <b>Subject type</b>
            </td>
            <td
              style={{
                color: "#43C6A2",
                position: "sticky",
                top: "0",
                background: "#1B2537",
                borderBottom: "2px solid #141A28",
                border: "1px solid #DDE1E9",
                padding: "5px",
              }}
            >
              <b>Faculty code</b>
            </td>
            <td
              style={{
                color: "#43C6A2",
                position: "sticky",
                top: "0",
                background: "#1B2537",
                borderBottom: "2px solid #141A28",
                border: "1px solid #DDE1E9",
                padding: "5px",
              }}
            >
              <b>Faculty name</b>
            </td>
          </tr>
          <tr>
            <td className="td1">1</td>
            <td className="td1">KHU516</td>
            <td className="td1">PROJECT</td>
            <td className="td1">PRACTICAL</td>
            <td className="td1">48651</td>
            <td className="td1">AJAY KUMAR</td>
          </tr>
          <tr>
            <td className="td1">1</td>
            <td className="td1">KHU516</td>
            <td className="td1">PROJECT</td>
            <td className="td1">PRACTICAL</td>
            <td className="td1">48651</td>
            <td className="td1">AJAY KUMAR</td>
          </tr>
          <tr>
            <td className="td1">1</td>
            <td className="td1">KHU516</td>
            <td className="td1">PROJECT</td>
            <td className="td1">PRACTICAL</td>
            <td className="td1">48651</td>
            <td className="td1">AJAY KUMAR</td>
          </tr>
          <tr>
            <td className="td1">1</td>
            <td className="td1">KHU516</td>
            <td className="td1">PROJECT</td>
            <td className="td1">PRACTICAL</td>
            <td className="td1">48651</td>
            <td className="td1">AJAY KUMAR</td>
          </tr>
        </table>
      </div>
      <div style={{ marginTop: "2rem", color: "#DDE1E9" }}>
        <table
          style={{
            fontSize:"0.8rem",
            margin: "auto",
            width: "80%",
            background: "#1B2537",
            fontSize: "12px",
            borderSpacing: "0",
            padding: "10px",
          }}
        >
          <caption
            style={{
              background: "#1B2537",
              padding: "10px",
              fontWeight: "bold",
              fontSize: "1rem",
              color: colors.green,
            }}
          >
            Feedback
          </caption>
          <tr>
            <td style={{ padding: "1rem" }}>
              Which is the best faculty in your current semester?
            </td>
            <td>
              <select
                style={
                  {
                    // width:"7rem"
                  }
                }
                className="select"
              >
                <option>anjc</option>
              </select>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "1rem" }}>
              What makes him/her the best faculty?
            </td>
            <td>
              <select
                style={
                  {
                    // width:"7rem"
                  }
                }
                className="select"
              >
                <option>anjc</option>
              </select>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "1rem" }}>General remarks (if any) :</td>
            <td>
              <input className="select"></input>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div style={{ margin: "auto", width: "fit-content" }}>
                <button className="btn2" style={{ margin: "1rem" }}>
                  Submit
                </button>
                <button className="btn2" style={{ margin: "1rem" }}>
                  Close
                </button>
              </div>
            </td>
            {/* <td>
                    <button>Close</button>
                
                </td> */}
          </tr>
        </table>
      </div>
    </>
  );
}
export default SubjectsAndFeedback;
