import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51HHrjgDLOOgH9FQzSMeT51p2TOE0V2t90VsPE8GktI1SS2EY3zWQbogx81KOyImI0phAoVhayJxr1dtuwKjY5bnI00UjytUSPT';

	const onToken = (token) => {
		axios({
			url    : 'payment',
			method : 'post',
			data   : {
				amount : priceForStripe,
				token  : token
			}
		})
			.then((response) => {
				alert('Succesful Payment');
			})
			.catch((error) => {
				console.log('Payment Error: ', error);
				alert('Payment was successful');
			});
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
