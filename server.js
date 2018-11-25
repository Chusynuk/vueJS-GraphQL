const { ApolloServer }  = require ('apollo-server');
const moongose = require('mongoose');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'typeDefs.gql');
const typeDefs = fs.readFileSync(filePath, 'utf-8');
const resolvers = require('./resolvers')

require('dotenv').config({ path: 'variables.env' });
const User = require('./models/User');
const Post = require('./models/Post');

moongose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser : true }
    )
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));


// const todos = [
//     { task: 'Wash car', completed: false},
//     { task: 'Clean room', completed: true}
// ];

// const typeDefs = gql`
//     type Todo {
//         task: String
//         completed: Boolean
//     }

//     type Query {
//         getTodos: [Todo]
//     }

//     type Mutation {
//         addTodo(task: String, completed: Boolean): Todo
//     }
// `;

// const resolvers = {
//     Query: {
//         getTodos: () => todos
//     },
//     Mutation: {
//         addTodo: (_, { task, completed }) => {
//             const todo = { 
//                 task ,
//                 completed
//             };
//             todos.push(todo);
//             return todo;
//         }
//     }
// }

const server = new ApolloServer({
    typeDefs, 
    resolvers,
    context: {
        User,
        Post
    }
});

server.listen().then(({ url }) => {
    console.log(`Server listening into ${url}`); 
});