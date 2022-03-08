import React from 'react';

//icons
//BsCreditCard2FrontFill
import { BsShieldLock, BsCreditCard } from "react-icons/bs";
// import { MdOutlineCreditScore } from "react-icons/md"
import { FcOnlineSupport } from "react-icons/fc";
import { RiExchangeDollarLine, RiCoinsFill, RiTeamLine } from "react-icons/ri";

const About = () => {
    return (
        <section class="about" id="about">
            <div className="about-hd">
                <h4 className="about-hd-h4">
                    Boost your money
                </h4>
                <h2 className="about-hd-h2">why you should choose us!</h2>
                <p className="about-hd-p">
                    our services gives you better result and services, fulfilling your requirement
                    and
                    <span>
                        you can manage your investment from anywhere around the world, either from
                        home or work place
                    </span>
                </p>
            </div>
            <div className="about-boxes">
                <div className="about-box">
                    <div className="about-flex">
                        <div className="about-icon-box">
                            <RiCoinsFill className="about-icon" />
                        </div>
                        <h4 className="about-heading">
                            fast profit
                        </h4>
                    </div>

                    <p className="about-text">
                        invest in the world's most popular cryptocurrency and enjoy all the benefits that comes with it.
                    </p>
                </div>

                <div className="about-box about-box-diff">
                    <div className="about-flex">
                        <div className="about-icon-box">
                            <RiExchangeDollarLine className="about-icon about-icon-diff" />
                        </div>
                        <h4 className="about-heading" style={{ color: "white" }}>
                            instant exchange
                        </h4>
                    </div>

                    <p className="about-text" style={{ color: "white" }}>
                        with our lightning speed servers, you are sure to get the best out of your investments
                    </p>
                </div>
                <div className="about-box">
                    <div className="about-flex">
                        <div className="about-icon-box">
                            <FcOnlineSupport className="about-icon" />
                        </div>
                        <h4 className="about-heading">
                            great support
                        </h4>
                    </div>

                    <p className="about-text">
                        we provide you with a 24 hours support to assist you in all issues 
                        starting from your investment to withdrawal
                    </p>
                </div>
                <div className="about-box">
                    <div className="about-flex">
                        <div className="about-icon-box">
                            <RiTeamLine className="about-icon" />
                        </div>
                        <h4 className="about-heading">
                            high reliability
                        </h4>
                    </div>
                    <p className="about-text">
                    we offer management consulting which include interim management
                    </p>
                </div>

                <div className="about-box">
                    <div className="about-flex">
                        <div className="about-icon-box">
                            <BsCreditCard className="about-icon" />
                        </div>
                        <h4 className="about-heading">
                            quick withdrawal
                        </h4>
                    </div>

                    <p className="about-text">
                        our goal is to majorly help our investors with zero trading to make profits and withdrawal anywhere around the globe
                    </p>
                </div>

                <div className="about-box">
                    <div className="about-flex">
                        <div className="about-icon-box">
                            <BsShieldLock className="about-icon" />
                        </div>
                        <h4 className="about-heading">
                            DDoS protection
                        </h4>
                    </div>

                    <p className="about-text">
                        {/* We have both an official DDOS protection as well as a certification courtesy of the Comodo Positive SSL that proves our genuine commitment and seriousness towards this matter. */}
                        We have both an official DDOS protection as well as a certification courtesy of the Comodo Positive SSL.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;