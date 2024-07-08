//server>resolvers.js
//to preprocess the queries
//query->to retrieve the data (Exactly what data)
//mutation to update the data
const User = require('./model/userSchema');
//parent
//define our resolvers to execute
const resolvers = {
    Query:{
        getUsers: async(_,{id})=>{
            return await User.findById(id);
        },
        login: async (_, { email, password }) => {
            const user = await User.findOne({ email, password });
            if (user) {
              return user;
            }
            throw new Error('Invalid email or password');
          }
    },
    Mutation:{
        createUser: async (_,{input})=>{
            const {name,email,password} = input; 
            try{
                if(!name || !email || !password){
                    throw new Error("Please enter all the fields");
                }
                const newUser = new User({name,email,password});
                return await newUser.save();
            }catch(err){throw Error(err);}
        },
        changePass: async (_,{id,password})=>{
            try{
                const userNew=await
                User.findByIdAndUpdate(id,{password:password},{new:true});
                if(!userNew){
                    throw new Error('User not found')
                }
                return userNew;
            }catch(err){throw Error(err);}
            
        },
    },
    User:{
        email:(parent)=>parent.email || '',
        name:(parent)=>parent.name || '',
        password:(parent)=>parent.password || '',
    },
};
module.exports=resolvers;



