import React from 'react';
import './Contact.css';

const Contact = () => {
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
	    <div className="background-gray">
			<div id="contact" className="container">
				<h2>Contact</h2>
				<blockquote className="blockquote lead">
	  				<p className="mb-0">If I had asked people what they wanted, they would have said faster horses. &rdquo;</p>
	  				<footer className="blockquote-footer ">Henry Ford</footer>
				</blockquote>
				
				<hr />

				<div className="row">
					<div className="col-md-6">
						<ul className="no-bullets">
							<li>
								<a href="mailto:em.irib@irib" onClick={mailClick}>
									<span className="icon icon-email"></span>
									<span style={reverseEmail}>
										em.irib@irib
									</span>
								</a>
							</li>
							<li>
								<a href="https://twitter.com/biridreisan" target="_blank" rel="noopener noreferrer">
									<span className="icon icon-twitter"></span>
									http://twitter.com/biridreisan
								</a>
							</li>
							
						</ul>
					</div>
					<div className="col-md-6">
						<ul className="no-bullets">
							<li>
								<a href="https://linkedin.com/in/wmollenkopf" target="_blank" rel="noopener noreferrer">
									<span className="icon icon-linkedin"></span>
									http://linkedin.com/in/wmollenkopf
								</a>
							</li>
							<li>
								<a href="http://github.com/wmollenkopf" target="_blank" rel="noopener noreferrer">
									<span className="icon icon-git"></span>
									http://github.com/wmollenkopf
								</a>
							</li>
						</ul>
					</div>
					
				</div>

				<hr />
				<div className="text-center">
					<a className="github-button" href="https://github.com/wmollenkopf" aria-label="Follow @wmollenkopf on GitHub">Follow @wmollenkopf</a>

					<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-url="http://www.biri.me" data-related="biridreisan" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js"></script>
				</div>

			</div>
			
		</div>
	)
};

export default Contact;