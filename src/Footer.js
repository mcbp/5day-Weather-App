import React, { Component } from 'react'

class Footer extends Component {

	render() {
		
		var spanStyle = {
			padding: "0 20px",
		}
		
		return (
			<footer>
				<a href="https://github.com/mcbp"><i className="fab fa-github"></i> mcbp</a>
				<span style={spanStyle}></span>
				<a href="https://openweathermap.org"><i className="fas fa-cloud"></i> made with OpenWeatherMap API</a>
			</footer>
		)
		
	}
}

export default Footer
