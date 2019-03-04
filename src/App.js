import React, { Component } from 'react';
import WeatherInput from './WeatherInput'
import WeatherDay from './WeatherDay'
import API_KEY from './API_KEY'
import Footer from './Footer'

class App extends Component {
		
	constructor(props) {
		super(props)
		/*var start = new Date.UTC()
		start.setHours(0,0,0,0)
		console.log(start)*/
		this.state = {
			weather: "",
			query: "",
			currentCity: "Search a town...",
			currentDate: (new Date()).setHours(23,59,59,0)/1000,
			forecast: ""
		}
	}
	
	getCityWeather = () => {
		fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + this.state.query + ",uk&units=metric&appid=" + API_KEY.key)
			.then(response => response.json())
			.then(
				//success
				response => this.setState({
					weather: response,
				}, this.createForecast)
			)
	}
	
	handleWeatherInput = e => {
		this.setState({query: e.target.value}, this.getCityWeather)
	}
	
	createForecast = () => {
		let days = []
		if (this.state.weather.cod ==='200') {
				
			// create forecast object schema
			
			for (let i = 0; i < 5; i++) {
				days.push({day: "", weatherType: "", minTemp: "N/A", maxTemp: "N/A"})
			}
			
			let currentDayIndex = 0;
			let weatherTypeList = []
			let weatherList = this.state.weather.list
			for (let i = 0; i < weatherList.length; i++) {
				
				// set day of the week index and mos common weather type
				if (weatherList[i].dt > this.state.currentDate + 86400*currentDayIndex) {
					days[currentDayIndex].weatherType = this.findMostCommonString(weatherTypeList)
					weatherTypeList = []
					currentDayIndex++
					if (currentDayIndex > 4) break
				}
				
				// set day name
				days[currentDayIndex].day = this.dayToString(new Date(weatherList[i].dt*1000).getDay())
				
				// gather weather types
				weatherTypeList.push(weatherList[i].weather[0].description)
				
				// set minimum temp
				if (weatherList[i].main.temp_min < days[currentDayIndex].minTemp ||
					days[currentDayIndex].minTemp === "N/A") {
						days[currentDayIndex].minTemp = weatherList[i].main.temp_min
						
				}
				
				// set maximum temp
				if (weatherList[i].main.temp_max > days[currentDayIndex].maxTemp ||
					days[currentDayIndex].maxTemp === "N/A") {
						days[currentDayIndex].maxTemp = weatherList[i].main.temp_max
						
				}
				
			}
			
		}
		
		this.setState({forecast: days})
		
	}
	
	dayToString = n => {
		switch(n) {
			case 0: return "Sunday"
			case 1: return "Monday"
			case 2: return "Tuesday"
			case 3: return "Wednesday"
			case 4: return "Thursday"
			case 5: return "Friday"
			case 6: return "Saturday"
			default: return null
		}
	}
	
	findMostCommonString = strings => {
		return strings.sort((a,b) =>
			strings.filter(v => v===a).length
			- strings.filter(v => v===b).length
		).pop();
	}
	
	render() {
		let searchResult
		
		if(this.state.weather.cod === '200') {
			searchResult = <h1 className="display-3">{this.state.weather.city.name + ", UK"}</h1>
		} else if (this.state.weather.cod === '404') {
			searchResult = <h3>No results found...</h3>
		} else {
			searchResult = <h3>Please search for a town...</h3>
		}
		
		return (
			<div>
					<WeatherInput
						handleWeatherInput={this.handleWeatherInput}
						searchResult={searchResult}
						query={this.state.query}
					/>
					
					<WeatherDay	forecast={this.state.forecast} />
					
					<Footer />
					
			</div>
		)
	}
  
}

export default App;
