import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import MainLayout from '../../components/dashboard/MainLayout';

const Refferal = () => {
    const { user } = useSelector((state) => state.user);
    const [copyStatus, setCopyStatus] = useState(false);
    const textAreaRef = useRef(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const onCopy = (e) => {
        e.preventDefault();
        textAreaRef.current.select();
        document.execCommand("copy");
        e.target.focus();
        setCopyStatus(true);
    }

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            let token = JSON.parse(localStorage.getItem("token"));
            try {
                const res = await axios.get(`${process.env.REACT_APP_USER_REFERRALS}/${user.id}`, {
                    headers: {
                        "authorization": `bearer ${token}`
                    }
                });
                // console.log(res.data.data);
                setData(res.data.data);
                // console.log(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };

        const timer = setTimeout(() => {
            fetchData();
        }, 50);

        return () => {
            clearTimeout(timer);
        }
    }, [user.id]);


    return (
        <MainLayout>
            <div className="dashRefferal">
                <div className="dashHistory-box">
                    {
                        loading && <div className="error mt-6">
                            <div style={{ height: "4rem", width: "4rem", padding: "2rem" }} className="loading-spinner" />
                        </div>
                    }

                    {
                        data.length !== 0 ?
                            <div className="dashMyInv-table">
                                <div className="dashMyInv-block">
                                    <ul>
                                        <li className="dashRefferal-flex hd">
                                            <span>name</span>
                                            <span>email</span>
                                        </li>
                                    </ul>
                                    {
                                        data.map((el, i) => (
                                            <ul>
                                                <li className="dashRefferal-flex" key={i}>
                                                    <span>{el.name}</span>
                                                    <span >{el.email}</span>
                                                </li>
                                            </ul>
                                        ))
                                    }
                                </div>
                            </div> :
                            <h2>no referrals</h2>
                    }
                </div>

                <div className="dashRefferal-box-1">
                    <div className="dashRefferal-form-group">
                        <label className="dashRefferal-form-label" htmlFor="eth_add">referral link</label>
                        <input type="text"
                            defaultValue={`${window.location.origin}/signup/${user.id}`}
                            className="dashRefferal-form-input form-input"
                            placeholder="transaction id"
                            contentEditable={false}
                            id="eth_add"
                            ref={textAreaRef}
                            // value={email} error={errors.email}
                            required={true}
                        />
                        <button onClick={onCopy} className="dashRefferal-form-btn">
                            copy
                        </button>
                        {copyStatus && <p>text copied to clipboard!</p>}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Refferal;
