import React, { Component } from 'react'
import WeatherIcons from './WeatherIcons'

class WeatherImage extends Component {
	
	getFileName = weather => {
		let fileName = ""
		
		switch(weather) {
			
			// lightning
			case "thunderstorm with light rain":
			case "thunderstorm with rain":
			case "thunderstorm with heavy rain":
			case "light thunderstorm":
			case "thunderstorm":
			case "heavy thunderstorm":
			case "ragged thunderstorm":
			case "thunderstorm with light drizzle":
			case "thunderstorm with drizzle":
			case "thunderstorm with heavy drizzle":
				fileName = "/img/weather_icon-28.png"; break
			
			// drizzle
			case "light intensity drizzle":
			case "drizzle":
			case "heavy intensity drizzle":
			case "light intensity drizzle rain":
			case "drizzle rain":
			case "heavy intensity drizzle rain":
			case "shower rain and drizzle":
			case "heavy shower rain and drizzle":
			case "shower drizzle":
				fileName = "/img/weather_icon-19.png"; break
			
			
			// rain
			case "light rain":
			case "light intensity shower rain ":
				fileName = "/img/weather_icon-19.png"; break
			case "moderate rain":
			case "heavy intensity rain":
			case "very heavy rain":
			case "extreme rain":
			case "freezing rain":
			case "shower rain":
			case "heavy intensity shower rain":
			case "ragged shower rain":
				fileName = "/img/weather_icon-22.png"; break
				
			// snow
			case "light snow":
			case "snow":
			case "heavy snow":
			case "sleet":
			case "shower sleet":
			case "light rain and snow":
			case "rain and snow":
			case "light shower snow":
			case "shower snow":
			case "heavy shower snow":
				fileName = "/img/weather_icon-31.png"; break
				
			// atmosphere
			case "mist":
			case "smoke":
			case "haze":
			case "sand, dust whirls":
			case "fog":
			case "sand":
			case "dust":
			case "volcanic ash":
				fileName = "/img/weather_icon-39.png"; break
			case "squalls":
			case "tornado":
				fileName = "/img/weather_icon-61.png"; break
				
			// clear
			case "clear sky":
				fileName = "/img/weather_icon-01.png"; break
				
			// clouds
			case "few clouds":
			case "scattered clouds":
			case "broken clouds":
			case "overcast clouds":
				fileName = "/img/weather_icon-16.png"; break

			default:
				fileName = "/img/weather_icon-62.png"; break

		}
		
		return fileName
	}
	
	render() {
		return (
			<div className="WeatherImage">
				<img src={this.getFileName(this.props.weatherType)}/>
			</div>
		)
	}
	
}

export default WeatherImage