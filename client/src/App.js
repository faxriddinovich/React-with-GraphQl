import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink, from
} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
// import GetUsers from './Components/GetUsers';
import Forms from './Components/Forms';

const errorLink=onError(({graphqlErrors,networkErrors})=>{
  if (graphqlErrors){
    graphqlErrors.map(({message,location,path})=>{
      return alert(`Graphql error: ${message}`)
    })
  }
})

const link=from([
    errorLink,
    new HttpLink({uri:"http://localhost:3030/graphql"})
])

const client=new ApolloClient({
  cache:new InMemoryCache(),
  link
})

function App() {
  return (
    <ApolloProvider client={client}>
      {" "}
      <Forms/>
    </ApolloProvider>
  );
}

export default App;
