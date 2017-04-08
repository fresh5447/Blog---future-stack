import React from 'react'

const wrapWith = ({ backgroundColor, padding }) => BaseComponent => props => (
  <div style={{backgroundColor, padding}}>
    <BaseComponent {...props} />
  </div>
)


// export default injectSheet(styles)(ButtonHOC)
export default wrapWith
