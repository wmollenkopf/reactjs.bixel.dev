import React from 'react';
import './Profile.css';
import profileImage from './images/william_mollenkopf.jpg';
import { Follow } from 'react-twitter-widgets';
import DonateButton from '../PayPalDonateButton/PayPalDonateButton.js';

const Profile = () => {
	return (
		<div className="background-snowwhite">
			<div id="profile" className="container">
				<h2>Profile</h2>
					<blockquote className="blockquote lead" >
	  					<p className="mb-0">&ldquo;Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.&rdquo;</p>
	  					<footer className="blockquote-footer">Patrick McKenzie</footer>
					</blockquote>
				<hr />
				<div className="row">
					<div className="col-md-4">
						<h3>About me</h3>
						<p>
							I'm a hard-working programmer with over 10 years experience developing, testing, and maintaining enterprise software applications.
							Either on my own or within a team, I'm capable of completing tasks within any part of the technical stack.
						</p>
					</div>
					<div className="col-md-4 text-center">
						<img className="profileImage" src={profileImage} alt="William Mollenkopf" />
					</div>
					<div className="col-md-4">
						<h3>Details</h3>
						<p>
							<strong>Name:</strong><br/>
								William Mollenkopf III<br/>
							<strong>Age:</strong><br/>
								34 years<br/>
							<strong>Location:</strong><br/>
								Florida, United States of America
						</p>
						<Follow username='BiriDreisan' 
							options={{
      							showCount: 'false',
      							dnt: 'true',
      							size: 'large',
      							showScreenName: 'false',
    						}}
						/>						
					</div>
				</div>

				<div className="text-center">
					<p>Got inspired? Copied the theme? Or do you just like the website?<br/>
					No problem, just buy me some coffee to help keep me going!</p>
					<DonateButton amount="5" />
				</div>
			</div>
		</div>
		);
};

export default Profile;