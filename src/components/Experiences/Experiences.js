import React from 'react';
import './Experiences.css';


const Experiences = ({backgroundClass="background-snowblue"}) => {

	return (
		<div className={backgroundClass}>
			<div id="experiences" className="experiencesContainer container">
				<h2>Experiences</h2>
				<blockquote className="blockquote lead">
					<p className="mb-0">&ldquo;A happy life is one spent in learning, earning, and yearning.&rdquo;</p>
					<footer className="blockquote-footer ">Lillian Gish</footer>
				</blockquote>
				<hr />
					{/* TODO: If Experiences IS ever used later on again, turn the bottom part into a seperate component that can be called multiple times */}
					<div className="experience row">
						<div className="col-md-4">
							<h4>Company Name</h4>
							<p className="experience-period">
								Month Year - Month Year
							</p>
						</div>
						<div className="col-md-8">
							<strong>Job Title</strong>
							<div className="hidden-phone">
								<p>Description</p>
							</div>
							<span className="experience-details">
								<span className="location">
									<span className="glyphicon glyphicon-map-marker"></span>
									Location, Country
							</span>
								<span className="seperator">|</span>
								<span className="link">
									<span className="glyphicon glyphicon-link"></span>
									<a href="https://website.com" target="_blank" rel="noopener noreferrer">https://website.com</a>
								</span>
							</span>
						</div>
					</div>



			</div>
		</div>
	);
}

export default Experiences;