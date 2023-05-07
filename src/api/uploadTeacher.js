import url from "../vars/url";
import axios from "axios";
async function uploadTeacher(body){
    var res=null;
    await axios.post(url+"/uploadTeacher",body)
    .then(resp=>{
        console.log(resp);
        res=true;
        // user=res.data.user;
    })
    .catch(err=>{
        console.log(err);
        res=false;
    })
    return res;
}
export default uploadTeacher;