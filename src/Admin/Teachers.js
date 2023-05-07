import React, { useEffect, useState } from "react";
import TeachersTable from "../TeachersTable";
import FileBase64 from "react-file-base64";
import uploadTeacher from "../api/uploadTeacher";
import SectionAllotment from "../Components/sectionAllotment";
import Modal from '@material-ui/core/Modal';
import * as colors from '../colors';
function Teachers(props) {
  const [state, setState] = useState({
    showTable: true,
    addTeacherForm: false,
    uploadTeacher:false,
    closePopup:true,
  });
//   var newTeacher=null;
  const [teacher,setTeacher]=useState({
    name:"",
    department:"",
    username:"",
    img:"",
    sections:[]
  })
  useEffect(()=>{
    async function callUploadTeacherAPI(){
        const newTeacher={
            name:teacher.name,
            department:teacher.department,
            username:teacher.username,
            password:teacher.username,
            profile:"teacher",
            dp:teacher.img[0].base64,
            sections:teacher.sections,
        }
        const uploadRes=await uploadTeacher(newTeacher);
        if(uploadRes){
            setTeacher({name:"",
            department:"",
            username:"",
            img:"",
            sections:[]});
            setState({...state,uploadTeacher:false});
            // newTeacher=null;
        }
    }
    if(state.uploadTeacher){
        callUploadTeacherAPI();
    }
  },[state.uploadTeacher])
  function closePopup(){
    setState({...state,closePopup:!state.closePopup})
  }
  function addSections(section, subCode, subName){
    // state.sections
    const newSection=[section,subCode,subName]
    console.log(newSection);
    teacher.sections.push(newSection);
    // setTeacher({...teacher,sections:sections})
  }
  function showTeacherForm() {
    console.log("here");
    setState({ ...state, addTeacherForm: true, showTable: false });
  }
  function handleChange(e){
    const obj=e.target;
    // console.log(teacher);
    setTeacher({...teacher,[obj.name]:obj.value})
  }
  function handleClick(e){
    const name=e.target.getAttribute("name");
    if(name==="deleteSection"){
      const val=e.target.getAttribute("value");
      teacher.sections.splice(val,1);
      setState({...state});
    }
    if(name==="submit"){
         
        // console.log(newTeacher);
        setState({...state,uploadTeacher:true})
    }
    if(name==="cancel"){
        setState({ ...state, addTeacherForm: false, showTable: true });
    }
  }
  return (
    <>
    {console.log(teacher.sections)}
      <div style={{ margin: "2rem", color: "#DDE1E9" }}>
        <div style={{ marginBottom: "3rem" }}>
          <h3 style={{ marginBlockStart: "0.6em", marginBlockEnd: "0em" }}>
            Teachers
          </h3>
          <div style={{ color: "#43C6A2", fontSize: "14px" }}>
            description about teachers
          </div>
        </div>
        {state.showTable && <TeachersTable showTeacherForm={showTeacherForm} />}
        {state.addTeacherForm&&
        <>
        <button className="btn1" name="cancel" onClick={handleClick} style={{margin:"50px 11% 50px 0",float:"right"  }}>X</button>
        <table 
                 style={{margin:"10% auto",width:"80%",color:"#DDE1E9",background:"#1B2537",
                         boxShadow:"2px 2px 5px 0px black",padding:"2rem 5rem"}} cellSpacing="5px">
                        <tr>
                            <td className='td-label' width="50%">Name</td>
                            <td ><input type="text" width="50%" className="td-unedit" name="name" value={teacher.name} onChange={handleChange}></input></td>
                        </tr>
                        
                        <tr>
                            <td className='td-label'>Department</td>
                            <td ><input className="td-unedit" name="department" value={teacher.department} onChange={handleChange}></input></td>                        </tr>

                        <tr>
                            <td className='td-label'>Username</td>
                            <td ><input className="td-unedit" name="username" value={teacher.username} onChange={handleChange}></input></td>
                        </tr>
                        <tr>
                            <td className='td-label'>Photo</td>
                            <td ><FileBase64 multiple="false" onDone={base64=>setTeacher({...teacher,img:base64})}></FileBase64></td>
                        </tr>
                        <tr>
                            <td className='td-label'>Allotted Sections</td>
                            <td >
                              {teacher.sections.map(i=>{
                                return(
                                  <>
                                  <div style={{display:"inline", padding:"0.1rem 0.1rem 0.1rem 0.7rem", background:"", borderRadius:"0.2rem",margin:"0 0.2rem", boxShadow:"1px 1px 3px 0px black"}}>
                                    {i[0]+" "+i[1]}
                                    <button name="deleteSection" value={i} style={{background:"none", border:"0",verticalAlign:"middle",margin:"0 0 0.4rem 0",color:"grey"}} onClick={handleClick}>x</button>
                                  </div>
                                  </>
                                );
                              })}
                              <button className="btn2" onClick={()=>setState({...state,closePopup:false})}>+</button></td>
                        </tr>
                    </table>
                    <Modal
        onClose={closePopup}
        open={!state.closePopup}
        style={{
          position: 'absolute',
          // border: '2px solid #000',
          backgroundColor:colors.lightblue,
          // boxShadow: '2px solid black',
          width:"fit-content",
          height:"fit-content",
          margin: 'auto',
          color:colors.white,
          // fontWeight:"1rem"
        }}
      >
         <SectionAllotment addSections={addSections} />
      </Modal>
                    <button className="btn1" name="submit" onClick={handleClick}>Add</button>
        </>}
      </div>
    </>
  );
}
export default Teachers;
