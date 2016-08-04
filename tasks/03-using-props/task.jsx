/*************************************************************
 *
 *    Task 3: Using props
 *    An introduction to rendering props passed to a component
 *
 *    - In the Bio component:
 *      - Display the 'name' prop in an h1
 *      - Display the 'age' prop in an h2
 *      - Show each of the items in 'interests' in a UL
 *
 *************************************************************/

// dependencies
import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import 'mocha!./tests'

// bio component
const Bio = React.createClass({
  propTypes: {
    name: PropTypes.string,
    age: PropTypes.number,
    interests: PropTypes.array
  },
  
  renderInterests () {
      const { interests } = this.props;
      return (
        
            interests.map(function(interest, i) {
                return <li key={i}>{interest}</li>
            })
        
      )
  },

  render() {
      const {name, age, interests } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <ul>
            <li>{interests[0]}</li>
            <li>{interests[1]}</li>
            <li>{interests[2]}</li>	
        </ul>
        <ul>
        {this.renderInterests()}
        </ul>
      </div>
    )
  }
})

// application component
const App = React.createClass({

  render() {
    return <Bio name="John" age={45} interests={['cycling', 'food', 'web']} />
  }

})


// render the application
render( <App/>, document.getElementById('app') )
