import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure, { axiosSecure } from '../../../Custom_Hooks/useAxiosSecure';
import { ContextProvider } from '../../../AllContext/ContextContainer';

const CheckoutForm = ({ paymentData, closeModal }) => {
    const [transId, setTransId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(ContextProvider);

    useEffect(() => {
        if (paymentData.totalParcelPrice > 0) {
            axiosSecure.post(`/create-payment-intent`, { price: paymentData.totalParcelPrice })
                .then(res => {
                    console.log("Received client secret:", res.data.clientSecret); // Log client secret
                    setClientSecret(res.data.clientSecret);
                })
                .catch(error => console.error("Error fetching client secret:", error));
        }
    }, [paymentData.totalParcelPrice]); // Add dependency to avoid unnecessary calls

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (!card) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[PaymentMethod error]', error);
            return;
        }

        if (!clientSecret) {
            console.error("No client secret found. Cannot confirm payment.");
            return;
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'any',
                    email: user?.email || 'anonymous@gmail.com',
                },
            },
        });

        if (confirmError) {
            console.log('[confirmCardPayment error]', confirmError);
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            setTransId(paymentIntent.id);
            console.log('Transaction succeeded with ID:', paymentIntent.id);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 my-3'
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay
                </button>
            </form>
            {transId && <p>Transaction ID: {transId}</p>}
        </div>
    );
};

export default CheckoutForm;
