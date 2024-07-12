const mongoose = require('mongoose')

describe('MongoDB connected',()=>{
    beforeAll(async ()=>{
        const url='mongodb+srv://nishathsyed95:eoRuAInb10WR2yVK@cluster0.mqnk1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        await mongoose.connect(url);
    });
    //call test case inside describe and below beforeAll
    test('MongoDB connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1)
    })
});
