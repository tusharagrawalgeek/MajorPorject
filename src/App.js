import './App.css';
import Starter from './Starter.jsx';
import React, { useState } from 'react';
import Login from './Login';
import HomePage from './HomePage';
import HomePage2 from './HomePage2';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Attendance from './Attendance';
import axios from 'axios';
import Modal from './Modal';
// import {Routes,Route} from ''
// const click=false;
function App(){
    const [state, setState]=useState({
      user:null,
      apiSent:false,
      showMessage:false,
        message:"",
        messageType:""
    });
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
    function setUser(u){
      var user;
        axios.get('http://localhost:3001/')
        .then(response=>{
            // console.log(response.data)
           var found= response.data.some(i=>{
                if(i.username===u.id){
                    console.log("Id matched");
                    if(i.pass===u.pass){
                        // user=i;
                        console.log("pswd matched");
                        console.log(i);
                        setState(prev=>{
                            return({
                                ...prev,
                                // userMatched:true,
                                user:i
                            });
                        })
                        return true;
                    }else{
                        console.log("But pswd doesn't match");
                        return false;
                    }    
                }
            })
            if(!found){
              console.log("User does not exist");
            }
            return found;
            
        })
        .catch(err=>{
            console.log(err);
            setState(prev=>{
              console.log(err.message)
              return({
                  ...prev,
                  message:err.message+" occurred",
                  showMessage:true,
                  messageType:"error"
              });
          });
        })
        
      // console.log(u);
      // setState({user:u});
      // console.log(state.user);
      // window.location='/HomePage';
    }
    
    
    if(state.user!==null&&!state.apiSent){
      const url="http://localhost:3001/user"
        console.log("sending data");
          console.log(state.user);
            axios.post(url,state.user)
            .then(response=>{
              // console.log(response);
              if(response.data==='OK')
                setState(prev=>{
                  return({
                    ...prev,
                    apiSent:true
                  });
                })
                console.log(response)
            })
            .catch(err=>{
                console.log(err)
                setState(prev=>{
                  console.log(err.message)
                  return({
                      ...prev,
                      message:err.message+" occurred",
                      showMessage:true,
                      messageType:"error"
                  });
              });
            })
      // console.log(state.user);
      
      
    }
    const chunk={
      name:"Sonali"

    }
    if(state.apiSent===true){
      if(state.user.username==="teacher"){
        window.location='/HomePage2'
      }else
      window.location='/HomePage'
    }
    return(
      <>
      {display()}
      {/* {console.log(state.user)} */}
      <Routes>
        <Route path='/HomePage' element={<HomePage/>}/>
        <Route path='Starter' element={<Starter/>}/>
        <Route path='HomePage2' element={<HomePage2/>}/>
        <Route path='/' element={<Login setUser={setUser} user={state.user}/>}/>
      </Routes>
      </>
    );
}
export default App;
