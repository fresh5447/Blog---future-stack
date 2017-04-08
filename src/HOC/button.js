import React from 'react'

const ButtonHOC = ({ backgroundColor, padding, color, fontSize }) => BaseComponent => props => (
  <button style={{backgroundColor, padding, color, fontSize}}>
    <BaseComponent {...props}/>
  </button>

)

export default ButtonHOC
