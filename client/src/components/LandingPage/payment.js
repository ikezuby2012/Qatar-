import React from 'react';

import Icon from "react-crypto-icons";

const Payment = () => {
    return (
        <div className="payment_method">
            <div className="about-hd">
                <h4 className="about-hd-h4">
                    Payment We Accept
                </h4>
                <p className="about-hd-p">
                    we accept all cryptocurrencies and fiat payment methods to make your
                    <span>
                        investment process easier with our platform
                    </span>
                </p>
            </div>
            <div className="payment_method-cards">
                <div className="payment_method-card">
                    <Icon name={"btc"} size="80" className="payment_method-icon" />
                    <span>bitcoin</span>
                </div>
                <div className="payment_method-card">
                    <Icon name={"eth"} size="80" className="payment_method-icon" />
                    <span>ethereum</span>
                </div>
                <div className="payment_method-card">
                    <Icon name={"usdt"} size="80" className="payment_method-icon" />
                    <span>tether</span>
                </div>
                <div className="payment_method-card">
                    <Icon name={"bnb"} size="80" className="payment_method-icon" />
                    <span>binance coin</span>
                </div>
            </div>
        </div>
    );
}

export default Payment;
