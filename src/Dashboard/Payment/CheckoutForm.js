import { CardElement, PaymentElement,useElements,useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({booking}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const {price,email,patient, _id } = booking;
    const [clientSecret, setClientSecret] = useState("");


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({price}),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);



    const handleSubmit = async (event) => {
        event.preventDefault();

     




        if (!stripe || !elements) {
            return
        }
            const card = elements.getElement(CardElement)
            if (card === null) {
                return;
            }
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card
            });
            if (error) {
                console.log(error);
                setCardError(error.message);
            }
            else {
                setCardError('');
            }
            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: {
                        card: card,
                        billing_details: {
                            name: patient,
                            email: email
                        },
                    },
                },
            );
            if (confirmError) {
                setCardError(confirmError.message);
                return;
    }}
    return (
        <form onSubmit={handleSubmit}>
        <CardElement />
       <button className='btn btn-accent' type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
        <p className='text-red-500'>{cardError}</p>
      </form>
    );
};

export default CheckoutForm;