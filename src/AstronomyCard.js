import React from 'react';

const AstronomyCard = (props) => {
		const { title, url, hdurl, explanation, date, copyright } = props.data;

		return (
				<div className="astronomy-card">
						<h6 className="astronomy-title">{title}</h6>
						<img src={url} alt={title} />
				</div>
		)
}

export default AstronomyCard;