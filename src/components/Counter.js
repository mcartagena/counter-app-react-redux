import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  // code here
	event() {
		setTimeout(() => {
				this.props.onIncrement()
		}, 1000)
	}
	render() {
		return (
			<div >
				<p>Clicked: {this.props.value} times</p>
				<button
					onClick={this.props.onIncrement}
				>
					+
				</button>
				<button
					onClick={this.props.onDecrement}
				>
					-
				</button>
				<button
					onClick={this.props.value%2===0?this.props.onDecrement:this.props.onIncrement}
				>
					Increment if odd
				</button>
				<button
					onClick={this.event.bind(this)}
				>
					Increment if async
				</button>        
			</div>
		)
	}  
}

Counter.propTypes = {
  value: PropTypes.number.isRequired, 
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired
}

export default Counter