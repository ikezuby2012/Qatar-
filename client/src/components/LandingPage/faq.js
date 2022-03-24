import React, { useState } from 'react';

import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";

const plans = [
    {
        id: "20",
        plan: "20% after 24 hours",
        duration: "after 24 hours"
    },
    {
        id: "20",
        plan: "20% after 24 hours",
        duration: "after 24 hours"
    },
    {
        id: "20",
        plan: "20% after 24 hours",
        duration: "after 24 hours"
    },
    {
        id: "20",
        plan: "20% after 24 hours",
        duration: "after 24 hours"
    },
]

const Faq = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isPlanOpen, setIsOpenPlan] = useState(false)
    const [plan, setPlan] = useState("20% after 24 hours");
    const [value, setValue] = useState(0);
    const [deposit, setDeposit] = useState(0);

    const onToggleOpen1 = () => {
        setIsOpen1(!isOpen1);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(false);
    };

    const onToggleOpen2 = () => {
        setIsOpen1(false);
        setIsOpen2(!isOpen2);
        setIsOpen3(false);
        setIsOpen4(false);
    };

    const onToggleOpen3 = () => {
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(!isOpen3);
        setIsOpen4(false);
    };

    const onToggleOpen4 = () => {
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(!isOpen4);
    };

    const onTogglePlan = () => setIsOpenPlan(!isPlanOpen);

    const onChangePlan = (e) => {
        setPlan(e.target.value);
        setIsOpenPlan(false);
    }
    const accumulateValue = () => {
        let num;
        if (plan === "10% after 24 hours") {
            let depoNum = deposit * 1;
            num = depoNum + (depoNum * 10 / 100);
            setValue(num);
        }
        if (plan === "17% after 24 hours") {
            let depoNum = deposit * 1;
            num = depoNum + (depoNum * 17 / 100);
            setValue(num);
        }
        if (plan === "25% after 1 week") {
            let depoNum = deposit * 1;
            num = depoNum + (depoNum * 25 / 100);
            setValue(num);
        }
        if (plan === "37% after week") {
            let depoNum = deposit * 1;
            num = depoNum + (depoNum * 37 / 100);
            setValue(num);
        }
        if (plan === "45% after 1 month(s)") {
            let depoNum = deposit * 1;
            num = depoNum + (depoNum * 45 / 100);
            setValue(num);
        }
        if (plan === "67% after 1 month(s)") {
            let depoNum = deposit * 1;
            num = depoNum + (depoNum * 67 / 100);
            setValue(num);
        }
    }
    return (
        <section className="faq" id="faq">
            <div className="faq-padding">
                <div className="faq-box">
                    <h4 style={{ fontSize: "20px", color: "black" }}>
                        Frequently asked question
                    </h4>
                    <div className="faq-boxes">
                        <div className="faq-box">
                            <div className="faq-question">
                                <button
                                    className='faq-button'
                                    onClick={onToggleOpen1}
                                >
                                    <span className="faq-button-text">
                                        how can i make withdrawals?
                                    </span>

                                    <span>
                                        {isOpen1 ?
                                            <AiOutlineDown className="faq-icon" /> :
                                            <AiOutlineRight className="faq-icon" />}
                                    </span>
                                </button>
                            </div>
                            <div className={`faq-answer ${isOpen1 && "ds-block flipY"}`}>
                                <p>
                                    Profits can be required easily by submitting a request by way of the official withdrawal page.
                                </p>
                            </div>
                        </div>

                        <div className="faq-box">
                            <div className="faq-question">
                                <button
                                    className='faq-button'
                                    onClick={onToggleOpen2}
                                >
                                    <span className="faq-button-text">
                                        who manage the funds?
                                    </span>
                                    <span>
                                        {isOpen2 ?
                                            <AiOutlineDown className="faq-icon" /> :
                                            <AiOutlineRight className="faq-icon" />}
                                    </span>
                                </button>
                            </div>
                            <div className={`faq-answer ${isOpen2 && "ds-block flipY"}`}>
                                <p>
                                    All funds are managed by an experienced, in-house team comprised of lawyers, financial specialists, and trade analysts who work together to assist our clients in accomplishing optimal returns.
                                </p>
                            </div>
                        </div>

                        <div className="faq-box">
                            <div className="faq-question">
                                <button
                                    className='faq-button'
                                    onClick={onToggleOpen3}
                                >
                                    <span className="faq-button-text">
                                        what is the risk of my investment?
                                    </span>
                                    <span>
                                        {isOpen3 ?
                                            <AiOutlineDown className="faq-icon" /> :
                                            <AiOutlineRight className="faq-icon" />}
                                    </span>
                                </button>
                            </div>
                            <div className={`faq-answer ${isOpen3 && "ds-block flipY"}`}>
                                <p>
                                    There are always possible risks with any investment, however, we take a number of steps to mitigate these losses by way of our risk management team and other beneficial strategies.
                                </p>
                            </div>
                        </div>

                        <div className="faq-box">
                            <div className="faq-question">
                                <button
                                    className='faq-button'
                                    onClick={onToggleOpen4}
                                >
                                    <span className="faq-button-text">
                                        are profits paid directly to my account?
                                    </span>
                                    <span>
                                        {isOpen4 ?
                                            <AiOutlineDown className="faq-icon" /> :
                                            <AiOutlineRight className="faq-icon" />}
                                    </span>
                                </button>
                            </div>
                            <div className={`faq-answer ${isOpen4 && "ds-block flipY"}`}>
                                <p>
                                    No, they accumulate on the site account where you can then make withdrawals from
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq-box-1">
                    <div className="faq-calc">
                        <div className="faq-calc-hdText">
                            profit calculator
                        </div>
                        <div className="faq-calc-group">
                            <label htmlFor="calc" className="faq-calc-label">deposit amount</label>
                            <input
                                type="number"
                                id="calc"
                                onChange={(e) => setDeposit(e.target.value)}
                                placeholder={"$100.00"}
                                className="faq-calc-input"
                            />
                        </div>
                        <div className="faq-calc-plans">
                            <h2>select plan</h2>
                            <button
                                className='faq-calc-button'
                                onClick={onTogglePlan}

                            >
                                <span className="faq-button-text">
                                    {plan}
                                </span>
                                <span>
                                    {isPlanOpen ?
                                        <AiOutlineDown className="faq-icon" /> :
                                        <AiOutlineRight className="faq-icon" />}
                                </span>
                            </button>
                            <div className={`faq-calc-dropdown ${isPlanOpen && "ds-block flipY"}`}>
                                <ul>
                                    <li>
                                        <button
                                            id="20"
                                            name="ok"
                                            className="faq-calc-button"
                                            value={"10% after 24 hours"}
                                            onClick={(e) => onChangePlan(e)}
                                        >
                                            10% after 24 hours
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            id="45"
                                            className="faq-calc-button"
                                            value={"17% after 24 hours"}
                                            onClick={(e) => onChangePlan(e)}
                                        >
                                            17% after 24 hours
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            id="50"
                                            className="faq-calc-button"
                                            value="25% after 1 week"
                                            onClick={(e) => onChangePlan(e)}
                                        >
                                            25% after 1 week
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            id="60"
                                            className="faq-calc-button"
                                            value="37% after 1 week"
                                            onClick={(e) => onChangePlan(e)}
                                        >
                                            37% after 1 week
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            id="70"
                                            className="faq-calc-button"
                                            value={"45% after 1 month(s)"}
                                            onClick={(e) => onChangePlan(e)}
                                        >
                                            45% after 1 month(s)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            id="90"
                                            className="faq-calc-button"
                                            value={"67% after 1 month(s)"}
                                            onClick={(e) => onChangePlan(e)}
                                        >
                                            67% after 1 month(s)
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="faq-calc-earning">
                            <span>potential earning: </span>
                            <span>$ {value}</span>
                        </div>
                        <button className="faq-calc-earning-btn" onClick={accumulateValue}>
                            calculate
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
