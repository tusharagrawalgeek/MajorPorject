import axios from "axios";
import url from "../vars/url";
async function updateMarks(id,marks){
    await axios.put(url+'/updateMarks/'+id,{marks:marks})
    .then(console.log)
    .catch(console.log)
    return true;
}
export default updateMarks;