function searchGeneralGQuery(str,arr){
    var cols=[]
    Object.keys(arr[0]).forEach((key) => cols.push(key));
    console.log(cols);
    var res=[]
    arr.map(i=>{
        cols.some((j,ind)=>{
            if(i[j]&&i[j].toString().toUpperCase().split(" ").join("").includes(str.trim().toUpperCase())){
                res.push(i);
                return true;
            }
            return false;
            
        })
    })
    return res;
}
export default searchGeneralGQuery;