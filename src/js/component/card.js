import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img className="card-img-top" src={props.imgurl} alt="" />
			<div className="card-body">
				<h5 className="card-title">{props.cardTitle}</h5>
				<p className="card-text">{props.cardBody}</p>
				<a href={props.btnUrl} className="btn btn-primary">
					{props.btnInfo}
				</a>
			</div>
		</div>
	);
};
Card.propTypes = {
	imgurl: PropTypes.string,
	cardTitle: PropTypes.string,
	cardBody: PropTypes.string,
	btnUrl: PropTypes.string,
	btnInfo: PropTypes.string
};
