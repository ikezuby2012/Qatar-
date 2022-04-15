import React, { useState, useEffect } from 'react';
import axios from "axios";
import moment from "moment";

import MainLayout from '../../components/dashboard/MainLayout';

const LeaderBoard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            let token = JSON.parse(localStorage.getItem("token"));
            try {
                const res = await axios.get(`${process.env.REACT_APP_LEADERBOARD}`, {
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
        }, 100);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    console.log(data);
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
                            <div className="dashMyInv-table">
                                <div className="dashMyInv-block">
                                    <ul>
                                        <li className="dashMyInv-list hd">
                                            <span>name</span>
                                            <span>email</span>
                                            <span>balance</span>
                                            <span>created at</span>
                                            {/* <span style={{ marginLeft: "auto" }}>payment status</span> */}
                                        </li>
                                    </ul>
                                    {
                                        data.map((el, i) => (
                                            <ul>
                                                <li className="dashMyInv-list" key={i}>
                                                    <span key={i}>
                                                        <span className="dashMyInv-des" style={{ marginRight: "auto" }}>user name</span>
                                                        {el.user ? el.user.name: "loading..."}
                                                    </span>
                                                    <span key={i}>
                                                        <span className="dashMyInv-des" style={{ marginRight: "auto" }}>user email</span>
                                                        {el.user ? el.user.email : "loading..."}
                                                    </span>
                                                    <span key={i}>
                                                        <span className="dashMyInv-des" style={{ marginRight: "auto" }}>balance</span>
                                                        ${el.balance}
                                                    </span>
                                                    <span style={{ fontSize: "10px" }} key={i}>
                                                        <span className="dashMyInv-des" style={{ marginRight: "auto" }}>created at</span>
                                                        {moment(el.created_at).format("LLLL")}
                                                    </span>
                                                    {/* <span>
                                                        <span className="dashMyInv-des">status</span>
                                                        <span style={{ marginLeft: "auto" }}>{el.payment_status}</span>
                                                    </span> */}
                                                </li>
                                            </ul>
                                        ))
                                    }
                                </div>
                            </div> :
                            <div>
                                no data
                            </div>
                    }

                </div>
            </div>
        </MainLayout>
    );
}

export default LeaderBoard;
