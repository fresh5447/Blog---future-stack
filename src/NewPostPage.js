import React from 'react'

import injectSheet from 'react-jss'

const styles = {
  container: {
    marginLeft: '10%',
    marginRight: '10%',
    padding: '10%',
    backgroundColor: '#ecf0f1'
  }
}


// function NavBar({ onExpand, expanded = false, children, onSubmit }) {

function NewPostsPage({ classes }) {
  // const formStyle = expanded ? { height: 'auto' } : { height: 0 }
  return (
    <div className={classes.container}>
      <h2> New Post Form </h2>
      <p>Form to make new post will be here</p>
    </div>
  )
}

export default injectSheet(styles)(NewPostsPage);
