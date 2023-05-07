import axios from "axios";
import url from "../vars/url";
async function getStudents(){
    var user=null;
    await axios.get(url+"/getStudents")
    .then(res=>{
        console.log(res.data.students);
        user=res.data.students;
    })
    .catch(err=>{
        console.log(err);
    })
    return user;
}
export default getStudents;