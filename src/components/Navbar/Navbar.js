import React from 'react';
import './Navbar.css';


const Navbar = () => {
   
	return (
		<nav className="navbar navbar-default" id="navbar-example" role="navigation">
			{ /* Brand and toggle get grouped for better mobile display */ }
			<div className="navbar-header">
				<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
			</div>
			
			{ /* Collect the nav links, forms, and other content for toggling */ }

			<div className="collapse navbar-collapse navbar-ex1-collapse">
				<ul className="nav navbar-nav">
					<li className="active"><a href="#profile">Profile</a></li>
					<li><a href="#experiences">Experiences</a></li>
					<li><a href="#abilities">Abilities</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#contact">Contact</a></li>
					<li style={{'display' : 'none'}}><a href="#cv">CV</a></li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;