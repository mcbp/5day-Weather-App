import React, { Component } from 'react'

class WeatherSlideshow extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			images: [
				"%PUBLIC_URL%/img/weather_icon-01.png",
				"%PUBLIC_URL%/img/weather_icon-45.png",
				"%PUBLIC_URL%/img/weather_icon-31.png",
				"%PUBLIC_URL%/img/weather_icon-58.png"
				
			],
			currentIndex: 0,
			slideOut: false
			
		}
	}
	
	startSlideshow = () => {
		setInterval(() => {
			let newIndex
			if (this.state.currentIndex < 3) {
				newIndex = this.state.currentIndex+1
			} else {
				newIndex = 0
			}
			
			this.setState({ slideOut: true })

			
			setTimeout( () => {
				this.updateImage(newIndex)
			}, 500)
			
		}, 2500)
	}
	
	updateImage = newIndex => {
		
		this.setState({ currentIndex: newIndex, slideOut: false })
	}
	
	componentDidMount() {
		this.startSlideshow()
		
	}
	
	render() {
		return (
			<div>
				<img 
					src={this.state.images[this.state.currentIndex]}
					className={(this.state.slideOut ? 'slide-out' : 'slide-in')}
				/>
			</div>
		)
	}
	
}

export default WeatherSlideshow