/*************************************************************
 *
 *    Task 8: Stepper Component
 *    A form field where the value can be increased and
 *    decreased via + and - buttons
 *
 *    - Use this.state.value to add this
 *    - Add an onClick listener to the - button to decrease
 *      the state value by 1 using this.setState()
 *    - Add an onClick listener to the + button to increase
 *      the state value by 1 using this.setState()
 *
 *    Finished early?
 *    - Use props/defaultProps to add upper & lower limit of
 *      minus 10 and 10
 *    - Make the increment variable via props
 *
 *************************************************************/


// dependencies
import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import 'mocha!./tests'
import './stepper.css'

const Stepper = React.createClass({
  propTypes: {
    increment: PropTypes.number  
  },
  getDefaultProps: function() {
    return {
      min: -10,
      max: 10
    };
  },
  getInitialState() {
    return {
      value: 0
    }
  },
  
  increase () {
       if (this.state.value + 1 <= this.props.max) {
        this.setState({ value : ++this.state.value });  
       }
  },
  
  decrease  () {
      if (this.state.value - 1 >= this.props.min) {
        this.setState({ value : --this.state.value }); 
      } 
  },

  render() {
    return (
      <div className="component-stepper">
        <button onClick={this.decrease}>-</button>
        <input readOnly value={this.state.value}/>
        <button onClick={this.increase}>+</button>
      </div>
    )
  }

})

// application component
function App() {
  return <Stepper />
}


// render the app
render(<App />, document.getElementById('app'))
