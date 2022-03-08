import React from 'react';

const personal = [
    {
        "name": "starter",
        "price": "100 - $500"
    },
    {
        "name": "silver",
        "price": "500 - $1,500"
    },
    {
        "name": "enthusiast",
        "price": "1,500 - $5000"
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
                            Lorem, ipsum dolor sit amet consectetur  rtlStyle weight keys dku form
                            adipisicing elit. Reiciendis commodi  distinctio!
                            market
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
                            Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Reiciendis commodi javascript feil switcher tempore distinctio!
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
                            Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Reiciendis commodi javascript feil switcher tempore distinctio!
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
