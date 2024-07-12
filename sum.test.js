// test cases for our unit func sum
const sum=require('./test/sum')

//jest test cases
//test function to test
test('function should return 3',()=>{
    expect(sum(1,2)).toBe(3);
    //toBe() -> exactly equal
    //expect() -> to execute our unit
}) 
// run 'npm test' under server folder
test('Object in array',()=>{
    const data={one:1}
    data['two']=2;
    expect(data).toEqual({one:1,two:2})
})

//toBeNull -> if the received value is null
test('Value is Null',()=>{
    const n=null;
    expect(n).toBeNull();
})
//toBeDefined -> if a value/variable is defined or not
test('Value is Defined',()=>{
    const a=1;
    expect(a).toBeDefined();
})
//toBeTruthy -> received value should be truth
test('Value is Truth',()=>{
    const bool=true;
    expect(bool).toBeTruthy();
})
//toBeFalsy -> received value should be false
test('Value is False',()=>{
    const bool=false;
    expect(bool).toBeFalsy();
})