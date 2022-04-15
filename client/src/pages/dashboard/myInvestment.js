import React, { useState, useEffect } from 'react';
import axios from "axios";
import moment from "moment";

import MainLayout from '../../components/dashboard/MainLayout';

const MyInvestment = () => {
    // const { user } = useSelector((state) => state.user)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            let token = JSON.parse(localStorage.getItem("token"));
            try {
                const res = await axios.get(`${process.env.REACT_APP_GET_USER_INVESTMENT}`, {
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
                                            <span>amount</span>
                                            <span>investment plan</span>
                                            <span>potential earning</span>
                                            <span>due time</span>
                                            <span style={{ marginLeft: "auto" }}>payment status</span>
                                        </li>
                                    </ul>
                                    {
                                        data.map((el, i) => (
                                            <ul>
                                                <li className="dashMyInv-list" key={i}>
                                                    <span>
                                                        <span className="dashMyInv-des" style={{ marginRight: "auto" }}>amount</span>
                                                        ${el.amount}
                                                    </span>
                                                    <span>
                                                        <span className="dashMyInv-des" style={{ marginRight: "auto" }}>investment plan</span>
                                                        {el.investment_plan}
                                                    </span>
                                                    <span>
                                                        <span className="dashMyInv-des" style={{ marginRight: "auto" }}>potential earning</span>
                                                        ${el.potential_earning}
                                                    </span>
                                                    <span style={{ fontSize: "10px" }}>
                                                        <span className="dashMyInv-des" style={{ marginRight: "auto" }}>stoppage time</span>
                                                        {moment(el.end_time).format("LLLL")}
                                                    </span>
                                                    <span>
                                                        <span className="dashMyInv-des">status</span>
                                                        <span style={{ marginLeft: "auto" }}>{el.payment_status}</span>
                                                    </span>
                                                </li>
                                            </ul>
                                        ))
                                    }
                                </div>
                            </div> :
                            <div>
                                no investments
                            </div>
                    }
                </div>
            </div>
        </MainLayout>
    );
}

export default MyInvestment;
