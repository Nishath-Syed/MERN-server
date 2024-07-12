// server->async.test.js
const {fetchData,MyData} = require('./test/async');
test('Callback Data',done=>{
    function callback(data){
        try{
            expect(data).toBe('admin');
            done(); // test case completed
        }catch(error){
            done(error);
        }
    }
    fetchData(callback);
})

test('Callback My Data',done=>{
    function callback(data){
        try{
            expect(data.id).toBe(10001);
            done();
        }catch(err){
            done(err);
        }
    }
    MyData(callback); //call your async func
})
// mock function
test('Mocking callback function',done=>{
    const MockFunction=jest.fn(data=>{
        expect(data).toBe('admin');
        console.log('Mock Function');
        done();
    })
    fetchData(MockFunction);
})