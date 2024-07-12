//server->test->api.js
async function fetchData(){
    return {getAllUsers:[{
        "id": "1",
        "name": "Qiao Li",
        "email": "qiaoli@gmail.com",
        "password": "qiaoli#123"
    }]}
};
module.exports=fetchData;