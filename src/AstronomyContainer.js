import React, { Component } from 'react';
import AstronomyCard from './AstronomyCard';
import axios from 'axios';

class AstronomyContainer extends Component {
		render() {
				const { astronomy } = this.state;
				return (
						<AstronomyCard data={astronomy} />
				)
		}
		constructor() {
				super();

				this.state = {
						astronomy: []
				}
		}

		componentDidMount() {
				const API_KEY ='?api_key=DEMO_KEY';
				const END_POINT = 'https://api.nasa.gov/planetary/apod'

				axios.get(END_POINT+API_KEY)
						.then(response => {

								this.setState({
										astronomy: response.data
								})

								console.log(response)
						})
						.catch(error => {
								console.log(error)
						})
		}
}

export default AstronomyContainer;