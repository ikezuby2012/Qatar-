import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../actions/auth";
import validator from "validator";
import { NavLink, Link, useParams } from "react-router-dom";

import Authlayout from '../components/auth/authLayout';
import AuthPopup from '../components/utils/authPopup';

const Signup = ({ history }) => {
    let { id } = useParams();
    const dispatch = useDispatch();
    let userObj;
    userObj = useSelector((state) => state.user);
    const [state, setState] = useState({
        email: "",
        name: "",
    });
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [nameMsg, setNameMsg] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordConfirmError, setPasswordConfirmError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [reff, setReff] = useState(null);


    useEffect(() => {
        if (validator.isMongoId(id)) {
            setReff(id);
        }
    }, [id]);

    const onEmailChange = (e) => {
        setState((state) => ({
            ...state,
            email: e.target.value
        }));
        const pattern =
            /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        if (pattern.test(e.target.value)) {
            e.persist();
            // console.log("hit here!");
            setState((state) => ({
                ...state,
                email: e.target.value
            }));
            // setEmail(mail);
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    };

    const onNameChange = (e) => {
        setState((state) => ({
            ...state,
            name: e.target.value
        }));
        let namePattern = /^[a-zA-Z][a-zA-Z\s]*$/g;
        if (e.target.value !== "" && e.target.value !== null) {
            if (namePattern.test(e.target.value)) {
                e.persist();
                setState((state) => ({
                    ...state,
                    name: e.target.value
                }));
            } else {
                setNameError(true);
                setNameMsg("field should contain valid string");
            }
        }
        if (nameError === false &&
            passwordError === false &&
            emailError === false &&
            passwordConfirmError === false) {
            setIsDisabled(false);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (password !== passwordConfirm) {
            setPasswordError(true);
            setPasswordConfirmError(true);
        }
        if (
            nameError === false &&
            passwordError === false &&
            emailError === false &&
            passwordConfirmError === false
        ) {
            // console.log("here!");

            const data = {
                name: state.name,
                email: state.email,
                password: password,
                passwordConfirm: passwordConfirm,
                referrals: reff
            };
            console.log(data);
            dispatch(signUp(data))
                .then(() => {
                    // console.log(res);
                    // console.log(userObj);
                    history.push("/login");
                    // window.location.reload();
                    setNameMsg("success");
                })
                .catch((err) => {
                    // console.log(userObj.message);
                    setShowPopup(true);
                    setNameMsg(userObj.message);
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
                <h2>create account</h2>
                <form noValidate className={"signup-form"} onSubmit={(e) => onSubmit(e)}>
                    <div className="signup-div">
                        <div className="signup-form_group">
                            <input type="text"
                                onChange={(e) => onNameChange(e)}
                                className="signup-form_input"
                                placeholder="Full name"
                                id="name"
                                name={"name"}
                                required={true} />
                            <label htmlFor="name" className="signup-form_label">Full name</label>
                            {
                                nameError ? (<p className="login-warningText">
                                    {nameMsg}
                                </p>) : ""
                            }
                        </div>
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
                                onChange={(e) => setPassword(e.target.value)}
                                className="signup-form_input"
                                placeholder="Password"
                                id="password"
                                name={"password"}
                                required={true} />
                            <label htmlFor="password" className="signup-form_label">password</label>
                        </div>
                        <div className="signup-form_group">
                            <input type="password"
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                                className="signup-form_input"
                                placeholder="confirm Password"
                                id="passwordConfirm"
                                name="passwordConfirm"
                                required={true} />
                            <label htmlFor="passwordConfirm" className="signup-form_label">confirm password</label>
                            {
                                password !== passwordConfirm && (<p className="signup-warningText">
                                    both password does not match!
                                </p>)
                            }
                        </div>
                    </div>
                    <div className="signup-form_buttons">
                        <button className={`${isDisabled && "signup-disabled"} signup-form_btn`} type={"submit"} disabled={isDisabled}>
                            {loading ? <div className="loading-button" /> : "signup"}
                        </button>
                    </div>
                    <div className="signup-alt_buttons">
                        <h4 className={"signup-text"}>
                            already have an account? &nbsp;
                            <Link className={`signup-textLink`} to={"/login"}>log in</Link>
                        </h4>
                    </div>
                </form>
            </div>
        </Authlayout>
    );
}

export default Signup;
