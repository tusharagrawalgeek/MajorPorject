import './App.css';
import Starter from './Starter.jsx';
import React, { useState } from 'react';
import Login from './Login';
import HomePage from './HomePage';
import Profile from './Profile';
import HomePage2 from './HomePage2';
import Attendance from './Attendance';
import axios from 'axios';
import Modal from './Modal';
import SubjectsAndFeedback from './SubjectsAndFeedback';
import findUser from './Login Functions/findUser';
import Students from './Students';
import Notices from './Notices';
import Marks from './Marks';
import Documents from './Documents';
import HostelDocuments from './HostelDocuments.js';
import FeeDocuments from './FeeDocuments.js';
import Marks2 from './Marks2';
import HomePage3 from './Admin/HomePage3';
import Teachers from './Admin/Teachers';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import RegistrationDocuments from './RegistrationDocuments';
function App(){
    const [state, setState]=useState({
      user:null,
      apiSent:false,
      showMessage:false,
        message:"",
        messageType:""
    });
    const navigate = useNavigate();

    function display(){
      if(state.message){
      setTimeout(
          ()=>setState(prev=>{
              return(
                  {
                      ...prev,
                      message:false
                  }
              )
          }),3000
      )
      return <Modal show={state.showMessage} type={state.messageType} message={state.message}/>
      }
  }
  async function setUser(u){
    const user=await findUser(u.id,u.pass);
    if(user){
      console.log(user);
      setState({...state,user:user})
      navigate("home/profile", {state: {}});
      // return <Redirect to="home/profile"></Redirect>
    }else{
      console.log("Not found");
      alert("User not found");
    }
  }
    return(
      <>
      {console.log(state.user)}
      {/* <Router> */}
        <Routes>
        <Route path="/" element={<Login setUser={setUser} user={state.user}/>} />
        {state.user!=null&&state.user.profile==="student"?
        <>
        <Route path="/home" element={<HomePage user={state.user}/>}>
          <Route path="profile" element={<Profile user={state.user}/>}/>
          <Route path="attendance" element={<Attendance user={state.user}/>}/>
          <Route path="subjectsandfeedback" element={<SubjectsAndFeedback user={state.user}/>}/>
          <Route path="notices" element={<Notices/>}/>
          <Route path="marks" element={<Marks user={state.user}/>}/>
          <Route path="documents" element={<Documents/>}>
          <Route path="registrationDocuments" element={<RegistrationDocuments/>}/>
          <Route path="feeDocuments" element={<FeeDocuments/>}/>
          <Route path="hostelDocuments" element={<HostelDocuments/>}/>
          </Route>
          </Route>
          </>
          :state.user!=null&&state.user.profile==="teacher"?
          <>
          <Route path="/home" element={<HomePage2 user={state.user}/>}>
          <Route path="profile" element={<Profile user={state.user}/>}/>
          <Route path="students" element={<Students user={state.user}/>}/>
          <Route path="marks" element={<Marks2 user={state.user}/>}/>
          </Route>
          </>
          :
          <>
          <Route path="/home" element={<HomePage3 user={state.user}/>}>
          <Route path="profile" element={<Profile user={state.user}/>}/>
          <Route path="teachers" element={<Teachers user={state.user}/>}/>
          {/* <Route path="import" element={<Import/>}/> */}
          {/* <Route path="delete" element={<DeleteOptions/>}/> */}
          {/* <Route path="export" element={<Export/>}/> */}
          </Route>
          </>
        }
        
      </Routes>
      {/* </Router> */}
      </>
    );
}
export default App;
