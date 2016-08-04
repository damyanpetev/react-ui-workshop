/*************************************************************
 *
 *    Task 4: Button component styling
 *    Refactoring some mixed button design
 *
 *    - Create a button component
 *    - Use the `children` prop to pass through anything
 *      contained within the tags
 *    - Use the new component-button class
 *    - Replace the current buttons with the new component
 *
 *************************************************************/


// dependencies
import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import 'mocha!./tests'
import './buttons.css'

const Button = React.createClass({
  propTypes: {
      children: PropTypes.string,
      className: PropTypes.string
  },

  render() {
       return <button className="component-button">{this.props.children}</button>
  }
})


// application component
function App() {
  return (
    <div>
      <Button>Close</Button>
      <Button>Submit</Button>
      <Button>What Is This?</Button>
      <Button>Checkout Now</Button>
      <Button>Order Now</Button>
    </div>
  )
}


// render the application
render(<App />, document.getElementById('app'))
