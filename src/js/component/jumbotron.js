import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = props => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">{props.Title}</h1>
			<p className="lead mt-2">{props.p1}</p>
			<hr className="my-4" />
			<p>{props.p2}</p>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					style={{ color: "white" }}
					href={props.aLink}
					role="button">
					{props.linkInfo}
				</a>
			</p>
		</div>
	);
};

Jumbotron.propTypes = {
	Title: PropTypes.string,
	p1: PropTypes.string,
	p2: PropTypes.string,
	aLink: PropTypes.string,
	linkInfo: PropTypes.string
};
