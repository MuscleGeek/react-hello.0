import React from "react";
import PropTypes from "prop-types";

export const Nav = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top w-100">
			<a className="navbar-brand" href={props.brandLink}>
				<img src={props.navImg} alt="Jonathan's HackTheBox Profile" />
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarResponsive"
				aria-controls="navbarResponsive"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<a className="nav-link" href={props.navLink1}>
							{props.nameLink1}
							<span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href={props.navLink2}>
							{props.nameLink2}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href={props.navLink3}>
							{props.nameLink3}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href={props.navLink4}>
							{props.nameLink4}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

Nav.propTypes = {
	brandLink: PropTypes.string,
	navImg: PropTypes.string,
	navLink1: PropTypes.string,
	nameLink1: PropTypes.string,
	navLink2: PropTypes.string,
	nameLink2: PropTypes.string,
	navLink3: PropTypes.string,
	nameLink3: PropTypes.string,
	navLink4: PropTypes.string,
	nameLink4: PropTypes.string
};
