import React, { Component } from 'react'

class WeatherDay extends Component {
	
	render() {
		return (
			<div className="container">
				<div className="WeatherDayList">
					{this.props.forecast.length !== 0 &&
						this.props.forecast.map(WeatherDay => {
									return (
										<div key={WeatherDay.day} className="WeatherDay">
											<h2>{WeatherDay.day}</h2>
											<p>Type: {WeatherDay.weatherType}</p>
											<p>Min: {WeatherDay.minTemp}°C</p>
											<p>Max: {WeatherDay.maxTemp}°C</p>
										</div>
									)
						})
					}
				</div>
			</div>
		)
	}
	
}

export default WeatherDay;