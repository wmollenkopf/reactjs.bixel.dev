import React from 'react';
import './Projects.css';
import gitHubAiFacialRecImage from './images/github-ai-facial-rec.png';
import enspectorproImage from './images/enspectorpro.com.png';
import blogBiriMeImage from './images/blog.biri.me.png';
import scpFsecUcfEduImage from './images/scp.fsec.ucf.edu.png';
import secureSolarRatingImage from './images/secure.solar-rating.org.png';



const Projects = () => {
	const hideCVStyle = {
		padding: '0px',
		margin: '0px',
		width: '0px',
		height: '0px',
	};

	const showAllPastProjects = (e) => {
		e.preventDefault()
		//$('#past-projects').modal('show');
		return false;
	};

	return (
		<div className="background-snowblue">
			<div id="cv" className="container" style={hideCVStyle}></div>
			<div id="projects" className="container">
				<h2>Projects</h2>
				<blockquote className="blockquote lead">
					<p className="mb-0">&ldquo;You can do anything you set your mind to.&rdquo;</p>
					<footer className="blockquote-footer ">Benjamin Franklin</footer>
				</blockquote>

				<hr />

				<div className="row">
					<div className="col-md-6 col-sm-12 col-xs-12">
						<figure className="effect">
							<img src={gitHubAiFacialRecImage} alt="AI Facial Recognition" />
							<figcaption>
								<h3>AI Facial Recognition</h3>
								<p>Personal ReactJS project that uses an AI API to detect faces in images via URL.</p>
								<p><strong>Tags:</strong> <br /> AI, ReactJS</p>
								<a href="https://wmollenkopf.github.io/ai-facial-recognition" target="_blank" rel="noopener noreferrer">View more</a>
								<span className="icon">
									<span className="glyphicon glyphicon-new-window"></span>
								</span>
							</figcaption>
						</figure>
					</div>

					<div className="col-md-6 col-sm-12 col-xs-12">
						<figure className="effect">
							<img src={enspectorproImage} alt="EnspectorPro" />
							<figcaption>
								<h3>EnspectorPro</h3>
								<p>EnspectorPro, helping building testers work more easily with building officials.</p>
								<p><strong>Tags:</strong> <br />Design, Development, PHP, Bootstrap, Fullstack</p>
								<a href="https://enspectorpro.com" target="_blank" rel="noopener noreferrer">View more</a>
								<span className="icon">
									<span className="glyphicon glyphicon-new-window"></span>
								</span>
							</figcaption>
						</figure>
					</div>

					<div className="col-md-6 col-sm-12 col-xs-12">
						<figure className="effect">
							<img src={blogBiriMeImage} alt="Biri.me Blog" />
							<figcaption>
								<h3>WordPress Blog</h3>
								<p>Personal blog for storing notes related to IT, Japanese studies, etc.</p>
								<p><strong>Tags:</strong> <br />Configuration, Guides, Documentation, Notes</p>
								<a href="https://blog.biri.me" target="_blank" rel="noopener noreferrer">View more</a>
								<span className="icon">
									<span className="glyphicon glyphicon-new-window"></span>
								</span>
							</figcaption>
						</figure>
					</div>

					<div className="col-md-6 col-sm-12 col-xs-12">
						<figure className="effect">
							<img src={scpFsecUcfEduImage} alt="FSEC Solar Photovoltaic Portal" />
							<figcaption>
								<h3>Photovoltaic Certification Portal</h3>
								<p>SCP, certifying solar panels in Florida, USA.</p>
								<p><strong>Tags:</strong> <br />Serverside Development, VB.net</p>
								<a href="https://scp.fsec.ucf.edu" target="_blank" rel="noopener noreferrer">View more</a>
								<span className="icon">
									<span className="glyphicon glyphicon-new-window"></span>
								</span>
							</figcaption>
						</figure>
					</div>

					<div className="col-md-6 col-sm-12 col-xs-12">
						<figure className="effect">
							<img src={secureSolarRatingImage} alt="FSEC Solar Photovoltaic Portal" />
							<figcaption>
								<h3>Solar Rating & Certfication Corp.</h3>
								<p>Site used for certifying PV Modules & Systems throughout the US.</p>
								<p><strong>Tags:</strong> <br />Serverside Development, VB.net</p>
								<a href="https://secure.solar-rating.org" target="_blank" rel="noopener noreferrer">View more</a>
								<span className="icon">
									<span className="glyphicon glyphicon-new-window"></span>
								</span>
							</figcaption>
						</figure>
					</div>

				</div>
				<div className="row">
					<div className="col-md-12">
						<hr />
						<div className="text-center">
							<button onClick={showAllPastProjects} className="btn btn-primary">View Full Detailed List <span className="glyphicon glyphicon-new-window"></span></button>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
}

export default Projects;