import React from 'react';
import './Contact.css';
import { IoIosMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

const Contact = ({backgroundClass="background-gray"}) => {
	// const reverseEmail = {
	//  // Reverse displayed text to display email properly
	// 	'unicodeBidi': 'bidi-override',
	// 	'direction': 'rtl',
	// }

	const mailClick = (e) => {
		// help prevent email scraping, even the JS code cannot be trusted...
		e.preventDefault();
		let emailAddress = 'ved.lexib@irib';
		emailAddress = emailAddress.split('').reverse().join('');
		let realURL = 'mailto:' + emailAddress;
		window.location = realURL;
		//console.log(realURL);
		return false;
	};

	return (
		<div className={backgroundClass}>
			<div id="contact" className="contactContainer container">
				<h2>Contact</h2>
				<blockquote className="blockquote lead">
					<p className="mb-0">If I had asked people what they wanted, they would have said faster horses. &rdquo;</p>
					<footer className="blockquote-footer ">Henry Ford</footer>
				</blockquote>

				<hr />

				<div className="contactLinks">
					<a href="https://github.com/wmollenkopf" target="_blank" rel="noopener noreferrer">
							<IoLogoGithub/>
						</a>
						<a href="https://linkedin.com/in/wmollenkopf" target="_blank" rel="noopener noreferrer">
							<IoLogoLinkedin/>
						</a>
						<a href="mailto:ved.lexib@irib" onClick={mailClick}>
							<IoIosMail/>
						</a>
				</div>

			</div>
		</div>
	)
};

export default Contact;