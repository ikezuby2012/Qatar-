import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSelector } from "react-redux";
import MainLayout from '../../components/dashboard/MainLayout';


const History = () => {
    const { user } = useSelector((state) => state.user)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            let token = JSON.parse(localStorage.getItem("token"));
            try {
                const res = await axios.get(`${process.env.REACT_APP_GET_USER_TRANSACTIONS}/${user.id}`, {
                    headers: {
                        "authorization": `bearer ${token}`
                    }
                });
                console.log(res.data);
                setData(res.data.data);
                setLoading(false);
            } catch (err) {
                console.log(err)
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
            <div className="dashHistory">
                <div className="dashHistory-box">
                    {loading && <div className="error mt-6">
                        <div style={{ height: "4rem", width: "4rem", padding: "2rem" }} className="loading-spinner" />
                    </div>}
                    {data.length !== 0 ?
                        <div className="dashHistory-table">
                            <div className="dashHistory-block">
                                <ul>
                                    <li className="dashHistory-list hd">
                                        <span>payment method</span>
                                        <span>amount</span>
                                        <span>transaction id</span>
                                        <span>transaction type</span>
                                        <span>payment status</span>
                                    </li>
                                </ul>
                                {data.map((el, i) => (
                                    <ul>
                                        {el.transaction_type === "deposit" && (
                                            <>
                                                <li className="dashHistory-list" key={i}>
                                                    <span>{el.payment_method}</span>
                                                    <span>${el.amount}</span>
                                                    <span>{el.transaction_id}</span>
                                                    <span>{el.transaction_type}</span>
                                                    <span>{el.payment_status}</span>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                ))}
                            </div>

                            <div className="dashHistory-block">
                                <ul>
                                    <li className="dashHistory-list hd">
                                        <span>payment method</span>
                                        <span>amount</span>
                                        <span>withdrawal address</span>
                                        <span>transaction type</span>
                                        <span>payment status</span>
                                    </li>
                                </ul>
                                {data.map((el, i) => (
                                    <ul>

                                        {el.transaction_type === "withdrawal" && (
                                            <>
                                                <li className="dashHistory-list" key={i}>
                                                    <span>{el.payment_method}</span>
                                                    <span>${el.amount}</span>
                                                    <span>{el.withdrawal_address}</span>
                                                    <span>{el.transaction_type}</span>
                                                    <span>{el.payment_status}</span>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                ))}
                            </div>

                            <div className="dashHistory-block">
                                <ul>
                                    <li className="dashHistory-list hd">
                                        <span>payment method</span>
                                        <span>amount</span>
                                        <span>investment plan</span>
                                        <span>transaction type</span>
                                        <span>payment status</span>
                                    </li>
                                </ul>
                                {data.map((el, i) => (
                                    <ul>
                                        {el.transaction_type === "investment" && (
                                            <>

                                                <li className="dashHistory-list" key={i}>
                                                    <span>{el.payment_method}</span>
                                                    <span>${el.amount}</span>
                                                    <span>{el.investment_plan}</span>
                                                    <span>{el.transaction_type}</span>
                                                    <span>{el.payment_status}</span>
                                                </li>
                                            </>
                                        )}

                                    </ul>
                                ))}
                            </div>


                        </div>
                        :
                        <>
                            {!loading && <h2>no history</h2>}
                        </>
                    }

                </div>
            </div>
        </MainLayout>
    );
}

export default History;
