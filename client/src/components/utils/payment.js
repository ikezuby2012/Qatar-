import React from 'react';
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const Payment = ({ amount }) => {
   const paymentConfig = {
      PUBLIC_KEY: process.env.REACT_APP_Flutterwave_PK,
      tx_ref: Date.now(),
      amount: amount,
      currency: "NGN",
      payment_options: "card,mobilemoney,ussd",
      customer: {
         email: "email@email.com",
         phonenumber: "",
         name: "",
      },
      customizations: {
         title: "deposit",
         description: ""
      },
      subaccounts: [
         {
            id: ""
         }
      ],
      callback: function (data) {
         console.log(data)
      }

   }
   const handleFlutterPayment = useFlutterwave(paymentConfig)
   return (
      <div className="paymentModal">
         <button onClick={() => {
            handleFlutterPayment({
               callback: (res) => {
                  console.log(res);
                  closePaymentModal();
               },
               onClose: () => { },
            })
         }}>
            payment with react hooks
         </button>
      </div>
   );
}

export default Payment;
