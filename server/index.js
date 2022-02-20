const express=require('express');
const app=express();
const Port=3030;
const {graphqlHTTP}=require('express-graphql')

const schema=require("./Schemas/index")
const cors=require("cors")
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true
    })
)
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true,
}))

app.listen(Port,()=>{
    console.log("Server is running")
})