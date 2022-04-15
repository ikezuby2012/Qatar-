import React from 'react';

const personal = [
    {
        "name": "starter",
        "price": "100 - $1,499"
    },
    {
        "name": "silver",
        "price": "1,500 - $4,999"
    },
    {
        "name": "gold",
        "price": "5,000 - unlimited"
    }
]

const Plans = () => {
    return (
        <section className="plan" id="plans">
            <div className="about-hd">
                <h2 className="about-hd-h2">investment plan</h2>
                <p className="about-hd-p plan-hd-p">
                    To make a solid investment, you have to know
                    where you are investing
                    <span>
                        find a plan which is best for you.
                    </span>
                </p>
            </div>

            <div className="plan_cards">
                <div className="plan_card">
                    <h1 className="plan_cardText">{personal[0].name}</h1>
                    <h5 className="plan_cardPlan">${personal[0].price}</h5>
                    <div>
                        <p className="plan-text">
                            Choose an account size and reach the maximum profit target. Trade all available assets. Your trading style is completely up to you!
                        </p>
                    </div>
                    <div className="plan-button">
                        <button className="plan-btn">start now</button>
                    </div>
                </div>

                <div className="plan_card plan_card-diff">
                    <h1 className="plan_cardText">{personal[1].name}</h1>
                    <h5 className="plan_cardPlan">${personal[1].price}</h5>
                    <div>
                        <p className="plan-text">
                            Continue trading with the account and prove you weren’t just lucky in this phase. You will keep up to 30% of reached min. profit target.
                        </p>
                    </div>
                    <div className="plan-button">
                        <button className="plan-btn">start now</button>
                    </div>
                </div>

                <div className="plan_card">
                    <h1 className="plan_cardText">{personal[2].name}</h1>
                    <h5 className="plan_cardPlan">${personal[2].price}</h5>
                    <div>
                        <p className="plan-text">
                            Gold pack for masters, Your commission is up to 67% of all profits made after each trading period. 
                        </p>
                    </div>
                    <div className="plan-button">
                        <button className="plan-btn" style={{ marginTop: "30px" }}>start now</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Plans;
