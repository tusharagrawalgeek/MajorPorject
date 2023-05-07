import axios from "axios";
import url from "../vars/url";
async function fetchStudent(classname,subname){
    var user=null;
    await axios.post(url+"/fetchStudents",{class:classname,subject:subname})
    .then(res=>{
        console.log(res.data.students);
        user=res.data.students;
    })
    .catch(err=>{
        console.log(err);
    })
    return user;
}
export default fetchStudent;