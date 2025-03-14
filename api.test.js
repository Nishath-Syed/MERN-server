//serve->api.test.js
const fetchData=require('./test/api');
//const fetch = require('node-fetch');
//npm install node-fetch
//jest.mock('node-fetch');

test('GET /users api data',async()=>{
    const data = await fetchData();
    console.log(data);
    expect(data).toHaveProperty('getAllUsers');
    //test if all data has 4 params
    data.getAllUsers.forEach(user=>{
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('name');
        expect(user).toHaveProperty('email');
    })
})
