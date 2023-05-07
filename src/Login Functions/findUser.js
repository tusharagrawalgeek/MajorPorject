import axios from "axios";
import url from "../vars/url";
async function findUser(id,pswd){
    var user=null;
    await axios.post(url+"/finduser",{id:id,pswd:pswd})
    .then(res=>{
        console.log(res.data.user);
        user=res.data.user;
    })
    .catch(err=>{
        console.log(err);
    })
    return user;
}
export default findUser;