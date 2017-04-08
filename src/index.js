import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import Topics from './Topics'
import Home from './HomePage'
import NavBar from './NavBar'
import About from './About'
import Posts from './PostsPage'
import NewPost from './NewPostPage'

const networkInterface = createNetworkInterface({ uri: process.env.REACT_APP_GRAPHQL_ENDPOINT })

// The x-graphcool-source header is to let the server know that the example app has started.
// (Not necessary for normal projects)
networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      // Create the header object if needed.
      req.options.headers = {}
    }
    req.options.headers['x-graphcool-source'] = 'example:react-apollo-todo'
    next()
  },
}])

const client = new ApolloClient({ networkInterface })


ReactDOM.render((
  <ApolloProvider client={client}>
    <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/posts" component={Posts}/>
      <Route path="/new-post" component={NewPost}/>
      </div>
    </Router>
  </ApolloProvider>
),document.getElementById('root'));
