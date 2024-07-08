//server>routes>userRoute.js
const express = require('express')
const router = express.Router()
const typeDefs = require('../schema');
const resolvers = require('../resolvers');
const {ApolloServer,gql} = require('apollo-server-express');
// localhost:3001/users/register
const server = new ApolloServer({typeDefs,resolvers});
router.post('/register',async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        const {data,error} = await server.executeOperation({
            query:gql`
                mutation{
                    createUser(input:{name:,"${name}",
                    email:"${email}",password:"${password}"}){
                        id name email password
                    }
                
            }`
        });
        if(error){return res.status(500).send({message:error})}
        res.status(201).send(data)
    }catch(err){
        res.status(500).send({message:err})
    }
})
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const { data, errors } = await server.executeOperation({
        query: gql`
          query login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
              id
              name
              email
            }
          }
        `,
        variables: { email, password },
      });
  
      if (errors) {
        return res.status(400).json({ errors });
      }
  
      res.status(200).json(data.login);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
module.exports=router;