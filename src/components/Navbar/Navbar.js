import React from 'react';
import './Navbar.css';
import $ from 'jquery'; // really wanted to avoid jQuery, but I also want a smooth scroll and my scrollTo method isn't doing the trick sadly.
//import Scrollspy from 'react-scrollspy';

const Navbar = () => {

	const handleClick = (e) => {
		e.preventDefault()
		//console.log(e.target)
		let anchor = e.target.hash;
		//console.log(anchor);
		try{
            if(anchor.length > 0 ) {
				if(anchor==='#cv') {
					$('html, body').animate({scrollTop: $(anchor).offset().top}, 400).then($('#past-projects').modal('show'));
				}
				else {
					$('html, body').animate({scrollTop: $(anchor).offset().top}, 400);	
				}
			}
        }catch(e){
        	// it will fail if an anchor can't actually be found (if a fake URL is attempted), 
        	// penelty of mixing jQuery with ReactJS instead of using react-scrollspy.
            console.log('error', e); 
        }

		

		$('.navbar-collapse').removeClass('in').addClass('collapse'); // cell phone fix for styling
		return false;
	};

		// TODO: Someday replace jQuery animate with the below
	    //  const scrollTo = (element, to, duration) => {
		//     if (duration <= 0) return;
		//     var difference = to - element.scrollTop;
		//     var perTick = difference / duration * 10;

		//     setTimeout(function() {
		//         element.scrollTop = element.scrollTop + perTick;
		//         if (element.scrollTop === to) return;
		//         scrollTo(element, to, duration - 10);
		//     }, 10);
		// };

	// $('#navbar-example').on('activate.bs.scrollspy', function() {
	// 	window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
	// });

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
					<li className="active"><a href="#profile" onClick={handleClick}>Profile</a></li>
					<li><a href="#experiences" onClick={handleClick}>Experiences</a></li>
					<li><a href="#abilities" onClick={handleClick}>Abilities</a></li>
					<li><a href="#projects" onClick={handleClick}>Projects</a></li>
					<li><a href="#contact" onClick={handleClick}>Contact</a></li>
					<li style={{'display' : 'none'}}><a href="#cv" onClick={handleClick}>CV</a></li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;