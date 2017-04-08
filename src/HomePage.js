import React from 'react'
import injectSheet from 'react-jss'

import buttonHOC from './HOC/button'

const styles = {
  container: {
    marginLeft: '10%',
    marginRight: '10%',
    padding: '10%',
    backgroundColor: '#ecf0f1'
  }
}

const LargeBtn = (props) => (
  <h3> { props.children } </h3>
)

const btnEnhancer = buttonHOC({
  backgroundColor: 'orange',
  padding: 20,
  color: 'red',
  fontSize: '32px'
})


function HomePage({ classes }) {
  const OrangeButton = btnEnhancer(LargeBtn)
  return (
    <div className={classes.container}>
      <h2> ☢ Blog ☢ </h2>
      <OrangeButton> Click Me </OrangeButton>
    </div>
  )
}

export default injectSheet(styles)(HomePage);
