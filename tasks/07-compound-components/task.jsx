/*************************************************************
 *
 *    Task 7: Compound Components
 *    Understanding how we can build out our design systems
 *    by layering components.
 *    https://facebook.github.io/react/docs/reusable-components.html
 *
 *    - Add the classes from components.css to IconList and IconListItem
 *    - Add a propType to IconList to make it accept an array of
 *      React elements as children and then render them
 *    - Add a propType to IconListItem to accept any children
 *      and render them
 *    - Add an icon propType to IconListItem to accept either 'tick'
 *      or 'cross' and add it as a class
 *
 *    Finished early?
 *    - Make the icon in to a component
 *    - Add some of your own icons
 *
 *************************************************************/


// dependencies
import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import classNames from 'classnames'
import 'mocha!./tests'
import './components.css'

const IconList = React.createClass({
  propTypes: {
      children: PropTypes.arrayOf(PropTypes.instanceOf(IconListItem))
  },
  render() {
    return (
      <ul className="component-icon-list">
            {this.props.children}
      </ul>
    )
  }

})

const IconListItem = React.createClass({
  propTypes: {
      icon: PropTypes.oneOf(["tick", "cross"]),
      children: PropTypes.string
  },
  render() {
    const val = this.props.icon,
    classes = classNames(
      "icon",
      val
    )
    return (
      <li className="component-icon-list-item">
        <i className={classes}/> {this.props.children}
      </li>
    )
  }

})

// application component
function App() {
  return (
    <IconList>
      <IconListItem icon="tick">True</IconListItem>
      <IconListItem icon="cross">False</IconListItem>
    </IconList>
  )
}


// render the app
render(<App />, document.getElementById('app'))
