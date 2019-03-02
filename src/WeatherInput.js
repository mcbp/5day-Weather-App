import React, { Component } from 'react'

class WeatherInput extends Component {
	
	render() {
		return (
			<div className="WeatherInput">
				<div className="col-md-4 offset-md-8">
					<div className="input-group">
						<div className="input-group-prepend">
							<span className="input-group-text" id="basic-addon1">City/Town</span>
						</div>
						<input
							className="form-control"
							type="text"
							placeholder="Search here..."
							onChange={this.props.handleWeatherInput}
							value={this.props.query}
						/>
					</div>
				</div>
				<div className="search-result-container">
					{this.props.searchResult}
				</div>
			</div>
		)
	}
	
}

export default WeatherInput