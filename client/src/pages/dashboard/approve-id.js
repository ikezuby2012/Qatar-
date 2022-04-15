import React, { useEffect, useState } from 'react';
import axios from "axios";
import moment from "moment";
import { useParams, Link } from "react-router-dom";

import MainLayout from '../../components/dashboard/MainLayout';
import NotiPopup from "../../components/utils/notiPopup";

const ApproveId = ({ history }) => {
    let { id, type } = useParams();
    // console.log(process.env.REACT_APP_APPROVE_TRANSACTION);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [popup, setPopup] = useState(false);
    const [color, setColor] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        setLoading(true);
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
    }, [id]);

    // console.log(data);
    const onSuccess = async (e) => {
        e.preventDefault();
        let { id } = e.target;
        // console.log(e.target.id);
        let token = JSON.parse(localStorage.getItem("token"));

        try {
            const res = await axios.patch(`${process.env.REACT_APP_APPROVE_TRANSACTION}/${id}`, {}, {
                headers: {
                    "authorization": `bearer ${token}`
                }
            });
            console.log(res.data);
            if (res.data.status === "success") {
                setPopup(true);
                setContent("fund payment successful!");
                setColor("success");
                setTimeout(() => {
                    history.push("/dashboard/approve");
                }, 5000);
            }
        } catch (err) {
            // console.log(err);
            const { error } = err.response.data;
            console.log(error);
            setPopup(true);
            setContent("oops something went wrong");
            setColor("danger");
        }
    }
    const onReject = async (e) => {
        e.preventDefault();
        let { id } = e.target;
        // console.log(e.target.id);
        let token = JSON.parse(localStorage.getItem("token"));

        try {
            const res = await axios.patch(`${process.env.REACT_APP_GET_ALL_TRANSACTIONS}/${id}`, { payment_status: "failed" }, {
                headers: {
                    "authorization": `bearer ${token}`
                }
            });
            // console.log(res.data);
            setTimeout(() => {
                history.push("/dashboard/approve");
            }, 5000);
            if (res.data.status === "success") {
                setPopup(true);
                setContent("success!");
                setColor("success");
                setTimeout(() => {
                    history.push("/dashboard/approve");
                }, 5000);
            }
        } catch (err) {
            // console.log(err);
            const { error } = err.response.data;
            console.log(error);
            setPopup(true);
            setContent("oops something went wrong");
            setColor("danger");
        }
    }

    if (popup)
        setTimeout(() => {
            setPopup(false);
        }, 5000);

    return (
        <MainLayout>
            {popup && <NotiPopup content={content} color={color} />}
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

                        <div className="dashTrx-group dashHistory-sp">
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
                            <h2>transaction time</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{moment(data.created_at).format("LLLL")}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group dashHistory-sp">
                            <h2>transaction status</h2>
                            <figcaption className="dashTrx-figcaption">
                                <span className={"dashHistory-btns"}>
                                    {data ? <>
                                        {data.payment_status === "pending" ?
                                            <>
                                                <button id={data.id} onClick={(e) => onSuccess(e)} className={`dashHistory-btn_success`}>confirm</button>
                                                <button id={data.id} onClick={(e) => onReject(e)} className={`dashHistory-btn_failed`}>reject</button>
                                            </> : <span className={`dashHistory-btn_${data.payment_status}`}>{data.payment_status}</span>

                                        }
                                    </> : "loading..."}
                                </span>
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
                            <h2>transaction time</h2>
                            <figcaption className="dashTrx-figcaption">
                                <h4>{moment(data.created_at).format("LLLL")}</h4>
                            </figcaption>
                        </div>

                        <div className="dashTrx-group dashHistory-sp">
                            <h2>transaction status</h2>
                            <figcaption className="dashTrx-figcaption">
                                <span className={"dashHistory-btns"}>{data ? <>
                                    {data.payment_status === "pending" ?
                                        <>
                                            <button id={data.id} onClick={(e) => onSuccess(e)} className={`dashHistory-btn_success`}>confirm</button>
                                            <button id={data.id} onClick={(e) => onReject(e)} className={`dashHistory-btn_failed`}>reject</button>
                                        </> : <span className={`dashHistory-btn_${data.payment_status}`}>{data.payment_status}</span>

                                    }
                                </> : "loading..."}</span>
                            </figcaption>
                        </div>
                    </>}
                </div>
            </div >
        </MainLayout >
    );
}

export default ApproveId;
