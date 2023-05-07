import dateFormatUS from "../functions/dateFormatting";
function searchQuery(str,arr){
    var cols=[]
    Object.keys(arr[0]).forEach((key) => cols.push(key));
    console.log(cols);
    var res=[]
    arr.map(i=>{
        cols.some((j,ind)=>{
             //if ind if 1st element of cols i.e. date which is incoming  in new Date() format and displayed in mm/dd/yyyy
             //cols contains [title,date,doc]
             if(ind===1){
                const date=dateFormatUS(i[j]);
                console.log(date);
                if(date.includes(str.trim())){
                    res.push(i);
                    return true;
                }
             }
            if(i[j]&&i[j].toString().toUpperCase().split(" ").join("").includes(str.trim().toUpperCase())){
                res.push(i);
                return true;
            }
            // }
            return false;
            
        })
    })
    return res;
}
export default searchQuery;