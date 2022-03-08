import React from 'react';

import { FaHandHoldingUsd, FaUserLock } from "react-icons/fa";
import { RiCurrencyFill } from "react-icons/ri";
//BiDollar
const Features = () => {
    return (
        <section className="features about" id="features">
            <div className="features-hd about-hd">
                <h4 className="about-hd-h4">
                    Our amazing features
                </h4>
                <h2 className="about-hd-h2">how it works!</h2>
            </div>
            <div className="features-body">
                <div className="features-bg-img">&nbsp;</div>
                <div className="features-boxes">
                    <div className="features-box">
                        <div className="features-box-icon">
                            <FaUserLock className="features-icon" />
                        </div>
                        <div className="features-text">
                            <h2 className="features-hd">
                                sign up in two minutes
                            </h2>
                            <h4 className="features-h4">
                                create an account in few minutes and get started
                                with as little as $100
                            </h4>
                        </div>
                    </div>

                    <div className="features-box">
                        <div className="features-box-icon">
                            <FaHandHoldingUsd className="features-icon" />
                        </div>
                        <div className="features-text">
                            <h2 className="features-hd">
                                investing made easy
                            </h2>
                            <h4 className="features-h4">
                                choose from three simple plans and invest,
                                we'll take care of the rest!
                            </h4>
                        </div>
                    </div>

                    <div className="features-box">
                        <div className="features-box-icon">
                            <RiCurrencyFill className="features-icon" />
                        </div>
                        <div className="features-text">
                            <h2 className="features-hd">
                                build your portfolio
                            </h2>
                            <h4 className="features-h4">
                                we'll help you pick an investment strategy that reflects your interests, beliefs and goals
                            </h4>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Features;
