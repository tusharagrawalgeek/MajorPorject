function dateFormatUS(date){
    //date incoming in new Date() format
    return date.toLocaleDateString("en-US").toString();

}
export default dateFormatUS;