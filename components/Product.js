import React from 'react'
import ReactDOM from 'react-dom'

class Product extends React.Component{
	render(){
		return (
			<div>
				<ul>
					<li>{this.props.name}</li>
				</ul>
			</div>
		)
	}
}

Product.defaultProps ={
	hasWatermark: false
}

Product.propTypes={
	name: React.PropTypes.string.isRequired,
	producer: React.PropTypes.string,
	hasWatermark: React.PropTypes.bool,
	color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: customProp 
}

function customProp(props, propertyName ){
	if (props[propertyName] < 80 || props[propertyName] > 300 ){
		return new Error(
		'Weight must be a number between 80 and 300')
	} else if (!props[propertyName]) {
		return new Error('Weight is required')
	} else if (typeof props[propertyName] !== 'number') {
		return new Error ('must be a number!')
	}
	return null
}

export default Product