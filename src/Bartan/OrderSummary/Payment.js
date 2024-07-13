import { Radio } from "@material-ui/core";
import React from "react";
import "./Payment.css"

const Payment = () => {
  return (
    <div className="paymentContainer">
      <div>
        Payment Details
      </div>
      <div className="paymentType">
        <Radio
          checked={true}
          value={"cod"}
          name="payment-radio-button"
          inputProps={{ 'aria-label': 'A' }}
        />
        <span>
          Cash on Delivery - <b>Free</b>
        </span>
      </div>
      <div className="noteSection">
        <li>
          Easily pay by cash/UPI at your doorsetps.
        </li>
        <li>
          Delivery will be made in 1-2 days.
        </li>
        <li>
          If you are not satisfied with items delivered simply return it. No questions asked.
        </li>
        <li>
          Please contact at 9312277127, KK Bartan store for any changes in the items.
        </li>
      </div>
    </div>
  )
};

export default Payment;