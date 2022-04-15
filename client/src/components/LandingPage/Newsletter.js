import React, { useState } from 'react';
import axios from "axios";

import NotiPopup from "../utils/notiPopup";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [popup, setPopup] = useState(false);
    const [color, setColor] = useState("");
    const [content, setContent] = useState("");

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

    const onSubmit = async (e) => {
        e.preventDefault();
        if (emailError === false) {
            let data = { email }
            try {
                const res = await axios.post(process.env.REACT_APP_CREATE_NEWSLETTER, data);
                if (res.data.status === "success") {
                    setPopup(true);
                    setContent("Thank you for subscribing!");
                    setColor("success");
                }
                // console.log(res.data);
            } catch (err) {
                console.log(err);
                const { error } = err.response.data;
                if (error.code === 11000) {
                    setPopup(true);
                    setContent("alas! you have subscribed already");
                    setColor("success");
                } else {
                    setPopup(true);
                    setContent("oops something went wrong");
                    setColor("danger");
                }
            }
        }
    }

    if (popup)
        setTimeout(() => {
            setPopup(false);
        }, 5000);

    return (
        <div className="newsletter" id="newsletter">
            {popup && <NotiPopup content={content} color={color} />}
            <div className="newsletter-padding">
                <div className="newsletter-box">
                    <h4 style={{ fontSize: "20px", color: "white" }}>Join our newsletter</h4>
                    <form className="newsletter-form" onSubmit={(e) => onSubmit(e)}>
                        <input type="email"
                            className="newsletter-input"
                            id="email"
                            required
                            name={"email"}
                            onChange={(e) => onEmailChange(e)}
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
