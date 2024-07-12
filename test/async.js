// test->async.js
//  how we can perform unit tests on async function
function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },1000);
}
//calls admin after 4 sec
function MyData(callback){
    setTimeout(()=>{
        callback({id:10001});
    },1000)
}
module.exports={fetchData,MyData};