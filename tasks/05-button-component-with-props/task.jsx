/*************************************************************
 *
 *    Task 5: Button component with props
 *    Refactoring some mixed button design and functionality
 *
 *    - Create a Button component with the .component-button class
 *    - Make the component accept an href prop
 *    - Use the prop to return a button or anchor tag
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
      href: PropTypes.string
  },

  render() {
      if (this.props.href) {
          return <a className="component-button" {...this.props} />
      } else {
          return <button className="component-button">{this.props.children}</button>
      }
  },
})

// application component
function App() {
  return (
    <div>
      <Button>Close</Button>
      <Button type="submit" value="Submit"> </Button>
      <Button className="checkout">Checkout Now</Button>
      <Button href="#back">Take me back!</Button>
    </div>
  )
}


// render the app
render(<App />, document.getElementById('app'))
