import React, { useEffect } from "react";
import * as colors from "./colors";
import { useState } from "react";
import searchQuery from "./Search functions/searchQuery";
import dateFormatUS from "./functions/dateFormatting";
import getNotices from "./api/getNotices";
function Table() {
  const [state, setState] = useState({
    searchValue: "",
    data: [],
    dataToDisplay: [],
  });
  useEffect(() => {
    // if(state.data.length===0)
    const data = getNotices();
    setState({ ...state, data: data, dataToDisplay: data });
  }, []);
  useEffect(() => {
    console.log("here");
    if (state.data.length != 0) {
      const searchData = searchQuery(state.searchValue, state.data);
      setState({ ...state, dataToDisplay: searchData });
    }
  }, [state.searchValue]);

  function handleChange(e) {
    const obj = e.target;
    if (obj.name === "searchValue") {
      setState({ ...state, [obj.name]: obj.value });
    }
  }
  return (
    <>
      <div
        style={{
          margin: "auto",
          background: colors.sidebar_bg,
          width: "80%",
          height: "60vh",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <div
            style={{
              padding: "1rem 2rem 1rem",
              float: "right",
              //   width:"100%"
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
                fontSize:"0.8rem"
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
                  <b>Title</b>
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
                  <b>Date posted</b>
                </td>
              </tr>
              {state.dataToDisplay.map((i, ind) => {
                // console.log(i);
                return (
                  <>
                    <tr>
                      <td>{ind + 1}</td>
                      <td>{i.title}</td>
                      <td>{dateFormatUS(i.date)}</td>
                    </tr>
                  </>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Table;
