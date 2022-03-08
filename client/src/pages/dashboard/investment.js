import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { investFund } from '../../actions/trx';

import MainLayout from '../../components/dashboard/MainLayout';
import Popup from '../../components/utils/Popup';
import NotiPopup from "../../components/utils/notiPopup";

import {
    Lock, CheckCircleOutline, Cancel
} from "@material-ui/icons";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
const personal = [
    {
        "name": "starter",
        "price": "20% (24 hours)",
        "min": "100",
        "max": "999",
        "trade_duration": "24 hours"
    },
    {
        "name": "cooper",
        "price": "45% (24 hours)",
        "min": "1000",
        "max": "2999",
        "trade_duration": "24 hours"
    },
    {
        "name": "enthusiast",
        "price": "50% weekly profit",
        "min": "3000",
        "max": "4999",
        "trade_duration": "1 month"
    },
    {
        "name": "silver",
        "price": "60% weekly profit",
        "min": "3000",
        "max": "4999",
        "trade_duration": "3 month(s)"
    },
    {
        "name": "gold",
        "price": "70% weekly profit",
        "min": "5000",
        "max": "unlimited",
        "trade_duration": "5 month(s)"
    },
    {
        "name": "diamond",
        "price": "90% weekly profit",
        "min": "9000",
        "max": "unlimited",
        "trade_duration": "9 month(s)"
    }
]

const Investment = () => {
    const { data } = useSelector(state => state.wallet);
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const [plan, setPlan] = useState("20% after 24 hours");
    const [value, setValue] = useState(0);
    const [isPlanOpen, setIsOpenPlan] = useState(false)
    const [deposit, setDeposit] = useState(0);
    const [investment, setInvestment] = useState("");
    const [earning, setEarning] = useState(0);
    const [popup, setPopup] = useState(false);
    const [disable, setDisable] = useState(false);
    const [color, setColor] = useState("");
    const [content, setContent] = useState("");

    const openModal = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        setPlan(e.target.id);
        setShowModal(true);
    }

    const handleClose = () => setShowModal(!showModal);
    const onTogglePlan = () => setIsOpenPlan(!isPlanOpen);
    const onChangePlan = (e) => {
        setPlan(e.target.value);
        setIsOpenPlan(false);
    }

    let balance
    if (data.data !== undefined) {
        balance = data.data.balance
    }
    const onSubmit = (e) => {
        e.preventDefault();
        let amount = value * 1;

        // {
        //     "user": "620ea2428f3ebd0f53c500d3",
        //     "amount": 700,
        //     "transaction_type": "investment",
        //     potential_earning,
        //investment_plan,
        //payment_status: "pending"
        // }
        console.log("it's here")

        const data = {
            user: user.id,
            amount,
            transaction_type: "investment",
            potential_earning: earning,
            investment_plan: investment,
            payment_status: "pending"
        }
        // console.log(data);
        if (data) {

            setShowModal(false);
            if (amount > balance) {
                console.log("here");
                setColor("danger");
                setContent("insufficient fund!");
                setPopup(true);
                setDisable(true);
            } else {
                setDisable(false);

                dispatch(investFund(data))
                    .then(() => {
                        setColor("success");
                        setContent("data uploaded successfully!");
                        setPopup(true);
                    })
                    .catch(err => {
                        setColor("danger");
                        setContent("data upload failed!");
                        setPopup(true);
                    });

            }
        }
        setDisable(false);
    }
    useEffect(() => {
        let num;
        if (plan === "20% after 24 hours") {
            let depoNum = value * 1;
            num = depoNum + (depoNum * 20 / 100);
            setEarning(num);
            setInvestment("starter");
        }
        if (plan === "45% after 24 hours") {
            let depoNum = value * 1;
            num = depoNum + (depoNum * 45 / 100);
            setEarning(num);
            setInvestment(personal[1].name);
        }
        if (plan === "50% after 1 month") {
            setInvestment(personal[2].name);
            let depoNum = value * 1;
            num = depoNum + (depoNum * 50 / 100);
            setEarning(num);
        }
        if (plan === "60% after 3 month(s)") {
            setInvestment(personal[3].name);
            let depoNum = value * 1;
            num = depoNum + (depoNum * 60 / 100);
            setEarning(num);
        }
        if (plan === "70% after 5 month(s)") {
            setInvestment(personal[4].name);
            let depoNum = value * 1;
            num = depoNum + (depoNum * 70 / 100);
            setEarning(num);
        }
        if (plan === "90% after 9 month(s)") {
            setInvestment(personal[5].name);
            let depoNum = value * 1;
            num = depoNum + (depoNum * 90 / 100);
            setEarning(num);
        }
    }, [value, plan])

    if (popup)
        setTimeout(() => {
            setPopup(false);
        }, 5000);

    return (
        <MainLayout>
            {popup && <NotiPopup content={content} color={color} />}
            {
                showModal && <Popup>
                    <div className="dashDeposit-Popup">
                        <div className="dashDeposit-Popup-hdText">
                            <div>&nbsp;</div>
                            <span>investment method</span>
                            <div className="dashDeposit-Popup-secure">
                                <Lock className="dashDeposit-Popup-secure-icon" />
                                <span>secure</span>
                            </div>
                        </div>
                        <div className="dashinvest">
                            <div className="dashinvest-boxes">
                                <div className="dashinvest-box">
                                    <h4>
                                        <span>wallet balance: </span>
                                        <span>$ {data.data !== undefined ? data.data.balance : "0"}</span>
                                    </h4>
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
                                                    value={"20% after 24 hours"}
                                                    onClick={(e) => onChangePlan(e)}
                                                >
                                                    20% after 24 hours
                                                </button>
                                            </li>

                                            <li>
                                                <button
                                                    id="45"
                                                    className="faq-calc-button"
                                                    value={"45% after 24 hours"}
                                                    onClick={(e) => onChangePlan(e)}
                                                >
                                                    45% after 24 hours
                                                </button>
                                            </li>

                                            <li>
                                                <button
                                                    id="50"
                                                    className="faq-calc-button"
                                                    value="50% after 1 month"
                                                    onClick={(e) => onChangePlan(e)}
                                                >
                                                    50% after 1 month
                                                </button>
                                            </li>

                                            <li>
                                                <button
                                                    id="60"
                                                    className="faq-calc-button"
                                                    value="60% after 3 month(s)"
                                                    onClick={(e) => onChangePlan(e)}
                                                >
                                                    60% after 3 month(s)
                                                </button>
                                            </li>

                                            <li>
                                                <button
                                                    id="70"
                                                    className="faq-calc-button"
                                                    value={"70% after 5 month(s)"}
                                                    onClick={(e) => onChangePlan(e)}
                                                >
                                                    70% after 5 month(s)
                                                </button>
                                            </li>

                                            <li>
                                                <button
                                                    id="90"
                                                    className="faq-calc-button"
                                                    value={"90% after 9 month(s)"}
                                                    onClick={(e) => onChangePlan(e)}
                                                >
                                                    90% after 9 month(s)
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                {/* <div className="dashinvest-box"> */}
                                <form
                                    noValidate
                                    onSubmit={(e) => onSubmit(e)}
                                    className="dashDeposit-form dashDeposit-Popup-form">
                                    <label
                                        htmlFor="cur"
                                        className="dashDeposit-label"
                                    >Amount to invest-minimum is $100</label>
                                    <input
                                        type="number"
                                        min={100}
                                        onChange={(e) => setValue(e.target.value)}
                                        placeholder='$100.00'
                                        id="cur"
                                        className="dashDeposit-input dashinvest-input"
                                    />
                                    <div className="form-buttons">
                                        <button className="form-btn form-btn-1">
                                            <CheckCircleOutline className="form-icon-blue" />
                                            <span>send</span>
                                        </button>

                                        <button className="form-btn form-btn-2" onClick={() => handleClose()}>
                                            <Cancel className="form-icon-red" />
                                            <span>cancel</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </Popup>
            }
            <div className="dashInvestment">
                <div className="dashInvestment-plans">
                    <div className="plan-card">
                        <h1 className="plan-cardText">{personal[0].name}</h1>
                        <h5 className="plan-cardPlan">{personal[0].price}</h5>
                        <div className="plan-details">
                            <ul>
                                <li>minimum: ${personal[0].min}</li>
                                <li>maximum: ${personal[0].max}</li>
                                <li>all payment system</li>
                                <li>25% customer support</li>
                                <li>trade duration: {personal[0].trade_duration}</li>
                            </ul>
                        </div>
                        <div className="plan-button">
                            <button
                                id="20% after 24 hours"
                                onClick={(e) => openModal(e)}
                                className="plan-btn">
                                start now
                            </button>
                        </div>
                    </div>

                    <div className="plan-card">
                        <h1 className="plan-cardText">{personal[1].name}</h1>
                        <h5 className="plan-cardPlan">{personal[1].price}</h5>
                        <div className="plan-details">
                            <ul>
                                <li>minimum: ${personal[1].min}</li>
                                <li>maximum: ${personal[1].max}</li>
                                <li>all payment system</li>
                                <li>50% customer support</li>
                                <li>trade duration: {personal[1].trade_duration}</li>
                            </ul>
                        </div>
                        <div className="plan-button">
                            <button
                                id="45% after 24 hours"
                                onClick={(e) => openModal(e)}
                                className="plan-btn">start now</button>
                        </div>
                    </div>

                    <div className="plan-card">
                        <h1 className="plan-cardText">{personal[2].name}</h1>
                        <h5 className="plan-cardPlan">{personal[2].price}</h5>
                        <div className="plan-details">
                            <ul>
                                <li>minimum: ${personal[2].min}</li>
                                <li>maximum: ${personal[2].max}</li>
                                <li>all payment system</li>
                                <li>customer support</li>
                                <li>trade duration: {personal[2].trade_duration}</li>
                            </ul>
                        </div>
                        <div className="plan-button">
                            <button
                                id="50% after 1 month"
                                onClick={(e) => openModal(e)}
                                className="plan-btn">start now</button>
                        </div>
                    </div>

                    <div className="plan-card">
                        <h1 className="plan-cardText">{personal[3].name}</h1>
                        <h5 className="plan-cardPlan">{personal[3].price}</h5>
                        <div className="plan-details">
                            <ul>
                                <li>minimum: ${personal[3].min}</li>
                                <li>maximum: ${personal[3].max}</li>
                                <li>all payment system</li>
                                <li>customer support</li>
                                <li>trade duration: {personal[3].trade_duration}</li>
                            </ul>
                        </div>
                        <div className="plan-button">
                            <button
                                id="60% after 3 month(s)"
                                onClick={(e) => openModal(e)}
                                className="plan-btn">start now</button>
                        </div>
                    </div>

                    <div className="plan-card">
                        <h1 className="plan-cardText">{personal[4].name}</h1>
                        <h5 className="plan-cardPlan">{personal[4].price}</h5>
                        <div className="plan-details">
                            <ul>
                                <li>minimum: ${personal[4].min}</li>
                                <li>maximum: {personal[4].max}</li>
                                <li>all payment system</li>
                                <li>customer support</li>
                                <li>trade duration: {personal[4].trade_duration}</li>
                            </ul>
                        </div>
                        <div className="plan-button">
                            <button
                                id="70% after 5 month(s)"
                                onClick={(e) => openModal(e)}
                                className="plan-btn">start now</button>
                        </div>
                    </div>

                    <div className="plan-card">
                        <h1 className="plan-cardText">{personal[5].name}</h1>
                        <h5 className="plan-cardPlan">{personal[5].price}</h5>
                        <div className="plan-details">
                            <ul>
                                <li>minimum: ${personal[5].min}</li>
                                <li>maximum: {personal[5].max}</li>
                                <li>all payment system</li>
                                <li>customer support</li>
                                <li>trade duration: {personal[5].trade_duration}</li>
                            </ul>
                        </div>
                        <div className="plan-button">
                            <button
                                id="90% after 9 month(s)"
                                onClick={(e) => openModal(e)}
                                className="plan-btn">start now</button>
                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}

export default Investment;
