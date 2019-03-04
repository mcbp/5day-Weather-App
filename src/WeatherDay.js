import React, { Component } from 'react'
import WeatherImage from './WeatherImage'

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
											<WeatherImage weatherType={WeatherDay.weatherType} />
											<p>{WeatherDay.weatherType}</p>
											<div className="tempContainer">
												<p>
													<span>{Math.round(WeatherDay.minTemp)}°C</span>
													<span> | </span>
													<span>{Math.round(WeatherDay.maxTemp)}°C</span>
												</p>
											</div>
										</div>
									)
						})
					}
					{this.props.forecast.length === 0 &&
						<div className="WeatherDayListNoResults">
							<div className="WeatherDayNoResults"><h4>F1</h4></div>
							<div className="WeatherDayNoResults"><h4>F2</h4></div>
							<div className="WeatherDayNoResults"><h4>F3</h4></div>
							<div className="WeatherDayNoResults"><h4>F4</h4></div>
							<div className="WeatherDayNoResults"><h4>F5</h4></div>
						</div>
					}
				</div>
			</div>
		)
	}
	
}

export default WeatherDay;