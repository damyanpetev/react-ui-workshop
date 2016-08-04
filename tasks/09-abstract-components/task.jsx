/*************************************************************
 *
 *    Task 9: Abstract Components
 *    Seperating concerns making components reusable
 *
 *    - Create an AbstractInput component containing an input
 *      and optional error
 *    - onBlur validate that the value is an integer and if validation
 *      fails show the error
 *    - Create 2 branded components that wrap this ( use the
 *      classes in the css files )
 *    - Add one of each component to the app
 *
 *    Finished early?
 *    - Try delegating all state up to the application
 *
 *************************************************************/

// dependencies
import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import classNames from 'classnames'
import 'mocha!./tests'
import './brand-a.css'
import './brand-b.css'

const AbstractInput = React.createClass({
    propTypes:{
        className: PropTypes.string
    },
    
    getInitialState() {
        return {
            hasError: true
        }
    },
    
        
    getDefaultProps: function() {
        return {
            error: "Error"
        };
    },
    
    validate (e) {
        console.log(e.target.value);
        if(isNaN(parseInt(e.target.value))) {
            this.setState({hasError: false});
        } else {
            this.setState({hasError: true});
        }
    },
    
    render() {
        const classes = classNames({
        "error": !this.state.hasError
        })
        return (
            <div className={this.props.className}>
                <input type="text" onBlur={this.validate} className={classes}/>
                <span hidden={this.state.hasError}>{this.props.error}</span>
            </div>
        )
    }
})

const BrandAInput = React.createClass({
    render() {
        return (
            <AbstractInput className="brand-a-input">
            </AbstractInput>
        )
    }
})

const BrandBInput = React.createClass({
    render() {
        return (
            <AbstractInput className="brand-b-input">
            </AbstractInput>
        )
    }
})

// application component
function App() {
  return (
    <div>
        <BrandAInput />
        <BrandBInput />
    </div>
  )
}


// render the app
render(<App />, document.getElementById('app'))
