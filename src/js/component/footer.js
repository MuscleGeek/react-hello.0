import React from "react";
import PropTypes from "prop-types";

export const Footer = props => {
	return (
		<footer className="bg-dark text-center text-lg-start">
			<div
				className="text-center p-3"
				style={{ background: "rgba(0, 0, 0, 0.2)" }}>
				{props.fooCopy}
				<a className="text-dark" href={props.fooLink}>
					{props.fooText}
				</a>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	fooCopy: PropTypes.string,
	fooLink: PropTypes.string,
	fooText: PropTypes.string
};
