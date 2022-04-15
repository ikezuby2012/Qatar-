import React, { useEffect, useState } from 'react';
import axios from "axios";
import moment from "moment";
import { useParams } from "react-router-dom";

import MainLayout from '../../components/dashboard/MainLayout';

const TrxId = () => {

    let { id, type } = useParams();

    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        // setLoading(true);
        const fetchData = async () => {
            let token = JSON.parse(localStorage.getItem("token"));
            try {
                const res = await axios.get(`${process.env.REACT_APP_GET_ALL_TRANSACTIONS}/${id}`, {
                    headers: {
                        "authorization": `bearer ${token}`
                    }
                });
                // console.log(res.data);
                setData(res.data.data);
                // console.log(data);
                // setLoading(false);
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
    }, [id]);

    // console.log(data);
    // console.log(type);

    return (
        <MainLayout>
            <div className="dashTrx">
                <h2 className="dashTrx-hdText">
                    transaction statement
                </h2>
                <div className="dashTrx-block">
                    {type === "deposit" && <>
                        <div className="dashTrx-group">
                            <h2>name</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{data.user ? data.user.name : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>email</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{data.user ? data.user.email : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>transaction type</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{data ? data.transaction_type : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>amount</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>${data ? data.amount : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>transaction id</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{data ? data.transaction_id : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>payment method</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{data ? data.payment_method : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>transaction status</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{data ? data.payment_status : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>transaction time</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{moment(data.created_at).format("LLLL")}</h4>
                            </figcaption>
                        </div>
                    </>}

                    {type === "investment" && <>
                        <div className="dashTrx-group">
                            <h2>name</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{data.user ? data.user.name : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>email</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{data.user ? data.user.email : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>transaction type</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{data ? data.transaction_type : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>amount</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>${data ? data.amount : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>potential earning</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>${data ? data.potential_earning : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>payment method</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{data ? data.payment_method : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>transaction due time</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{moment(data.end_time).format("LLLL")}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>transaction status</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{data ? data.payment_status : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>transaction time</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{moment(data.created_at).format("LLLL")}</h4>
                            </figcaption>
                        </div>
                    </>}

                    {type === "withdrawal" && <>
                        <div className="dashTrx-group">
                            <h2>name</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{data.user ? data.user.name : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>email</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{data.user ? data.user.email : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>transaction type</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{data ? data.transaction_type : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>amount</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>${data ? data.amount : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>withdrawal address</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{data ? data.withdrawal_address : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>payment method</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{data ? data.payment_method : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>transaction status</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{data ? data.payment_status : "loading..."}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group">
                            <h2>transaction time</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{moment(data.created_at).format("LLLL")}</h4>
                            </figcaption>
                        </div>
                    </>}
                </div>
            </div>
        </MainLayout>
    );
}

export default TrxId;
