import React, { Component } from 'react'

class WeatherInput extends Component {
	
	render() {
		var bannerImageStyle = {
			background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("./img/banner.jpg")'
		}
		return (
			<div className="WeatherInput" style={bannerImageStyle}>
				<div className="col-md-4 offset-md-8">
					<div className="input-group">
						<div className="input-group-prepend">
							<span className="input-group-text" id="basic-addon1">City/Town <i className="fas fa-home"></i></span>
						</div>
						<input
							className="form-control"
							type="text"
							placeholder="Search here..."
							onChange={this.props.handleWeatherInput}
							value={this.props.query}
						/>
					</div>
					<div className="input-group">
						<div className="input-group-prepend">
							<span className="input-group-text" id="basic-addon1">Country <i className="fas fa-globe-europe"></i></span>
						</div>
						<select onChange={this.props.handleCountryQuery} value={this.props.countryQuery}>
								<option>Great Britain</option>
								<option>Brazil</option>
								<option>China</option>
								<option>France</option>
								<option>Germany</option>
								<option>United States</option>
						</select>
					</div>
				</div>
				<div className={"search-result-container " + (this.props.fade ? 'fade-in' : '')}>
					{this.props.searchResult}
				</div>
			</div>
		)
	}
	
}

export default WeatherInput