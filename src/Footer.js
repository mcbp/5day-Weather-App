import React, { Component } from 'react'

class Footer extends Component {

	render() {
		
		var spanStyle = {
			padding: "0 20px",
		}
		
		return (
			<footer>
				<a href="https://github.com/mcbp"><i class="fab fa-github"></i> mcbp</a>
				<span style={spanStyle}></span>
				<a href="https://openweathermap.org"><i class="fas fa-cloud"></i> made with OpenWeatherMap API</a>
			</footer>
		)
		
	}
}

export default Footer
