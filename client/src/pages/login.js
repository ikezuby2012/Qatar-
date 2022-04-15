import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";
import { Link } from "react-router-dom";

import Authlayout from '../components/auth/authLayout';
import AuthPopup from '../components/utils/authPopup';

const Login = ({ history }) => {
    const dispatch = useDispatch();
    const userObj = useSelector((state) => state.user);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [nameMsg, setNameMsg] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

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

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value !== "" && e.target.value !== null) {
            setPassword(e.target.value);
            setPasswordError(false);
            setIsDisabled(false);
        } else {
            setPasswordError(true);
        }

        // if (emailError && passwordError) {
        //     setIsDisabled(false);
        // }
    }
    const onSubmit = async (e) => {
        // console.log(userObj);
        e.preventDefault();
        // console.log("ok here")
        setLoading(true);
        console.log(passwordError, emailError);
        if (
            passwordError === false &&
            emailError === false
        ) {
            // console.log("here!");

            const data = {
                email,
                password
            };
            // console.log(data);
            dispatch(login(data))
                .then(() => {
                    // console.log("logged in");
                    history.push("/dashboard/home");
                    // window.location.reload();
                    setNameMsg("success");
                })
                .catch(() => {
                    setShowPopup(true);
                    setNameMsg("email and password not correct");
                });
            setLoading(false);
        } else {
            setShowPopup(true);
            setNameMsg("something went wrong!");
        }
    };

    const handleClose = () => setShowPopup(!showPopup);
    return (
        <Authlayout>
            {showPopup && <AuthPopup content={nameMsg} handleClose={() => handleClose()} />}
            <div className="signup">
                <h2>login account</h2>
                <form noValidate className={"signup-form"} onSubmit={(e) => onSubmit(e)}>
                    <div className="signup-div">
                        <div className="signup-form_group">
                            <input type="email"
                                onChange={(e) => onEmailChange(e)}
                                className="signup-form_input"
                                placeholder="email address"
                                id="email"
                                name={"email"}
                                required={true} />
                            <label htmlFor="email" className="signup-form_label">email address</label>
                            {
                                emailError ? (<p className="signup-warningText">
                                    please input a valid email address
                                </p>) : ""
                            }
                        </div>
                        <div className="signup-form_group">
                            <input type="password"
                                onChange={(e) => onPasswordChange(e)}
                                className="signup-form_input"
                                placeholder="Password"
                                id="password"
                                name={"password"}
                                required={true} />
                            <label htmlFor="password" className="signup-form_label">password</label>
                        </div>
                    </div>
                    <div className="signup-form_buttons">
                        <button className={`${isDisabled && "signup-disabled"} signup-form_btn`} type={"submit"} disabled={isDisabled}>
                            {loading ? <div className="loading-button" /> : "login"}
                        </button>
                    </div>
                    <div className="signup-alt_buttons">
                        <h4 className={"signup-text"}>
                            create an account? &nbsp;
                            <Link className={`signup-textLink`} to={"/signup/:id"}>signup</Link>
                        </h4>
                    </div>
                </form>
            </div>
        </Authlayout>
    );
}

export default Login;
