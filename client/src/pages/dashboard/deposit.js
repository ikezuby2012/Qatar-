import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { depositFund } from '../../actions/trx';

import Popup from '../../components/utils/Popup';
import NotiPopup from "../../components/utils/notiPopup";
import MainLayout from '../../components/dashboard/MainLayout';

import qrBtc from "../../utils/qrbtc.jpg";

import Icon from "react-crypto-icons";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import {
    Lock, CheckCircleOutline, Cancel, FeaturedPlayList
} from "@material-ui/icons";

const Deposit = () => {

    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [payment, setPayment] = useState("BTC");
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [value, setValue] = useState(0);
    const [trx, setTrx] = useState("");
    const [copyStatus, setCopyStatus] = useState(false);
    const textAreaRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [popup, setPopup] = useState(false);
    const [color, setColor] = useState("");
    const [content, setContent] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            user: user.id,
            transaction_id: trx,
            payment_method: payment,
            amount: value * 1,
            transaction_type: "deposit"
        }
        console.log(data);
        // console.log("ok from data");
        if (data) {
            dispatch(depositFund(data))
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
            setLoading(false);
            setShowModal(false);
        } else {

        }
    }

    const handleClose = () => setShowModal(!showModal);

    const openModal = (e) => {
        e.preventDefault();
        // console.log(e.target.id);
        setShowModal(true);
    }

    const onToggleOpen = () => setIsOpen(!isOpen);

    const onCopy = (e) => {
        e.preventDefault();
        textAreaRef.current.select();
        document.execCommand("copy");
        e.target.focus();
        setCopyStatus(true);
    }
    const onChange = (e) => {
        // console.log(e.target.id);
        setPayment(e.target.id);
        setIsOpen(false);
    }

    if (popup)
        setTimeout(() => {
            setPopup(false);
        }, 5000);

    return (
        <MainLayout>
            {popup && <NotiPopup content={content} color={color} />}
            {showModal && <Popup>
                <div className="dashDeposit-Popup">
                    <div className="dashDeposit-Popup-hdText">
                        <div>&nbsp;</div>
                        <span>deposit fund</span>
                        <div className="dashDeposit-Popup-secure">
                            <Lock className="dashDeposit-Popup-secure-icon" />
                            <span>secure</span>
                        </div>
                    </div>
                    <div className="dashDeposit-Popup-box">
                        <h2 style={{ textAlign: "center" }}>Your deposit will be approved shorted after receiving your payment</h2>
                        <div className='invoice'>
                            <div className="current-dashDeposit">
                                <h4>current Deposit</h4>
                                <h5>${value} worth of {payment}</h5>
                            </div>

                            <div className="current-dashDeposit">
                                <h4>next invoice</h4>
                                <h5>{new Date().toLocaleDateString()}</h5>
                            </div>
                        </div>

                        <form noValidate className="dp-form">
                            <div className="dp-form-group">
                                <label className="dp-form-label" htmlFor="eth_add">ethereum address</label>
                                <input type="text"
                                    defaultValue={"0x5f6d4g57n747dbf6r7f74f7rf7nfbf6f6f6bf6de3j7eb"}
                                    className="dp-form-input form-input"
                                    placeholder="transaction id"
                                    contentEditable={false}
                                    id="eth_add"
                                    ref={textAreaRef}
                                    // value={email} error={errors.email}
                                    required={true}
                                />
                                <button onClick={onCopy} className="dp-form-btn">
                                    copy
                                </button>
                                {copyStatus && <p>text copied to clipboard!</p>}
                            </div>
                        </form>

                        <figure className="dp-figure">
                            <img src={qrBtc} alt="qr_code" className="dp-img" />
                        </figure>

                        <form onSubmit={(e) => onSubmit(e)} className="dashDeposit-Popup-form">
                            <div className="form-group">
                                <FeaturedPlayList />
                                <input type="text"
                                    onChange={(e) => setTrx(e.target.value)}
                                    className="form-input"
                                    placeholder="transaction id"
                                    id="trx_id"
                                    // value={email} error={errors.email}
                                    required={true}
                                />
                            </div>
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
            </Popup>}
            <div className="dashDeposit">
                <div className="dashDeposit-box">
                    <div className="dashDeposit-box-title">
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

                    <div className="dashDeposit-payment">
                        <div className="dashDeposit-div">
                            <form onSubmit={(e) => openModal(e)} className="dashDeposit-form">
                                <label
                                    htmlFor="cur"
                                    className="dashDeposit-label"
                                >Amount to deposit</label>
                                <input
                                    type="number"
                                    min={100}
                                    onChange={(e) => setValue(e.target.value)}
                                    placeholder='100.00'
                                    id="cur"
                                    className="dashDeposit-input"
                                />
                                <button
                                    className="dashDeposit-form_btn">
                                    pay
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Deposit;
