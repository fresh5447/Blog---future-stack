import React from 'react'

const Post = (props) => (
  <div>
    <h4> {props.title} </h4>
    <p> {props.content} </p>
    <img src={props.imageUrl} role="presentation" />
  </div>
)

export default Post
