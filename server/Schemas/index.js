const graphql=require('graphql')
const {GraphQLObjectType,GraphQLSchema,GraphQLInt,GraphQLString, GraphQLList}=graphql
const userData=require("../Mock_Data.json")

const userType=require("./TypeDef/UserType")

const RootQuery=new GraphQLObjectType({
    name:"RootQuery",
    fields:{
        getAllUser:{
            type:new GraphQLList(userType),
            args:{
                id:{type:GraphQLInt}
            },
            resolve(parent,args){
                return userData
            }
        },
    }
})
const Mutation = new GraphQLObjectType({
    name:"Mutation",
    fields:{
        createUser:{
            type:userType,
            args:{
                firstName:{type: GraphQLString},
                lastName:{type:GraphQLString},
                email:{type: GraphQLString},
                password:{type: GraphQLString}
            },
            resolve(parent,args){
                userData.push({id:userData.length+1,firstName:args.firstName,lastName:args.lastName,email:args.email,password:args.password});
                return args;
            }
        }
    }
})
module.exports=new GraphQLSchema({query: RootQuery,mutation: Mutation})