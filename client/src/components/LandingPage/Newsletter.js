import React from 'react';

const Newsletter = () => {
    return (
        <div className="newsletter" id="newsletter">
            <div className="newsletter-padding">
                <div className="newsletter-box">
                    <h4 style={{ fontSize: "20px", color: "white" }}>Join our newsletter</h4>
                    <form className="newsletter-form">
                        <input type="email"
                            className="newsletter-input"
                            id="email"
                            required
                            placeholder="email address"
                        />
                        <button className="newsletter-button info-btn">submit</button>
                    </form>
                </div>
                <div className="newsletter-bg-img" >
                    <h4>earn the big way!</h4>
                    <p>
                        <span>
                            you can increase your income by receiving
                            percentages from the transactions made by your referrals
                        </span>
                        <span>
                            invite other users (for example, your friends, co-workers etc)
                            to join the project, after registration they will be your referrals
                            and if they perform any transaction on the website you receive 27% reward.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
