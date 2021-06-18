import React from "react";
import { useEffect } from "react";

const Paypal = ({ handlePlaceOrder }) => {
 // console.log(handlePlaceOrder);
  useEffect(() => {
    window.paypal
      .Buttons({
        // Set up the transaction
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "10.00",
                },
              },
            ],
          });
        },

        // Finalize the transaction
        onApprove: function (data, actions) {
          return actions.order.capture().then(function (details) {
            // Show a success message to the buyer
            alert(
              "Transaction completed by " + details.payer.name.given_name + "!"
            );
          });
        },
      })
      .render("#paypal-button-container");
  });

  return (
    <div>
      <div id="paypal-button-container" />
    </div>
  );
};

export default Paypal;
