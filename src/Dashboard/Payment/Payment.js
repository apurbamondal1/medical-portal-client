import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const Payment = () => {
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
  console.log(stripePromise)
    const booking = useLoaderData();
    const {treatment, price , appointmentdate , slot} = booking;
    return (
        <div>
         <h3 className='text-3xl'>Payment for {treatment}</h3>
        <p className='4-xl'>Please pay <strong>${price}</strong> for your appointment on {appointmentdate} at {slot}  </p>
        <div className='w-96 my-12'>
         <Elements stripe={stripePromise} >
         <CheckoutForm
         booking={booking}
         />
       </Elements>
       </div>
       </div>
    );
};

export default Payment;