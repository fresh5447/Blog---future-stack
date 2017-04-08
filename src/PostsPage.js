import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import injectSheet from 'react-jss'

import Post from './Post'

const styles = {
  container: {
    marginLeft: '10%',
    marginRight: '10%',
    padding: '10%',
    backgroundColor: '#ecf0f1'
  }
}

@injectSheet(styles)
class PostsPage extends React.Component {

  state = {
    posts: undefined
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.data.refetch()
    }
  }

  render() {
    if (this.props.data.loading) {
    return (
      <div>
        <div>
          Loading
        </div>
      </div>
    )
  }
  const d = this.props.data.allPosts
    return (
      <div>
        <h1>MyComponent</h1>
        <h1>{ d.map(item => <Post {...item} />) } </h1>
      </div>
    );
  }
}

const allPostsQuery = gql`
  query allPosts {
    allPosts {
      imageUrl
    	description
      content
      title
    }
  }
`
const PostsPageWithData = graphql(allPostsQuery)(PostsPage)
export default PostsPageWithData
