import React  from 'react';
import TradeViewChart from "react-crypto-chart";

import { useDispatch, useSelector } from "react-redux";

import MainLayout from '../../components/dashboard/MainLayout';

//icons
import {
    BrandingWatermark, CallToAction, Euro
} from "@material-ui/icons";

const DashboardHome = ({ history }) => {
    // const { user } = useSelector((state) => state.user);
    const { data } = useSelector(state => state.wallet);
    // const dispatch = useDispatch();
    let value = 0;
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
                            <span>{value}</span>
                        </div>
                    </div>

                    <div className="dash-home-box">
                        <span><CallToAction className="dash-home-icon" /></span>
                        <h2 className="dash-home-box-hdtext">
                            withdrawn
                        </h2>
                        <div className="dash-home-box-spans">
                            <span>value</span>
                            <span>{value}</span>
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
                <div className="dash-home-chartBox">
                    <div className="dash-home-chartLog">
                        <h4>bitcoin chart graph - BTC/BUSD</h4>
                        <TradeViewChart pair="BTCBUSD"
                            interval={"1m"}
                            className="dash-home-chart"
                            candleStickConfig={{
                                upColor: "#00c176", downColor: "#cf304a", borderDownColor: "#cf304a", borderUpColor: "#00c176", wickDownColor: "#838ca1", wickUpColor: "#838ca1",
                            }}
                        />
                    </div>

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
                        <h4>tether chart graph - BTC/USDT</h4>
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
