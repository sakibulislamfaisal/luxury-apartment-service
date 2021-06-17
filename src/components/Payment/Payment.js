import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import SplitForm from "./SplitForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_5u4MdV0k3HrcnkqeNfD3MCIF007tWoO0eL");
const Payment = ({ handlePlaceOrder }) => {
  document.title = "Payment Page ";

  return (
    <Elements stripe={stripePromise}>
      {/* <CheckoutForm></CheckoutForm> */}
      <SplitForm handlePlaceOrder={handlePlaceOrder}></SplitForm>
    </Elements>
  );
};

export default Payment;
