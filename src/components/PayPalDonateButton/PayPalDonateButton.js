import React from 'react';
import Emoji from '../Emoji/Emoji.js';

const PayPalDonateButton = ({username='wmollenkopf',amount='5'}) => {

	return (
		<a href={`https://www.paypal.me/${username}/${amount}`} target="_blank" rel="noopener noreferrer" className={`btn btn-primary`}>
			<Emoji symbol="☕" label="Coffee" /> Donate <Emoji symbol="☕" label="Coffee" />
		</a>
	);
}

export default PayPalDonateButton;