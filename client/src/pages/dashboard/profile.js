import React, {  useState } from 'react';
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { updateMe } from '../../actions/auth';
import { createNewWallet } from '../../actions/wallet';

import MainLayout from '../../components/dashboard/MainLayout';
import NotiPopup from "../../components/utils/notiPopup";

const Profile = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const { data } = useSelector(state => state.wallet);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [btcAddress, setBtcAddress] = useState(user.bitcoin);
    const [btcError, setBtcError] = useState(false);
    const [ethAddress, setEthAddress] = useState(user.ethereum);
    const [ethError, setEthError] = useState(false);
    const [bnbAddress, setBnbAddress] = useState(user.usdt);
    const [usdtAddress, setUsdtAddress] = useState(user.bnb);
    const [phoneNumber, setPhoneNumber] = useState(user.phone_number);
    const [loading, setLoading] = useState(false);
    // const [nameMsg, setNameMsg] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [popup, setPopup] = useState(false);
    const [color, setColor] = useState("");
    const [content, setContent] = useState("");

    console.log(data);
    // useEffect(() => {
    //     return () => {
    //         dispatch(getUserWallet(user.id));
    //     }
    // }, []);

    // useEffect(() => {
    //     const fetchData = () => {
    //         try {
    //             dispatch(getUserWallet(user.id));
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     fetchData();
    // }, []);

    const onEmailChange = (e) => {
        setEmail(e.target.value);
        const pattern =
            /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        if (pattern.test(e.target.value)) {
            e.persist();
            setEmail(e.target.value);
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    };

    const onBtcChange = (e) => {
        setBtcAddress(e.target.value);
        if (e.target.name === "btc") {
            if (validator.isBtcAddress(e.target.value)) {
                setBtcAddress(e.target.value);
                setBtcError(false)
            } else {
                setBtcError(true);
            }
        }
    }
    const onEthChange = (e) => {
        setEthAddress(e.target.value);
        if (e.target.name === "eth") {
            if (validator.isEthereumAddress(e.target.value)) {
                setEthAddress(e.target.value);
                setEthError(false);
            } else {
                setEthError(true);
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(false);
        if (
            btcError === false &&
            ethError === false &&
            emailError === false
        ) {
            const data = {
                name,
                email,
                phone_number: phoneNumber,
                ethereum: ethAddress,
                bitcoin: btcAddress,
                bnb: bnbAddress,
                usdt: usdtAddress
            }
            console.log(data);
            dispatch(updateMe(data))
                .then(() => {
                    setColor("success");
                    setContent("data uploaded successfully!");
                    setPopup(true);
                    window.location.reload();
                })
                .catch(err => {
                    setColor("danger");
                    setContent("data upload failed!");
                    setPopup(true);
                });
            setLoading(false);
        }
    }

    const onCreate = (e) => {
        e.preventDefault();
        console.log("ok here");
        setLoading(true);

        // const payload = {
        //     user: user.id
        // }
        dispatch(createNewWallet({
            user: user.id
        }))
            .then(() => {
                setColor("success");
                setContent("done!");
                setPopup(true);
            })
            .catch(err => {
                setColor("danger");
                setContent("failed!");
                setPopup(true);
            });
        setLoading(false);
    }
    if (popup)
        setTimeout(() => {
            setPopup(false);
        }, 5000);

    return (
        <MainLayout>
            {popup && <NotiPopup content={content} color={color} />}
            <div className="profile dashWithdrawal">
                <div className="profile-padding dashWithdrawal-padding">
                    <h2 className="dashWithdrawal-hdText">profile information</h2>
                    <div className="profile-group">
                        <form onSubmit={(e) => onSubmit(e)} className="">
                            <h3>name
                                <span style={{ color: "red" }}>*</span>
                            </h3>
                            <div className="signup-form_group">
                                <input type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    className="signup-form_input"
                                    placeholder="name"
                                    id="name"
                                    name={"name"}
                                    defaultValue={user ? user.name : ""}
                                    required={true} />
                                <label htmlFor="name" className="signup-form_label">name</label>
                            </div>

                            <h3>email
                                <span style={{ color: "red" }}>*</span>
                            </h3>
                            <div className="signup-form_group">
                                <input type="email"
                                    onChange={(e) => onEmailChange(e)}
                                    className="signup-form_input"
                                    placeholder="email"
                                    id="email"
                                    name={"email"}
                                    defaultValue={user ? user.email : ""}
                                    required={true} />
                                <label htmlFor="email" className="signup-form_label">email</label>
                                <div className="">
                                    {emailError && <span>please provide a valid bitcoin address</span>}
                                </div>
                            </div>

                            <h3>
                                phone number
                            </h3>
                            <div className="signup-form_group">
                                <input type="number"
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="signup-form_input"
                                    placeholder="phone number"
                                    id="number"
                                    defaultValue={user ? user.phone_number : ""}
                                    name={"name"}
                                // required={true}
                                />
                                <label htmlFor="number" className="signup-form_label">phone number</label>
                            </div>

                            <h3>bitcoin address
                                <span style={{ color: "red" }}>*</span>
                            </h3>
                            <div className="signup-form_group">
                                <input type="text"
                                    onChange={(e) => onBtcChange(e)}
                                    className="signup-form_input"
                                    placeholder="bitcoin address"
                                    id="number"
                                    defaultValue={user ? user.bitcoin : ""}
                                    name={"btc"}
                                // required={true}
                                />
                                <label htmlFor="number" className="signup-form_label">bitcoin address</label>
                                <div className="">
                                    {btcError && <span>please provide a valid bitcoin address</span>}
                                </div>
                            </div>

                            <h3>etheruem address
                                <span style={{ color: "red" }}>*</span>
                            </h3>
                            <div className="signup-form_group">
                                <input type="text"
                                    onChange={(e) => onEthChange(e)}
                                    className="signup-form_input"
                                    placeholder="ethereum address"
                                    id="eth"
                                    defaultValue={user ? user.ethereum : ""}
                                    name={"eth"}
                                // required={true}
                                />
                                <label htmlFor="eth" className="signup-form_label">ethereum address</label>
                                <div className="">
                                    {ethError && <span>please provide a valid ethereum address</span>}
                                </div>
                            </div>

                            <h3>Bnb address
                                <span style={{ color: "red" }}>*</span>
                            </h3>
                            <div className="signup-form_group">
                                <input type="text"
                                    onChange={(e) => setBnbAddress(e.target.value)}
                                    className="signup-form_input"
                                    placeholder="bnb address"
                                    id="bnb"
                                    defaultValue={user ? user.bnb : ""}
                                    name={"bnb"}
                                // required={true}
                                />
                                <label htmlFor="bnb" className="signup-form_label">bnb address</label>
                            </div>

                            <h3>Tether address
                                <span style={{ color: "red" }}>*</span>
                            </h3>
                            <div className="signup-form_group">
                                <input type="text"
                                    onChange={(e) => setUsdtAddress(e.target.value)}
                                    className="signup-form_input"
                                    placeholder="bnb address"
                                    id="usdt"
                                    defaultValue={user ? user.usdt : ""}
                                    name={"usdt"}
                                // required={true}
                                />
                                <label htmlFor="usdt" className="signup-form_label">usdt address</label>
                            </div>
                            <button
                                className="dashDeposit-form_btn">
                                save
                            </button>
                        </form>
                    </div>
                    <div className="profile-box">
                        <h2 className="dashWithdrawal-hdText">account information</h2>
                        {Object.keys(data).length !== 0 ?
                            <div className="profile-box-textBox">
                                <h2 style={{fontSize: "17px"}}>
                                    <span>Balance </span>
                                    {/* <span>$ { data.balance}</span> */}
                                    <span>$ {data.data !== undefined ? data.data.balance : "0"}</span>
                                </h2>
                            </div> :
                            <button
                                className="dashDeposit-form_btn"
                                onClick={(e) => onCreate(e)}
                            >
                                create new wallet
                            </button>
                        }
                    </div>
                </div>
            </div>
        </MainLayout >
    );
}

export default Profile;
