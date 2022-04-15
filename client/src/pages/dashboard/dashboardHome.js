import React, { useEffect, useState } from 'react';
import axios from "axios";
import TradeViewChart from "react-crypto-chart";
import { useSelector } from "react-redux";

import MainLayout from '../../components/dashboard/MainLayout';

//icons
import {
    BrandingWatermark, CallToAction, Euro, Report
} from "@material-ui/icons";

const DashboardHome = ({ history }) => {
    const { user } = useSelector((state) => state.user);
    const { data } = useSelector(state => state.wallet);
    const [inv, setInv] = useState(0);
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(true);
    // const dispatch = useDispatch();
    // let value = 0;
    useEffect(() => {
        setLoading(true);
        const fetchInvData = async () => {
            let token = JSON.parse(localStorage.getItem("token"));
            try {
                const res = await axios.get(`${process.env.REACT_APP_GET_USER_TOTAL}/investment`, {
                    headers: {
                        "authorization": `bearer ${token}`
                    }
                });
                // console.log(res.data);
                const { data } = res.data;
                if (data) {
                    setInv(res.data.data);
                }
                // console.log(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };

        const fetchData = async () => {
            let token = JSON.parse(localStorage.getItem("token"));
            try {
                const res = await axios.get(`${process.env.REACT_APP_GET_USER_TOTAL}/withdrawal`, {
                    headers: {
                        "authorization": `bearer ${token}`
                    }
                });
                // console.log(res.data);
                const { data } = res.data;
                if (data) {
                    setAmount(data);
                }
                // console.log(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };

        const timer = setTimeout(() => {
            fetchInvData();
            fetchData();
        }, 50);

        return () => {
            clearTimeout(timer);
        }
    }, []);
    console.log(user.first_timer_bonus);
    return (
        <MainLayout>
            <div className="dash-home">
                <div className="dash-home-boxs">
                    <div className="dash-home-box">
                        <span><BrandingWatermark className="dash-home-icon" /></span>
                        <h2 className="dash-home-box-hdtext">
                            total investment
                        </h2>
                        <div className="dash-home-box-spans">
                            <span>value</span>
                            <span>{inv}</span>
                        </div>
                    </div>

                    <div className="dash-home-box">
                        <span><CallToAction className="dash-home-icon" /></span>
                        <h2 className="dash-home-box-hdtext">
                            withdrawn
                        </h2>
                        <div className="dash-home-box-spans">
                            <span>value</span>
                            <span>{amount}</span>
                        </div>
                    </div>

                    <div className="dash-home-box">
                        <span><Euro className="dash-home-icon" /></span>
                        <h2 className="dash-home-box-hdtext">
                            Total balance
                        </h2>
                        <div className="dash-home-box-spans">
                            <span>value</span>
                            <span>$ {data.data !== undefined ? data.data.balance : "N/A"}</span>
                        </div>
                    </div>
                </div>

                {user.first_timer_bonus === false && <>
                    <div className="dash-home-first">
                        <span>
                            <Report className="dash-home-first_icon" />
                        </span>
                        <h5>you can create a new wallet by using the profile section, making your first deposit by default create a new wallet for you.</h5>
                    </div>

                    <div className="dash-home-first">
                        <span>
                            <Report className="dash-home-first_icon" />
                        </span>
                        <h5>first time investors are rewarded a bonus of £1000, you can claim your reward by making your first deposit.</h5>
                    </div>

                </>}
                <div className="dash-home-chartBox">
                    {/* <div className="dash-home-chartLog">
                        <h4>bitcoin chart graph - BTC/BUSD</h4>
                        <TradeViewChart pair="BTCLITE"
                            interval={"1m"}
                            className="dash-home-chart"
                            candleStickConfig={{
                                upColor: "#00c176", downColor: "#cf304a", borderDownColor: "#cf304a", borderUpColor: "#00c176", wickDownColor: "#838ca1", wickUpColor: "#838ca1",
                            }}
                        />
                    </div> */}

                    <div className="dash-home-chartLog">
                        <h4>etheruem chart graph - ETH/BTC</h4>
                        <TradeViewChart pair="ETHBTC"
                            interval={"1m"}
                            className="dash-home-chart"
                            candleStickConfig={{
                                upColor: "#00c176", downColor: "#cf304a", borderDownColor: "#cf304a", borderUpColor: "#00c176", wickDownColor: "#838ca1", wickUpColor: "#838ca1",
                            }}
                        />
                    </div>

                    <div className="dash-home-chartLog">
                        <h4>Binance cash chart graph - BNB/BTC</h4>
                        <TradeViewChart pair="BNBBTC"
                            interval={"1m"}
                            className="dash-home-chart"
                            candleStickConfig={{
                                upColor: "#00c176", downColor: "#cf304a", borderDownColor: "#cf304a", borderUpColor: "#00c176", wickDownColor: "#838ca1", wickUpColor: "#838ca1",
                            }}
                        />
                    </div>

                    <div className="dash-home-chartLog">
                        <h4>bitcoin chart graph - BTC/USDT</h4>
                        <TradeViewChart pair="BTCUSDT"
                            interval={"1m"}
                            className="dash-home-chart"
                            candleStickConfig={{
                                upColor: "#00c176", downColor: "#cf304a", borderDownColor: "#cf304a", borderUpColor: "#00c176", wickDownColor: "#838ca1", wickUpColor: "#838ca1",
                            }}
                        />
                    </div>

                </div>

            </div>
        </MainLayout>
    );
}

export default DashboardHome;
