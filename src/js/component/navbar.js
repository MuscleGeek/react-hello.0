import React from "react";
import PropTypes from "prop-types";

export const navBar = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
			<div className="container">
				<a className="navbar-brand" href={props.brandLink}>
					<img src={props.navImg} alt="" />
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
								{props.namelink1}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href={props.navLink2}>
								{props.namelink2}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href={props.navlink3}>
								{props.namelink3}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href={props.navlink4}>
								{props.namelink4}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

navBar.propTypes = {
	brandLink: PropTypes.string,
	navImg: PropTypes.string,
	navLink1: PropTypes.string,
	namelink1: PropTypes.string,
	navLink2: PropTypes.string,
	namelink2: PropTypes.string,
	navlink3: PropTypes.string,
	namelink3: PropTypes.string,
	navlink4: PropTypes.string,
	namelink4: PropTypes.string
};
