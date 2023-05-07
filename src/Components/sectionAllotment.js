import React, { useState } from "react";
import '../style.css';
import * as colors from '../colors';
import * as subjectNames from '../Subjects/subjects';
import subjects from "../Subjects/subjects";
function SectionAllotment(props) {
    const names=subjectNames.default;
  const [state, setState] = useState({
    // sections: ["4d", "3A"],
    year: "",
    section: "",
    subCode:"",
    subName:"",
    submitted:false
  });
  function handleChange(e) {
    const obj = e.target;
    if(obj.name==="subject"){
        // const d=obj.value.split(" ");
        // console.log(d);
        setState({...state,subCode:obj.value, subName:subjectNames[obj.value]});
    }else
    setState({ ...state, [obj.name]: obj.value });
  }
  return (
    <>
      {/* {console.log(names[1])} */}
      <div style={{ padding: "1rem 3rem " }}>
        {/* <div>
          <button
            className="btn1"
            onClick={() => props.closePopup()}
            style={{ float: "right" }}
          >
            X
          </button>
        </div> */}
        <div style={{  }}>
          <table>
            <tr>
            <td className="td2">
                <label>Year:</label>
              </td>
              <td className="td2">
                <select name="year" className="select" id="year" onChange={handleChange}>
                  <option value=""  style={{background:colors.sidebar_bg}}>--Select--</option>
                  <option value="1" style={{background:colors.sidebar_bg}}>1</option>
                  <option value="2" style={{background:colors.sidebar_bg}}>2</option>
                  <option value="3" style={{background:colors.sidebar_bg}}>3</option>
                  <option value="4" style={{background:colors.sidebar_bg}}>4</option>
                </select>
            </td>
            </tr>
            <tr >
              <td className="td2">
                <label>Section:</label>
              </td>
              <td className="td2">
                <select name="section"  className="select" id="section" onChange={handleChange}>
                <option value=""  style={{background:colors.sidebar_bg}}>--Select--</option>
                  <option value="A" style={{background:colors.sidebar_bg}}>A</option>
                  <option value="B" style={{background:colors.sidebar_bg}}>B</option>
                  <option value="C" style={{background:colors.sidebar_bg}}>C</option>
                  <option value="D" style={{background:colors.sidebar_bg}}>D</option>
                </select>
              </td>
              </tr>
              <tr >
              <td className="td2">
                <label>Subject:</label>
              </td>
              <td className="td2">
                <select name="subject"  className="select" id="subject" onChange={handleChange}>
                <option value=""  style={{background:colors.sidebar_bg}}>--Select--</option>

                {names.map(i=>{
                    return(
                        <option value={i} style={{background:colors.sidebar_bg}}>{subjectNames[i]}</option>
                    );
                })}
                </select>
              </td>
              </tr>
              <tr>
              <td className="td" colSpan="2" >
                <div style={{marginLeft:"1rem", padding:"1rem 1rem 0"}}>
                    {/* {!state.submitted? */}
                  <button
                    className={state.submitted?"btn3":"btn1"}
                    onClick={() =>{
                        props.addSections(state.year + state.section, state.subCode, state.subName);
                        setState({...state,submitted:true})
                    }
                      
                    }
                    style={{color:colors.green}}
                    disabled={state.submitted}
                  >
                    {state.submitted?"Added":"Add"}
                    
                  </button>
                  {/* :<>Added</>} */}
                  </div>
                </td>
              </tr>
          </table>
        </div>
      </div>
    </>
  );
}
export default SectionAllotment;
