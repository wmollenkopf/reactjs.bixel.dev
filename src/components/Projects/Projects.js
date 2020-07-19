import React, { Component } from 'react';
import './Projects.css';
import gitHubAiFacialRecImage from './images/github-ai-facial-rec.png';
import enspectorproImage from './images/enspectorpro.com.png';
import blogBiriMeImage from './images/blog.biri.me.png';
import scpFsecUcfEduImage from './images/scp.fsec.ucf.edu.png';
import secureSolarRatingImage from './images/secure.solar-rating.org.png';
import { Modal,Button} from 'react-bootstrap';


class Projects extends Component {
	constructor(props, context) {
	  super(props, context);
  
	  this.handleShow = this.handleShow.bind(this);
	  this.handleClose = this.handleClose.bind(this);
  
	  this.state = {
		show: false
	  };
	}
  
	handleClose() {
	  this.setState({ show: false });
	}
  
	handleShow() {
	  this.setState({ show: true });
	}

	render() {

		const detailedProjectsList = [];
		detailedProjectsList.push({"year":"2008","titleName":"E-Mail Archiving Software","bulletPoints":[]});
		detailedProjectsList.push({"year":"2009","titleName":"CR1000 Dynamic TCP CRBasic Datalogger Configuration Tutorial","bulletPoints":["Tutorials for modifying code to establish call-back connections to the Loggernet server especially when dealing with dynamically assigned IP addressed data loggers.","Tutorials for configuring the datalogger and loggernet to perform callbacks behind firewalls/routers with dynamic IP Addresses"]});
		detailedProjectsList.push({"year":"2008","titleName":"E-Mail Archiving Software","bulletPoints":[]});

	return (
		<div className={this.props.backgroundClass}>
			<div id="cv" className="cvContainer"></div>
			<div id="projects" className="projectsContainer container">
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
								<a href="https://wmollenkopf.github.io/ai-facial-recognition" target="_blank" rel="noopener noreferrer noreferrer">View more</a>
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
								<a href="https://enspectorpro.com" target="_blank" rel="noopener noreferrer noreferrer">View more</a>
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
								<a href="https://blog.biri.me" target="_blank" rel="noopener noreferrer noreferrer">View more</a>
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
								<a href="https://scp.fsec.ucf.edu" target="_blank" rel="noopener noreferrer noreferrer">View more</a>
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
								<a href="https://secure.solar-rating.org" target="_blank" rel="noopener noreferrer noreferrer">View more</a>
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
							<button onClick={this.handleShow} className="btn btn-primary">View Full Detailed List <span className="glyphicon glyphicon-new-window"></span></button>
						</div>
					</div>
				</div>
			</div>

			<Modal 
        bsSize="large"
		aria-labelledby="contained-modal-title-lg"
		show={this.state.show} onHide={this.handleClose}>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-lg"  style={{ 'text-align': 'center' }}><h3>Past &amp; Current Projects</h3></Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div style={{ 'text-align': 'left' }}>
					<ul>
						<li><span className="projYear">2008:</span> E-Mail Server Archiving software</li>
						<li><span className="projYear">2009:</span> CR1000 Dynamic TCP CRBasic Datalogger Configuration Tutorial
							<ul className="hidden-phone">
								<li>Tutorials for modifying code to establish call-back connections to the Loggernet server especially when dealing with dynamically assigned IP addressed data loggers.</li>
								<li>Tutorials for configuring the datalogger and loggernet to perform callbacks behind firewalls/routers with dynamic IP Addresses</li>
							</ul>
						</li>
						<li>
							<span className="projYear">2009:</span> <a className="screenshot" title="Last Updated: 11~??~2009" href="http://infomonitors.com/equip_room.htm" target="_blank" rel="noopener noreferrer rtmc_lab_screenshot.jpg">RTMC Pro Lab monitoring image</a>
						</li>
						<li>
							<span className="projYear">2010:</span> Simple Image Gallery Site
							<ul className="hidden-phone">
								<li>Image gallery for use for an interval based webcam recording a construction site.</li>
							</ul>
						</li>
						<li><span className="projYear">2010:</span> Displaying Data in Java Charts v7.9</li>
						<li><span className="projYear">2008-2014:</span> &ldquo;TCP Project&rdquo;
							<ul className="hidden-phone">
								<li><a className="screenshot" title="Last Updated: 2014"
										href="https://secure.solar-rating.org" target="_blank"
										rel="noopener noreferrer stcp_screenshot.jpg">SRCC – Solar Rating &amp;
										Certification</a></li>
								<li><a href="https://tcp.fsec.ucf.edu/" target="_blank" rel="noopener noreferrer">Florida Solar Energy Center Thermal Testing and Certification Portal</a></li>
								<li>A portal for users to submit collectors or systems for testing and certification.</li>
									<li>Allows for paid registration, registration on first application submission.</li>
									<li>Setup payment through Bank of America, Paypal, Authorize.net</li>
								</ul>
							</li>
							<li><span className="projYear">2014-2015:</span> Electric Vehicle (EV) Project Related Endevors
								<ul className="hidden-phone">
									<li>Worked a bit on attempting to write a <a href="https://en.wikipedia.org/wiki/PID_controller" target="_blank" rel="noopener noreferrer">PID algorithm</a>&nbsp;for the use of trying to avoid going over the usual peak power use, with multiple newly installed EV chargers installed.</li>
									<li>Implemented a version that uses&nbsp;a 1 minute sliding window to help calculate the 15/30/60 minute peaks.</li>
									<li>Also incorporated past yearly peak data into the algorithm to perform better predictions of what a month's peak is expected to be.</li>
									<li>Plans to include temperature data into the prediction was never fully implemented, but could be relatively easily.</li>
									<li>Used <a href="https://www.arduino.cc/en/Guide/ArduinoYun" target="_blank" rel="noopener noreferrer">Arduino YUN</a>,
											<a href="https://www.arduino.cc/en/Main/ArduinoBoardUno" target="_blank" rel="noopener noreferrer">Arduino UNO</a>
											and <a href="https://www.raspberrypi.org/" target="_blank" rel="noopener noreferrer">Raspberry	PI</a>s to collect pulses from EV Chargers, building power, etc. As WELL as send signals to EV chargers to shift power consumption based on aforementioned peak algorithms.
									</li>
									<li>
										Note: Current prototype implementation uses <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.JS</a> modules on the boards, communicating to a MySQL server, that itself, runs the Algorithms based on stored data collected from the boards.
									</li>
									<li>Worked with <a href="http://www.openadr.org/" target="_blank" rel="noopener noreferrer">OpenADR </a>protocol/software.</li>
									<li>Worked with <a href="http://www.grid2home.com/" target="_blank"	rel="noopener noreferrer">Grid2Home</a> <a href="http://www.grid2home.com/solutions/smart-charging/" target="_blank" rel="noopener noreferrer">Smart EV Charging (SEP)</a> protocol/software.</li>
								</ul>
							</li>
							<li><span className="projYear">2015:</span> Configured <a href="http://www.engeniustech.com/" target="_blank" rel="noopener noreferrer">EnGenius</a> devices
								<ul className="hidden-phone">
									<li>Primarily to allow for temporary wireless access to a hard-lined internal network.</li>
								</ul>
							</li>
							<li><span className="projYear">2015:</span> Configuration &amp; Administration of <a href="https://www.symantec.com/endpoint-protection/" target="_blank" rel="noopener noreferrer">Symantec Endpoint</a> Server</li>
							<li><span className="projYear">2015:</span> Creating/Generating &ldquo;in-house&rdquo; Invoices
								<ul className="hidden-phone">
									<li>Invoices sent out to other departments within FSEC using a mix of PL/SQL and PHP pages.</li>
								</ul>
							</li>
							<li><span className="projYear">2015:</span> <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">WordPress</a> Server Administration
								<ul className="hidden-phone">
									<li>
										Installed <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">WordPress</a> onto an <a href="https://en.wikipedia.org/wiki/OpenVMS" target="_blank" rel="noopener noreferrer">OpenVMS</a>,
										<a href="http://www.ubuntu.com/" target="_blank" rel="noopener noreferrer">Ubuntu</a>(shell only) environment successfully.
									</li>
									<li>Continued maintenance and support for the server</li>
									<li>
										Was able to install a version onto <a href="https://www.raspberrypi.org/" target="_blank" rel="noopener noreferrer">Raspberry Pi</a> 1 with decent performance results using <a href="http://wiki.nginx.org/Main" target="_blank" rel="noopener noreferrer">Nginx</a>
									</li>
								</ul>
							</li>
							<li><span className="projYear">2015:</span> className project titled &ldquo;Quanvolute&rdquo; aka &ldquo;Convolute&rdquo; aka &ldquo;Quantum&rdquo;
								<ul className="hidden-phone">
									<li>Created using&nbsp;<a href="https://parse.com/" target="_blank" rel="noopener noreferrer">Parse API</a> and <a href="http://unity3d.com/" target="_blank" rel="noopener noreferrer">Unity</a></li>
									<li>Player accounts automatically generated on first login attempt (with proper login authentication included as well)</li>
									<li>Performs multiple turns of a checkers-esque game with portals included to make the experience unique.</li>
									<li>Able to perform audio playback, a Menu UI on game start, polling to determine when it&#039;s the player&#039;s turn again.</li>
									<li>Ran into an issue where the game would not scale properly outside of the Unity Dev. IDE</li>
								</ul>
							</li>
							<li><span className="projYear">2015-10-2:</span> Researched Electric Vehicle (EV) Charging &amp; Load Shedding.
								<ul className="hidden-phone">
									<li>Wrote a research paper that discusses methods of using Model Predictive Control
										(MPC) and Linear
										Programming (LP) to create a Control Horizon method which can allow for a
										scalable set of EV chargers to
										perform without increasing peak load and to perform load shedding.</li>
									<li><a href="http://blog.biri.me/wp-content/uploads/2015/10/William_Mollenkopf_III_EVChargingLoadShedding_Paper.pdf"
											target="_blank" rel="noopener noreferrer">Paper (pdf)</a> | <a
											href="http://blog.biri.me/wp-content/uploads/2015/10/William_Mollenkopf_III_EVChargingLoadShedding_Presentation.pdf"
											target="_blank" rel="noopener noreferrer">Presentation (pdf)</a></li>
								</ul>
							</li>
							<li><span className="projYear">2015-11-3:</span> Raspberry Pi Based Autonomous Car.
								<ul className="hidden-phone">
									<li>Research covered using advanced computer vision algorithms and various other
										algorithms in order to
										determine where the road is, what &ldquo;is&rdquo; the road, obstacles, how the
										direction of the road is
										changing to know which direction to steer, etc.</li>
									<li><a href="http://blog.biri.me/wp-content/uploads/2015/12/William_Mollenkopf_III_RaspberryPiBasedAutonomousCar_Paper.pdf"
											target="_blank" rel="noopener noreferrer">Paper (pdf)</a> | <a
											href="http://blog.biri.me/wp-content/uploads/2015/12/William_Mollenkopf_III_RaspberryPiBasedAutonomousCar_Presentation.pdf"
											target="_blank" rel="noopener noreferrer">Presentation (pdf)</a></li>
								</ul>
							</li>
							<li><span className="projYear">2015-2016:</span> Developing Unity3D Games
								<ul className="hidden-phone">
									<li>Working to produce a platformer, &ldquo;tactics&rdquo; strategy and puzzle game.
									</li>
								</ul>
							</li>
							<li><span className="projYear">2016:</span> Delphi programming to convert XML files to .enb
								files.</li>
							<li><span className="projYear">2016:</span> Additional WordPress Tasks
								<ul className="hidden-phone">
									<li>Preparing a proper testing instance</li>
									<li>Installing security related plugins such as <a href="https://www.wordfence.com/" target="_blank" rel="noopener noreferrer">Wordfence</a>.</li>
								</ul>
							</li>
							<li><span className="projYear">2016:</span> <a href="http://energygauge.com" target="_blank" rel="noopener noreferrer">EnergyGauge</a>
								Server-side Processing Agent
								<ul className="hidden-phone">
									<li>Maintaince to a program also called the "auto-pilot" that will process
										customer's building data and
										generate ratings for it.</li>
								</ul>
							</li>
							<li><span className="projYear">2016:</span> Created a prototype &ldquo;Halting Machine&rdquo;
								<ul className="hidden-phone">
									<li>Can execute another program as a separate monitored process in intervals (or
										not)</li>
									<li>Can also close the program if the program executed hasn&#039;t completed
										it&#039;s task after a user
										configurable amount of time.</li>
									<li><a href="https://github.com/wmollenkopf/HaltingMachine" target="_blank" rel="noopener noreferrer">https://github.com/wmollenkopf/HaltingMachine</a></li>
								</ul>
							</li>
							<li><span className="projYear">2016:</span> Converted Single Threaded Program into
								multithreaded.
								<ul className="hidden-phone">
									<li>Previously was CPU locking during billing processing.</li>
									<li>Now is a timer driven multi process spawning application that can be manipulated
										and controlled rather
										than require a task manager process End Task event or an entire PC reboot in
										order to stop/pause processing.</li>
								</ul>
							</li>
							<li><span className="projYear">2016:</span> Improving User Experience for FSEC HERSPRO &amp;
								EnergyGauge Ratings
								Sites
								<ul className="hidden-phone">
									<li>Improving code, refactoring both websites</li>
									<li>Added UI improvements such as <a href="https://www.datatables.net/" target="_blank" rel="noopener noreferrer">JQuery Datatables</a></li>
									<li>Improved server-to-browser speed.</li>
									<li>Improved loading times clientside and server-side signficantly for the PL/SQL
										web pages</li>
									<li>Improved PL/SQL code to utilize bulk collection</li>
									<li>Using proper inner joins instead of multiple FROM statements</li>
									<li>Using proper WHERE statement nesting (instead of many PL/SQL driven redudant
										queries and/or faulty logic
										queries)</li>
									<li>Combined literally 10+ nested cursors, looping inside of cursors, in cursor
										loops into a single, polished
										and cleaned single cursor loop</li>
								</ul>
							</li>
							<li><span className="projYear">2016:</span> Financial Analytics Pages
								<ul className="hidden-phone">
									<li>Code pertaining to an internal financial web portal for monitoring invoicing,
										income, potential income,
										future income, sending payment due notices/warnings, etc.</li>
								</ul>
							</li>
							<li><span className="projYear">2016:</span> Massive Dataset Manipulation/Transformation
								<ul className="hidden-phone">
									<li>Linking <a href="http://www.campbellsci.com/loggernet" target="_blank" rel="noopener noreferrer">Loggernet</a>&#039;s output of 500
										instantaneous IV (current and voltage) readings from a single row of data, into
										a transposed multirow
										collection of data</li>
									<li>Then porting it into <a href="http://www.osisoft.com/" target="_blank" rel="noopener noreferrer">OSI
											Soft&#039;s</a> <a href="http://www.osisoft.com/pi-system/" target="_blank" rel="noopener noreferrer">PI System</a> for processing.</li>
									<li>Using such tools like their UFL_FILE processing Interface, as well as their
										Loggernet Interface for some
										additional data as well.</li>
								</ul>
							</li>
							<li><span className="projYear">2016:</span> <a href="https://www.twilio.com/" target="_blank" rel="noopener noreferrer">Twilio </a>Automated
								Telephone Support Scripting
								<ul className="hidden-phone">
									<li>Also helped link <a href="https://www.twilio.com/" target="_blank" rel="noopener noreferrer">Twilio</a>+<a
											href="https://freshdesk.com/" target="_blank" rel="noopener noreferrer">Freshdesk</a>.</li>
									<li>Setup code to handle scenarios such as detecting current customers of paid
										telephone support</li>
									<li>And code for optionally offering messages based on a customer&#039;s data (such
										as notice of software
										upgrades they may be interested in, etc)</li>
									<li>Also code for enqueuing customers and escalating based on hold&nbsp; time.</li>
								</ul>
							</li>
							<li><span className="projYear">2016:</span> Generating Windows Custom ISOs
								<ul className="hidden-phone">
									<li>Installation images using Window&#039;s Sysprep software.</li>
								</ul>
							</li>
							<li><span className="projYear">2016:</span> <a href="https://fogproject.org/" target="_blank" rel="noopener noreferrer">FOG Project</a>
								(Computer Cloning and Management)
								<ul className="hidden-phone">
									<li>Began work to set up the server, but ran into DHCP PXE Boot issues with OpenVMS
										and the project has been
										delayed</li>
									<li>The server is used for deploying customized OS images over PXE for network
										booted, fast and efficient
										fully updated/configured OS packaged with whatever software and updates
										necessary for fast deployment and
										management.</li>
								</ul>
							</li>
							<li><span className="projYear">2017:</span> <a href="https://scp.fsec.ucf.edu" target="_blank" rel="noopener noreferrer">Solar
									Certification Portal</a>
								<ul className="hidden-phone">
									<li>A large, complex website that handles registering Photovoltaic Modules for
										Florida</li>
									<li>Also handles Certification of Photovoltaic Systems for Florida.</li>
									<li>Users are able to submit their PV Modules for review by staff to have them
										registered for use in the state
										of Florida.</li>
									<li>Users can submit their PV System details and choose to have it reviewed by our
										staff through a manual
										process and become certified that way</li>
									<li>Or the user can undergo training and submit the PV System details through an
										&ldquo;Express&rdquo; method</li>
									<li>The &ldquo;Express&rdquo; method automatically generates an electrical drawing
										as well as provide
										certification instantly to the PV System (if the PV System is considered valid).
									</li>
								</ul>
							</li>
							<li><span className="projYear">2017:</span> <a href="http://www.hemdata.com/products/dawn/dawnedit" target="_blank" rel="noopener noreferrer">DAWNEdit</a> Server Setup &amp; Administration
								<ul className="hidden-phone">
									<li>Setting up and configuring a DAWNEdit based server for collecting web POSTed
										&ldquo;.IOS&rdquo; files from
										their vehicle data loggers using C# ASPX website I wrote</li>
									<li>Also configured the DAWNEdit software to convert the collected data files into .CSV files</li>
									<li>Also set the server up to store converted CSV files on a Samba mountable and web
										accessible drive for the
										purposes of wget to be able to pull in the latest files onto another&#039;s
										server for research purposes.</li>
								</ul>
							</li>
							<li><span className="projYear">2017:</span> <a href="https://aws.amazon.com/machine-learning/" target="_blank" rel="noopener noreferrer">Amazon</a>
								&amp; <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">TensorFlow</a> Machine
								Learning
								<ul className="hidden-phone">
									<li>Used both tools in order to help determine power consumption and perform peak shedding.</li>
									<li>Weather prediction from the machine learning and solar power prediction went beautifully – better than expected even.</li>
								</ul>
							</li>
							<li><span className="projYear">2017-2018:</span> <a href="https://www.enspectorpro.com" target="_blank" rel="noopener noreferrer">EnspectorPro</a>.
							<ul className="hidden-phone">
									<li>A mobile centered, but desktop friendly website for building home officials, home raters, home blower door testers, etc</li>
									<li>Users can visit the site and store their data there...</li>
									<li>Allow for their stored data to be accessed and QA&#039;d by a Provider</li>
									<li>And allow for their data to oupt as a PDF report file.</li>
									<li>The PDF reports are able to be e-mailed out to building officials as well.</li>
									<li>The site is intended to allow home testers out in the field to perform various tests (Such as a Blower Door Test), enter their data into the website from their phone or laptop, generate official documents with all their calculations done for them by the site, and e-mail the results to building officials</li>
									<li>Typically user input is extremely minimal making the site potentially extremely convient for useres.</li>
									<li>Also, the quality assurance that Providers can provide is expected to help reduce the number of invalid reports building officials recieve</li>
								</ul>
							</li>
							<li><span className="projYear">2018:</span> Installing SSL & Updates for OpenVMS: <a
									href="http://www.process.com/products/pmdf/" target="_blank" rel="noopener noreferrer">PMDF Internet
									Messaging</a> &amp; <a href="http://www.process.com/products/pmas/" target="_blank" rel="noopener noreferrer">PreciseMail
									Anti-Spam</a>
								<ul className="hidden-phone">
									<li>Reconfiguring to support stronger security standards of TLS 1.2</li>
									<li>Generating CSR and obtaining purchased MultiDomain wildcard SSL Certificate for the mail server</li>
									<li>Installing SSL into the OpenVMS Cluster for the mail server.</li>
								</ul>
							</li>
							<li><span className="projYear">2018:</span> Resolved Major Networking Issues
								<ul className="hidden-phone">
									<li>The parent University our network derives from was having odd networking behavior.</li>
									<li>Worked with the IT Team to help diagnose the problem.</li>
									<li>Odd behavior included access to frequented sites such as Google, Gmail, hp.com, etc were totally inaccessible. E-mails unable to be recieved, etc.</li>
								</ul>
							</li>
							<li><span className="projYear">2008-2018:</span> Collect &amp; Parse Datalogger Data
								<ul className="hidden-phone">
									From data loggers and integrate into our own &ldquo;home brewed&rdquo; database from such devices/companies	such as:
									<li><a href="http://www.campbellsci.com/" target="_blank" rel="noopener noreferrer">Campbell Scientific (CR10, CR10x, CR1000, etc)</a></li>
									<li><a href="http://www.lacrossetechnology.com" target="_blank" rel="noopener noreferrer">La Crosse Technology</a></li>
									<li><a href="https://www.wattsupmeters.com" target="_blank" rel="noopener noreferrer">Watts Up</a></li>
									<li><a href="http://powerhousedynamics.com/" target="_blank" rel="noopener noreferrer">eMonitor (now siteSage?) and various sensor add on devices</a></li>
									<li><a href="http://www.theenergydetective.com/" target="_blank" rel="noopener noreferrer">TED – The Energy Detective</a></li>
									<li><a href="http://www.wunderground.com/" target="_blank" rel="noopener noreferrer">Weather Underground</a></li>
									<li><a href="http://www.pointsix.com" target="_blank" rel="noopener noreferrer">Point Six Wireless</a></li>
									<li><a href="http://www.alsoenergy.com" target="_blank" rel="noopener noreferrer">Also Energy</a></li>
									<li><a href="http://www.acurite.com/" target="_blank" rel="noopener noreferrer">AcuRite &amp; Acu-Link</a></li>
								</ul>
							</li>
							<li><span className="projYear">2019:</span> Wrote a DCL Batch Job that Monitors Disk Storage Space
								<ul className="hidden-phone">
									<li>It will monitor our disks and send an e-mail when a disk is low on storage to IT members.</li>
								</ul>
							</li>
							<li><span className="projYear">2019:</span> Migrating Windows 2008 servers to Windows 2012</li>
							<li><span className="projYear">2019:</span> Upgrading OpenVMS 8.4.0 Tomcat from 5 to 7
								<ul className="hidden-phone">
									<li>Essentially taking a mixed Tomcat OpenVMS cluster system and consolidating the
										nodes on OpenVMS to use the latest possibly Tomcat for OpenVMS 8.4.0.</li>
								</ul>
							</li>
							<li><span className="projYear">2019:</span> Setting up an OpenCanary VM
								<ul className="hidden-phone">
									<li>Set up an OpenCanary internal honeypot server to help give us information about possible intrusions.</li>
								</ul>
							</li>
							<li><span className="projYear">2019:</span> Managing vSphere VMs, Templates and Backups</li>
							<li><span className="projYear">2019:</span> Mitigating Network Intrusions</li>
							<li><span className="projYear">2019:</span> Installing and Configuring vCenter 6.7u2</li>
							<li><span className="projYear">2019:</span> Assisting with Smart Deploy configuration, set up, and deployment</li>
							<li><span className="projYear">2019:</span> Setting up and managing Single Sign On for vCenter</li>
							<li><span className="projYear">2019:</span> Setting up and troubleshooting a network of various routers, switches, wireless bridges, etc for the purpose of data collection at a remote	site</li>
							<li><span className="projYear">2019:</span> Managing Adobe Cloud Creative Cloud products, users, etc</li>
							<li><span className="projYear">2019:</span> Installing a fallback HPe OnBoard Administrator</li>
							<li><span className="projYear">2019:</span> Updating firmware for OnBoard Administrators</li>
							<li><span className="projYear">2019:</span> Updating HPe Virtual Connect</li>

							<li><span className="projYear">2018-Present:</span> System Administration: Documentation
								<ul className="hidden-phone">
									<li>Documenting the batch jobs that run on a regular basis.</li>
									<li>Documenting the many various processes that were previously undocumented.</li>
									<li>Documenting anything new that arises as well.</li>
								</ul>
							</li>
							<li><span className="projYear">2018-Present:</span> System Administration: Patches &amp; Updates
								<ul className="hidden-phone">
									<li>Performing updates and patches to critical server infrastructure.</li>
								</ul>
							</li>
							<li><span className="projYear">2018-Present:</span> Resolving TLS issues for servers</li>
							<li><span className="projYear">2018-Present:</span> Managing DNS Entries</li>
							<li><span className="projYear">2018-Present:</span> Installing and Managing ESXi Host Blade Servers</li>
							<li><span className="projYear">2018-Present:</span> Managing VDP Backups</li>
							<li><span className="projYear">2018-Present:</span> Updating ESXi Hypervisor servers with firmware, drivers and patches</li>
							<li><span className="projYear">2018-Present:</span> Migrating Windows 7 PCs to Windows 10 PCs</li>
							<li><span className="projYear">2018-Present:</span> Managing system batch job queues on OpenVMS Cluster</li>
							<li><span className="projYear">2018-Present:</span> Performing OpenVMS username changes affecting services such as e-mail, shares, website logins, etc.</li>
							<li><span className="projYear">2010-Present:</span> Resolving Nessus SIRT Responses Each Month
								<ul className="hidden-phone">
									<li>Go through a report each month to resolve any lingering security issues we may have with our network or servers.</li>
								</ul>
							</li>
							<li>Plus several more…</li>
						</ul>
					</div>

					{/* <ul>
					{
                        detailedProjectsList.map((item,index) => (
							<li key={index}>
							<span class="projYear">{item.year}</span> {item.titleName}
								<ul class="hidden-phone">
									{item.bulletPoints.map((bullet,index) => (<li key={index}>{bullet}</li>))}
								</ul>
						</li>
                        ))
                    }	
					</ul> */}
				</Modal.Body>
				<Modal.Footer style={{ 'text-align': 'center' }}>
					<Button onClick={this.handleClose}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>

	);
}

}

export default Projects;