import React from 'react';
import './style.css';
function Profile(props){
    const user=props.user;
    return(
        <>
            <div style={{color:"#DDE1E9",margin:"30px"  }}>
                <div>
                <h2 style={{textAlign:"center"}}>PROFILE</h2>
                </div>
                <div style={{width:"80vh",backgroundColor:"",display:"", margin:"20px auto",background:""}}>
                    <table style={{width:"70vh"}} cellSpacing="5px">
                        <tr>
                            <td className='td-label'>Name</td>
                            <td className="td-unedit">{user.name}</td>
                        </tr>
                        <tr>
                        <td className='td-label'>Roll No.</td>
                            <td className='td-unedit'>{user.roll}</td>
                        </tr>
                        <tr>
                            <td className='td-label'>Status</td>
                            <td className='td-unedit'>Regular</td>
                        </tr>
                        <tr>
                            <td className='td-label'>Department</td>
                            <td className='td-unedit'>{user.department}</td>
                        </tr>
                        <tr>
                            <td className='td-label'>Year</td>
                            <td className='td-unedit'>{user.year}</td>
                        </tr>
                        <tr>
                            <td className='td-label'>Section</td>
                            <td className='td-unedit'> {user.section}</td>
                        </tr>
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