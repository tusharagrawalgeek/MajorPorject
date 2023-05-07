import axios from "axios";
import url from "../vars/url";
async function getTeachers(){
    var user=null;
    await axios.get(url+"/getTeachers")
    .then(res=>{
        console.log(res.data.teachers);
        user=res.data.teachers;
    })
    .catch(err=>{
        console.log(err);
    })
    return user;
}
export default getTeachers;