const {ApolloServer} = require('apollo-server')
const moongose = require('mongoose')
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'typeDefs.gql')
const typeDefs = fs.readFileSync(filePath, 'utf-8')
const resolvers = require('./resolvers')

require('dotenv').config({path: '.env'})
const User = require('./models/User')
const Post = require('./models/Post')

moongose
	.connect(
		process.env.MONGO_URI, {useCreateIndex: true, useNewUrlParser: true})
	.then(() => console.log('DB connected'))
	.catch(err => console.error(err))

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: {
		User,
		Post,
	},
})

server.listen().then(({url}) => {console.log(`Server listening into ${url}`)})
