import React from 'react';

const Info = () => {
    return (
        <section className="info" id="info">
            <div className="info-padding">
                <div className="info-bg-img" >&nbsp;</div>
                <div className="info-text">
                    <h4 className="info-text-bg">about <span>us</span></h4>
                    <p>
                        We are an international financial company engaged in investment activities, which are
                        related to trading on financial markets and cryptocurrency exchanges performed
                        by professional traders.
                    </p>

                    <p style={{ marginBottom: "20px" }}>
                        Our goal is to provide our investors with a reliable source of high income, while
                        minimizing any possible risks and offering a high-quality service, allowing us to automate
                        and simplify the relations between the investors and the trustee, we work towards increasing
                        your profit margin by profitable investment. we look forward to you being part of our community.
                    </p>
                    <a href="#features" className="info-btn">learn more</a>
                </div>
            </div>
        </section>
    );
}

export default Info;
