import React,{useState} from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './style.css';
import HomePage2 from './HomePage2';
import Modal from './Modal';
function Login(props){
    // const btnClass="btn1";
    const [state, setState]=useState({
        btnClass:"btn3",
        id:"",
        pass:"",
        path:"/",
        userMatched:false,
        user:null
    });
    function handleChange(e){
        const obj=e.target;
        // console.log(obj.value+" "+obj.name);
        setState(prev=>{
            return {
                ...prev,
                [obj.name]:obj.value  
            }
        });
        
    }
    function handleapi(){
        
        // return ;
        
        // console.log("Button clicked");
    }
    function handleSubmit(e){
        e.preventDefault();
    }
    function handleMouseOver(){
        setState(prev=>{return {...prev,btnClass:"btn2"}});
    }
    function handleMouseOut(){
        setState(prev=>{return {...prev,btnClass:"btn3"}});
    }
    function check(){
        return ()=>props.setUser("abcd")
    }
    // if(state.userMatched){
    //     // ()=>{
    //         return props.setUser(state.user)
    //     // }
    //     window.location='/HomePage'
    // }
    console.log(props.user);
    // if(props.user!==null){
        // window.location='/HomePage'
        // return;
    // }
    return(
        // {.userMatched&&window.location='/HomePage'}
        <>
        {/* <button onClick={()=>{
            setTimeout(,3000)
        }}> Click me</button> */}
        {/* <Modal message="Added"/> */}
        {/* <div style={{background:"url('./peakpx.jpg')",backgroundRepeat:"no-repeat",zIndex:"-1",width:"100%",height:"100%"}}> */}
            {/* <div style={{zindex:"-1",display:"flex",height:"200vh",width:"100vh"}}>
                <img src='./peakpx.jpg'/>
            </div> */}
        {/* <img width="50%" height="100vh"  src='./peakpx.jpg'></img> */}
        <div>
            <div style={{display:"flex", width:"50%",height:"100vh",zIndex:"2"}} className="blendbg">
            
                <div style={{display:"flex",width:"fit-content",height:"fit-content",margin:"auto",zIndex:"3"}}>
                <form onSubmit={handleSubmit} style={{background:"#141A28",padding:"30px 20px 30px 20px",borderRadius:"10px",boxShadow:"6px 6px 8px 0px black"}}>
                    <input 
                    className="field1"
                        name="id"
                        value={state.id}
                        type="text"
                        onChange={handleChange}
                        style={{margin:"10px 10px 20px 10px"}}
                        placeholder="User ID">
                    </input>
                    <br></br>
                    <input 
                    className="field1"
                        name="pass"
                        value={state.pass}
                        type="password"
                        onChange={handleChange}
                        style={{margin:"10px 10px 20px 10px"}}
                        placeholder="Password">
                    </input>
                    <br></br>
                    <button onClick={()=>{
                        props.setUser({id:state.id,pass:state.pass})
                        }}
                        className={state.btnClass}
                        onMouseOver={handleMouseOver} 
                        onMouseOut={handleMouseOut}
                        style={{display:"flex",margin:"10px auto"}}>
                        <b>
                        Login
                        </b>
                    </button>
                </form>
                </div>
            </div>
        </div>
        </>
    );
}
export default Login;