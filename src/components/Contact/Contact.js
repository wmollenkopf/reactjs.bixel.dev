import React from 'react';
import './Contact.css';

const Contact = ({ backgroundClass = "background-gray" }) => {
	const reverseEmail = {
		'unicodeBidi': 'bidi-override',
		'direction': 'rtl',
	}

	const mailClick = (e) => {
		e.preventDefault();
		let emailAddress = e.target.innerText;
		emailAddress = emailAddress.split('').reverse().join('');
		let realURL = 'mailto:' + emailAddress;
		window.location = realURL;
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

				<div className="row">
					<div className="col-md-4">
						<ul className="no-bullets">
							<li>
								<a href="https://github.com/wmollenkopf" target="_blank" rel="noopener noreferrer">
									<span className="icon icon-git"></span>
									https://github.com/wmollenkopf
								</a>
							</li>
						</ul>
					</div>

					<div className="col-md-4">
						<ul className="no-bullets">
							<li>
								<a href="https://linkedin.com/in/wmollenkopf" target="_blank" rel="noopener noreferrer">
									<span className="icon icon-linkedin"></span>
									http://linkedin.com/in/wmollenkopf
								</a>
							</li>
						</ul>
					</div>

					<div className="col-md-4">
						<ul className="no-bullets">
							<li>
								<a href="mailto:em.irib@irib" onClick={mailClick}>
									<span className="icon icon-email"></span>
									<span style={reverseEmail}>
										em.irib@irib
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

		</div>
	)
};

export default Contact;