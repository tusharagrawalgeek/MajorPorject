import React, { useEffect, useState } from 'react';
import FileBase64 from "react-file-base64";
import axios from 'axios';
import './style.css';
function Profile(props){

    // const user=props.user;
    const [state,setState]=useState(
        {
            user:props.user,
            data:null
        }
    );
    return(
        <>
        {console.log(state.user)}
            <div style={{color:"#DDE1E9",margin:"30px"  }}>
                <div>
                <h2 style={{textAlign:"center"}}>PROFILE</h2>
                </div>
                <div style={{width:"80vh",backgroundColor:"",display:"", margin:"20px auto",background:""}}>
                    <table style={{width:"70vh"}} cellSpacing="5px">
                        <tr>
                            <td className='td-label'>Name</td>
                            <td className="td-unedit">{state.user.name}</td>
                        </tr>
                        <tr>
                        <td className='td-label'>Roll No.</td>
                            <td className='td-unedit'>{state.user.roll}</td>
                        </tr>
                        <tr>
                            <td className='td-label'>Status</td>
                            <td className='td-unedit'>Regular</td>
                        </tr>
                        <tr>
                            <td className='td-label'>Department</td>
                            <td className='td-unedit'>{state.user.department}</td>
                        </tr>
                        <tr>
                            <td className='td-label'>Year</td>
                            <td className='td-unedit'>{state.user.year}</td>
                        </tr>
                        <tr>
                            <td className='td-label'>Section</td>
                            <td className='td-unedit'> {state.user.section}</td>
                        </tr>
                        <tr>
                            <td className='td-label'>Profile</td>
                            <td className='td-unedit'> {state.user.profile}</td>
                        </tr>
                        {/* <tr>
                            <td className='td-label'>Photo</td>
                            <td className='td-unedit'> </td>
                            <button onClick={uploadImage}>Upload</button>
                            <FileBase64 multiple="false" onDone={base64=>setState({...state,data:base64})}></FileBase64>
                        </tr> */}
                    </table>
                {/* </div>
                <div> */}
                    {/* acnkjda */}
                </div>
            </div>
            
        </>
    );
}
export default Profile;