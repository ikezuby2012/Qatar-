import React, { useState, useEffect } from 'react';
import axios from "axios";

//icon
import { AiOutlineWarning } from "react-icons/ai";
import Icon from "react-crypto-icons";

const CryptoPrice = () => {
    let time = new Date().toLocaleTimeString();
    const [newTime, setTime] = useState(time);
    const [stock, setStock] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setTime(time);
    }

    const abbreviateNumber = (val) => {
        val = Math.round(val);
        let suffices = ["", "k", "m", "b", "t"];
        let suffixNum = Math.floor(("" + val).length / 3);
        let shortValue = parseFloat((suffixNum !== 0 ? (val / Math.pow(1000, suffixNum)) : val).toPrecision(2));
        if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(1);
        // console.log(shortValue + suffices[suffixNum]);
        return shortValue + suffices[suffixNum];
    }

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            console.log(process.env.REACT_APP_coinMarketApi);
            try {
                const res = await axios.get(process.env.REACT_APP_coinMarketApi);
                const { data } = res.data.data;
                setStock(data);
                setLoading(false);
                setError(false);
            } catch (err) {
                setLoading(false);
                setError(true);
            }
            // if (stock) {
            //     console.log(stock);
            // }
        }
        fetchData();
    }, [])
    setInterval(updateTime, 1000);
    return (
        <section className="crypto">
            <div className="about-hd">
                <h4 className="about-hd-h4">
                    As of today - {newTime}
                </h4>
                <h2 className="about-hd-h2" style={{ color: "white" }}>
                    cryptocurrency prices
                </h2>
            </div>

            <div className="crypto-prices">
                <ul className="crypto-prices_table">
                    <li className="crypto-prices_list mb">
                        <div className="crypto-prices_name  crypto-prices_hdText">name</div>
                        <div className="crypto-prices_price crypto-prices_hdText">price</div>
                        <div className="crypto-prices_per24 crypto-prices_hdText">24%</div>
                        <div className="crypto-prices_per7  crypto-prices_hdText">7d%</div>
                        <div className="crypto-prices_marketCap crypto-prices_hdText">market cap</div>
                        <div className="crypto-prices_volume crypto-prices_hdText">volume(24h)</div>
                    </li>
                    {loading && <div className="error mt-6">
                        <div style={{ height: "10rem", width: "10rem" }} className="loading-spinner" />
                    </div>}
                    {error && <div className="error">
                        <AiOutlineWarning className="error-icon" />
                        <span>check your internet connection 😞!</span>
                    </div>}
                    {stock.map((el) => {
                        const { symbol, quote, slug } = el;
                        const {
                            price, volume_24h: volume, percent_change_24h: per24, percent_change_7d: per7d, market_cap
                        } = quote.USD;

                        return (
                            <li className="crypto-prices_list">
                                <div className="crypto-prices_flexhd">
                                    <Icon name={symbol.toLowerCase()} size={25} className="crypto-prices_icon" />
                                    <span>{slug}</span>
                                </div>
                                <div className="crypto-prices_list-text">
                                    <span>${parseFloat(price.toFixed(2))}</span>
                                </div>
                                <div className="crypto-prices_list-text">
                                    {per24 > 0 ? <span className="crypto-prices_list-text-blue">{per24.toFixed(2)}</span> : <span className="crypto-prices_list-text-red">{per24.toFixed(2)}</span>}
                                </div>
                                <div className="crypto-prices_list-text">
                                    {per7d > 0 ? <span className="crypto-prices_list-text-blue">{per7d.toFixed(2)}</span> : <span className="crypto-prices_list-text-red">{per7d.toFixed(2)}</span>}
                                </div>
                                <div className="crypto-prices_list-text">
                                    <span>${abbreviateNumber(market_cap)}</span>
                                </div>
                                <div className="crypto-prices_list-text">
                                    <span>${abbreviateNumber(volume)}</span>
                                </div>

                            </li>
                        )
                    })}
                </ul>
            </div>

        </section>
    );
}

export default CryptoPrice;
