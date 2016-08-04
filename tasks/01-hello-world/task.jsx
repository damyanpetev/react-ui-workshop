/*************************************************************
 *
 *    Task 1: Hello World
 *    An introduction to React, JSX and the ES6
 *
 *    - Add a render function to the App component
 *    - Add an h1 with the text "Hello World"
 *
 *************************************************************/


// dependencies
import React from 'react'
import { render } from 'react-dom'
import 'mocha!./tests'

// application component
const App = React.createClass({
	render: function() {
		return <h1> "Hello World" </h1>;
	}
})


// render the application
render( <App />, document.getElementById('app') )
