import axios from "axios";
import url from "../vars/url";
async function uploadStudent(body){
    var res=null;
    await axios.post(url+"/uploadStudent",body)
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
export default uploadStudent;