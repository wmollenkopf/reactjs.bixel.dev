import React from 'react';
import './Heading.css';


const Heading = ({viewportHeight}) => {
    console.log(viewportHeight);

	return (
		<div id="top" className="jumbotron jumboHeading" data-position="center right" style={{"height" : viewportHeight + 'px'}}>
			<div className="container">
				<h1>William Mollenkopf</h1>
				<p className="lead">Programmer | Systems Administrator | 日本語の学生</p>
			</div>
			<div className="overlay"></div>
				<a href="#profile" className="scroll-down">	
					<span className="glyphicon glyphicon-chevron-down"></span>
				</a>
		</div>
	);
}

export default Heading;