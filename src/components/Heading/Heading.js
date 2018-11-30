import React from 'react';
import './Heading.css';
import $ from 'jquery'; // really wanted to avoid jQuery, but I also want a smooth scroll and my scrollTo method isn't doing the trick sadly.

const Heading = ({ viewportHeight }) => {
	const handleClick = (e) => {
		e.preventDefault()

		$('html, body').animate({ scrollTop: $("#profile").offset().top }, 400);

		$('.navbar-collapse').removeClass('in').addClass('collapse'); // cell phone fix for styling

		return false;
	};

	return (
		<div id="top" className="jumbotron jumboHeading" data-position="center right" style={{ "height": viewportHeight + 'px' }}>
			<div className="headingContainer container">
				<h1>William Mollenkopf</h1>
				<p className="lead">Programmer | Systems Administrator | 日本語の学生</p>
			</div>
			<div className="overlay"></div>
			<a href="#profile" className="scroll-down" id="scroll-down" onClick={handleClick}>
				<span className="glyphicon glyphicon-chevron-down"></span>
			</a>
		</div>
	);
}

export default Heading;