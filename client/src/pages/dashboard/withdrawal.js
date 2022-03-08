import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { withdrawFund } from '../../actions/trx';

import NotiPopup from "../../components/utils/notiPopup";
import MainLayout from '../../components/dashboard/MainLayout';

import Icon from "react-crypto-icons";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";

const Withdrawal = () => {
    const { user } = useSelector((state) => state.user);
    const { data } = useSelector(state => state.wallet);

    const dispatch = useDispatch();

    const [payment, setPayment] = useState("BTC");
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [popup, setPopup] = useState(false);
    const [color, setColor] = useState("");
    const [content, setContent] = useState("");
    const [value, setValue] = useState(0);
    const [withAdd, setWithAdd] = useState("");
    const [disabled, setDisabled] = useState(false);

    const onToggleOpen = () => setIsOpen(!isOpen);

    const onChange = (e) => {
        // console.log(e.target.id);
        setPayment(e.target.id);
        setIsOpen(false);
    }
    let balance
    if (data.data !== undefined) {
        balance = data.data.balance
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        //     "user": "620ea2428f3ebd0f53c500d3",
        // "amount": 700,
        // "transaction_type": "withdrawal",
        // "withdrawal_address":"89998888dyuioikos",
        // "payment_method":"usdt"

        const data = {
            user: user.id,
            amount: value,
            transaction_type: "withdrawal",
            withdrawal_address: withAdd,
            payment_method: payment
        }
        console.log(data);
        if (data) {
            // console.log(value, balance);
            if (value > balance) {
                console.log("here");
                setColor("danger");
                setContent("insufficient fund!");
                setPopup(true);
                setDisabled(true);
            } else {
                setDisabled(false);

                dispatch(withdrawFund(data))
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

            setLoading(false);
        } else {

        }
        setDisabled(false);
    }

    if (popup)
        setTimeout(() => {
            setPopup(false);
        }, 5000);
    // console.log(disabled);
    // setDisabled(false);
    return (
        <MainLayout>
            {popup && <NotiPopup content={content} color={color} />}
            <div className="dashWithdrawal">
                <div className="dashWithdrawal-padding">
                    <h2 className="dashWithdrawal-hdText">
                        withdrawal method
                    </h2>
                    <div className="dashWithdrawal-box">
                        <div className="dashWithdrawal-group">
                            <form className="dashWithdrawal-form">
                                <label htmlFor="with_id" className="dashWithdrawal-label">withdrawal charges</label>
                                <input type="number" defaultValue={"$0.00"}
                                    placeholder={"$0.00"}
                                    contentEditable={false}
                                    id="with_id" className="dashWithdrawal-input" />
                            </form>
                        </div>
                        <div className="dashWithdrawal-group">
                            <div className="dashWithdrawal-title">
                                <h2>select payment method</h2>
                            </div>
                            <div className="dashWithdrawal-payment">
                                <div className="dashWithdrawal-payment-title">
                                    <button
                                        className="dashWithdrawal-payment-btn"
                                        onClick={onToggleOpen}
                                    >
                                        <span className="span-btn">pay with {payment}</span>
                                        <span>
                                            {isOpen ?
                                                <AiOutlineDown className="dashWithdrawal-payment-icon" /> :
                                                <AiOutlineRight className="dashWithdrawal-payment-icon" />}
                                        </span>
                                    </button>
                                </div>
                                <div className={`dashWithdrawal-payment-dropdown  ${isOpen && "ds-block flipInY"}`}>
                                    <ul className="">
                                        <li>
                                            <button
                                                id="BTC"
                                                name="ok"
                                                className="dashWithdrawal-payment-btn"
                                                onClick={(e) => onChange(e)}
                                            >
                                                <span id="BTC">
                                                    <Icon name={"btc"} size="25" className="dashWithdrawal-payment-icon" />
                                                </span>
                                                <span id="BTC">btc</span>
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                id="ETH"
                                                className="dashWithdrawal-payment-btn"
                                                onClick={(e) => onChange(e)}
                                            >
                                                <span id="ETH">
                                                    <Icon name={"eth"} size="25" className="dashWithdrawal-payment-icon" />
                                                </span>
                                                <span id="ETH">eth</span>
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                id="USDT"
                                                className="dashWithdrawal-payment-btn"
                                                onClick={(e) => onChange(e)}
                                            >
                                                <span id="USDT">
                                                    <Icon name={"usdt"} size="25" className="dashWithdrawal-payment-icon" />
                                                </span>
                                                <span id="USDT">tether</span>
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                id="BNB"
                                                className="dashWithdrawal-payment-btn"
                                                onClick={(e) => onChange(e)}
                                            >
                                                <span id="BNB">
                                                    <Icon name={"bnb"} size="25" className="dashWithdrawal-payment-icon" />
                                                </span>
                                                <span id="BNB">bnb</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="dashWithdrawal-group">
                                <form className="dashWithdrawal-form">
                                    <label htmlFor="with_id" className="dashWithdrawal-label">destination address</label>
                                    <input type="text"
                                        contentEditable={false}
                                        onChange={(e) => setWithAdd(e.target.value)}
                                        placeholder={"wallet"}
                                        id="with_id" className="dashWithdrawal-input" />
                                </form>
                            </div>

                            <div className="dashWithdrawal-group">
                                <form className="dashWithdrawal-form">
                                    {payment === "BTC" && <>
                                        <label htmlFor="with_id" className="dashWithdrawal-label">bitcoin address</label>
                                        <input type="text" defaultValue={user ? user.bitcoin : ""}
                                            placeholder={`bitcoin address`}
                                            id="with_id" className="dashWithdrawal-input" />
                                    </>}

                                    {payment === "ETH" && <>
                                        <label htmlFor="with_id" className="dashWithdrawal-label">ethereum address</label>
                                        <input type="text" defaultValue={user ? user.ethereum : ""}
                                            placeholder={`ethereum address`}
                                            id="with_id" className="dashWithdrawal-input" />
                                    </>}

                                    {payment === "USDT" && <>
                                        <label htmlFor="with_id" className="dashWithdrawal-label">tether address</label>
                                        <input type="text"
                                            placeholder={`usdt address`}
                                            defaultValue={user ? user.usdt : ""}
                                            id="with_id" className="dashWithdrawal-input" />
                                    </>}

                                    {payment === "BNB" && <>
                                        <label htmlFor="with_id" className="dashWithdrawal-label">Binance cash address</label>
                                        <input type="text" defaultValue={user ? user.bnb : ""}
                                            placeholder={`bnb address`}
                                            id="with_id" className="dashWithdrawal-input" />
                                    </>}

                                </form>
                            </div>

                            <div className="dashDeposit-div">
                                <form className="dashDeposit-form" onSubmit={(e) => onSubmit(e)}>
                                    <label
                                        htmlFor="cur"
                                        className="dashDeposit-label"
                                    >Amount to withdraw</label>
                                    <input
                                        type="number"
                                        min={0}
                                        onChange={(e) => setValue(e.target.value)}
                                        placeholder='$100.00'
                                        id="cur"
                                        className="dashDeposit-input"
                                    />
                                    <button disabled={disabled}
                                        className="dashDeposit-form_btn">
                                        Withdraw Fund
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Withdrawal;
