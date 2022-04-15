import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

import MainLayout from '../../components/dashboard/MainLayout';

const ApproveRequest = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            let token = JSON.parse(localStorage.getItem("token"));
            try {
                const res = await axios.get(`${process.env.REACT_APP_GET_ALL_TRANSACTIONS}`, {
                    headers: {
                        "authorization": `bearer ${token}`
                    }
                });
                // console.log(res.data);
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
    }, []);

    // console.log(data);

    return (
        <MainLayout>
            <div className="dashHistory">
                <div className="dashHistory-box">
                    {
                        loading && <div className="error mt-6">
                            <div style={{ height: "4rem", width: "4rem", padding: "2rem" }} className="loading-spinner" />
                        </div>
                    }
                    {
                        data.length !== 0 ?

                            <div className="dashHistory-table">
                                <div className="dashHistory-block">
                                    <ul>
                                        <li className="dashHistory-list hd">
                                            <span>name</span>
                                            <span>user</span>
                                            <span>amount</span>
                                            <span>transaction type</span>
                                            {/* <span>payment status</span> */}
                                        </li>
                                    </ul>
                                    {data.map((el, i) => (
                                        <ul>
                                            {el.transaction_type === "deposit" && (
                                                <>
                                                    <li className="dashHistory-list" key={i}>
                                                        <span>{el.user ? el.user.name : "loading..."}</span>
                                                        <span>{el.user ? el.user.email : "loading..."}</span>
                                                        <span>${el.amount}</span>
                                                        <span>{el.transaction_type}</span>
                                                        <span>
                                                            {el.payment_status === "success" ? <span className={`dashHistory-btn_${el.payment_status}`}>success</span> :
                                                                <Link to={`/dash/approve/${el.transaction_type}/${el.id}`}
                                                                    className={"dashHistory-link"}>
                                                                    view detail
                                                                </Link>
                                                            }
                                                        </span>
                                                    </li>
                                                </>
                                            )}
                                        </ul>
                                    ))}
                                </div>

                                <div className="dashHistory-block">
                                    <ul>
                                        <li className="dashHistory-list hd">
                                            <span>name</span>
                                            <span>user</span>
                                            <span>amount</span>
                                            <span>transaction type</span>
                                            {/* <span>payment status</span> */}
                                        </li>
                                    </ul>
                                    {data.map((el, i) => (
                                        <ul>

                                            {el.transaction_type === "withdrawal" && (
                                                <>
                                                    <li className="dashHistory-list" key={i}>
                                                        <span>{el.user ? el.user.name : "loading..."}</span>
                                                        <span>{el.user ? el.user.email : "loading..."}</span>
                                                        <span>${el.amount}</span>
                                                        <span>{el.transaction_type}</span>
                                                        <span>
                                                            {el.payment_status === "success" ? <span className={`dashHistory-btn_${el.payment_status}`}>success</span> :
                                                                <Link to={`/dash/approve/${el.transaction_type}/${el.id}`}
                                                                    className={"dashHistory-link"}>
                                                                    view detail
                                                                </Link>
                                                            }
                                                        </span>
                                                    </li>
                                                </>
                                            )}
                                        </ul>
                                    ))}
                                </div>
                            </div> : <>
                                {!loading && <h2>no history</h2>}
                            </>
                    }
                </div>
            </div>
        </MainLayout>
    );
}

export default ApproveRequest;
