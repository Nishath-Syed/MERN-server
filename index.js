const express = require('express');
const mongoose =require('mongoose');
const {ApolloServer,gql}=require('apollo-server-express');
const typeDefs=require('./schema');
const resolvers = require('./resolvers');
const cors = require('cors')
const userApiFromRouter = require('./routes/userRoute')
const app=express();
const port=3001
const url='mongodb+srv://nishathsyed95:eoRuAInb10WR2yVK@cluster0.mqnk1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
app.use(express.json())  //parsing
app.use(cors()) // using cors
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)});
//start my apollo Express server
const server = new ApolloServer({typeDefs,resolvers});
app.use('/users',userApiFromRouter);
/*app.get('/users', async (req,res)=> {
    try {
        const {data,errors} = await server.executeOperation({
            query:gql`query{
            getUsers{
            name email
            }
            }`//we will write out queries here
        });
        if(errors) {
            res.status(500).send({errors});
        }
        res.status(201).send(data)

    }catch(err) {
        res.status(500).send({message:err})

    }
})

app.get('/users/search/:name',async (req,res)=> {
    try{
        const name = req.params.name;
        const {data,error} = await server.executeOperation({
            query:gql`query{ searchUsers(name:${name}){id name email}}`
        });
        if(error) {
            res.status(500).send({error});
        }
        res.status(201).send(data)
    }
    catch(err) {
        res.status(500).send({message:err})
         
    }
})
app.post('/users',async(req,res)=>{
    const {name,email,password}=req.body;
    try{
        const {data,error}=await server.executeOperation({
            query:gql`mutation{ 
                createUser(input:{name:${name},email:${email},password:${password}}){
                    id
                    name
                    email
                    }
                }`
        });
        if(error){return res.status(500)}
    }catch(err){
        res.status(500).send(err);
    }
})*/

async function StartServer() {
    await server.start();
    server.applyMiddleware({app});  //run my express code
    app.listen(port,()=> {
        console.log('Server live');
    })
}
function Testing(){
    return 0;
}
Testing();
StartServer();
