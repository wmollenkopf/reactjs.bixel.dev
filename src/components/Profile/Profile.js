import React from 'react';
import './Profile.css';
import profileImage from './images/william_mollenkopf.jpg';
// import { Follow } from 'react-twitter-widgets';
// import DonateButton from '../PayPalDonateButton/PayPalDonateButton.js';

const Profile = ({backgroundClass="background-snowwhite"}) => {
	return (
		<div className={backgroundClass}>
			<div id="profile" className="profileContainer container">
				<h2>Profile</h2>
				<blockquote className="blockquote lead" >
					<p className="mb-0">&ldquo;Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.&rdquo;</p>
					<footer className="blockquote-footer">Patrick McKenzie</footer>
				</blockquote>
				<hr />
				<div className="row">
					<div className="col-md-4">
						<h3>About me</h3>
						<p>I consider myself a very hard-working Developer and Systems Administrator with many years of experience working on various websites and applications.</p>
                    	<p>I love studying and improving myself each day through practice and online courses.</p>

					</div>
					<div className="col-md-4 text-center">
						<img className="profileImage" src={profileImage} alt="William Mollenkopf" />
					</div>
					<div className="col-md-4">
					<h3>Hobbies</h3>
					<p>My hobbies include playing video games, learning a foreign language, dabbling in game development, traveling around the world with my wife and reading fictional and educational novels.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;