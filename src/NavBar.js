import React from 'react'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'

const styles = {
  navContainer: {
    backgroundColor: '#1abc9c',
    color:          '#2c3e50',
    marginTop:      '0',
    padding:        '20px 20px 20px 20px',
  },
  flexit : {
    display:        'flex',
    justifyContent: 'space-around',
    listStyle: 'none'
  },
  label: {
    fontWeight: 'bold',
    fontSize:   '26px'
  }
}


// function NavBar({ onExpand, expanded = false, children, onSubmit }) {

function NavBar({ classes }) {
  // const formStyle = expanded ? { height: 'auto' } : { height: 0 }
  return (
    <div className={classes.navContainer}>
      <ul className={classes.flexit}>
        <li><Link className={classes.label} to="/">Home</Link></li>
        <li><Link className={classes.label} to="/topics">Topics</Link></li>
        <li><Link className={classes.label} to="/posts">All Posts</Link></li>
        <li><Link className={classes.label} to="/new-post">New Post</Link></li>
      </ul>
    </div>
  )
}

export default injectSheet(styles)(NavBar);
