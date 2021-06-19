import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import "./style.css";
const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const SplitForm = ({ handlePlaceOrder }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    console.log(error, paymentMethod);
    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod);
      const payment = paymentMethod.id;
      handlePlaceOrder(payment);
      setPaymentError(null);
      //window.location.href = "/";
    }
  };

  setTimeout(() => {
    setPaymentError(null);
    setPaymentSuccess(null);
  }, 4000);

  return (
    <form onSubmit={handleSubmit} className="card-split-form">
      <label className="card-label">
        Card number
        <CardNumberElement placeholder="Enter card number" options={options} />
      </label>{" "}
      <br />
      <label className="card-label">
        Expiration date
        <CardExpiryElement placeholder="Enter Date" options={options} />
      </label>
      <br />
      <label className="card-label">
        CVC
        <CardCvcElement options={options} />
      </label>{" "}
      <br />
      <button
        disabled={!stripe}
        className="bg-blue-700 hover:bg-red-500 text-white py-3 px-5  mt-3  rounded cart-add"
      >
        Pay Bill
      </button>
      {paymentError && <p style={{ color: "red" }}>{paymentError}!</p>}
      {paymentSuccess && (
        <p style={{ color: "green" }}>Your Payment was Successful</p>
      )}
    </form>
  );
};

export default SplitForm;
