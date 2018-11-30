import React, { Component } from 'react';
import './Navibar.css';
import $ from 'jquery'; // really wanted to avoid jQuery, but I also want a smooth scroll and my scrollTo method isn't doing the trick sadly.
//import Scrollspy from 'react-scrollspy';
import { Navbar, Nav, NavItem} from 'react-bootstrap'; //, NavDropdown, MenuItem 

class Navibar extends Component {
	constructor(props) {
		super(props);
		// this.toggleNavbar = this.toggleNavbar.bind(this);
		 this.state = {
		 	collapsed: true,
		 };
	}
	// toggleNavbar() {
	// 	this.setState({
	// 		collapsed: !this.state.collapsed,
	// 	});
	// }

	handleClick = (e) => {
		e.preventDefault()
		//console.log(e.target)
		let anchor = e.target.hash;
		//console.log(anchor);
		try {
			if (anchor.length > 0) {
				if (anchor === '#cv') {
					$('html, body').animate({ scrollTop: $(anchor).offset().top }, 400).then($('#past-projects').modal('show'));
				}
				else {
					$('html, body').animate({ scrollTop: $(anchor).offset().top }, 400);
				}
			}
		} catch (e) {
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

	componentDidMount() {
		let navbarParent = document.getElementById('navbar-example').childNodes;
		navbarParent[0].classList.remove("container"); // ugly hack to remove reactjs-bootstrap forced container div that just destroys my CSS
	}

	render() {
		
	// const handleSelect = (selectedKey) => {
	// 	alert(`selected ${selectedKey}`);
	// }


	// TODO: Use Navbar onSelect={this.handleSelect} to perform the handleclick
		return (
			<Navbar collapseOnSelect id="navbar-example" role="navigation">
				<Navbar.Header>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1} id="profileSpy" href="#profile" onClick={this.handleClick}>Profile</NavItem>
						<NavItem eventKey={2} id="experiencesSpy" href="#experiences" onClick={this.handleClick}>Experiences</NavItem>
						<NavItem eventKey={3} id="abilitiesSpy" href="#abilities" onClick={this.handleClick}>Abilities</NavItem>
						<NavItem eventKey={4} id="projectsSpy" href="#projects" onClick={this.handleClick}>Projects</NavItem>
						<NavItem eventKey={5} id="contactSpy" href="#contact" onClick={this.handleClick}>Contact</NavItem>
						<NavItem style={{ 'display': 'none' }} eventKey={6} id="cvSpy" href="#cv" onClick={this.handleClick}>CV</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Navibar;