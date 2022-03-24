import React, { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";

import { BsGraphUp } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FaMoneyCheckAlt } from "react-icons/fa";

//FaMoneyCheckAlt
const Subscribers = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
    const [price, setPrice] = useState(0);
    const [users, setUsers] = useState(0);
    const [invest, setInvest] = useState(0);

    useEffect(() => {
        const sleep = ms => {
            return new Promise(resolve => setTimeout(resolve, ms))
        }
        const onScroll = () => {
            const first = async () => {
                for (let i = 1; i <= 931; i++) {
                    await sleep(0.2);
                    setPrice(i);
                }
            }
            const second = async () => {
                for (let j = 1; j <= 18; j++) {
                    await sleep(100);
                    setUsers(`${j}, 000`);
                }
            }
            const third = async () => {
                for (let j = 1; j <= 14; j++) {
                    await sleep(50);
                    setInvest(j);
                }
            }
            first();
            second();
            third();
            // setPrice(931);
            // setUsers(18000);
        }
        const Timer = setTimeout(() => onScroll(), 500);

        window.addEventListener("scroll", onScroll);

        return () => {
            clearTimeout(Timer);
            window.removeEventListener("scroll", onScroll);
        }
    });

    return (
        <section class="subscribers">
            <div className={`subscribers-boxes ${inView}`}>
                <div className="subscribers-box">
                    <div className="subscribers-align">
                        <span>
                            <BsGraphUp className="subscribers-align-icon" />
                        </span>
                        <div className="subscribers-text">
                            <h2>${inView && price}k</h2>
                            <h4>investment in prices</h4>
                        </div>
                    </div>
                </div>

                <div className="subscribers-box">
                    <div className="subscribers-align">
                        <span>
                            <IoIosPeople className="subscribers-align-icon" />
                        </span>
                        <div className="subscribers-text">
                            <h2>{inView && users}+</h2>
                            <h4>registered users</h4>
                        </div>
                    </div>
                </div>

                <div className="subscribers-box" ref={ref}>
                    <div className="subscribers-align">
                        <span>
                            <FaMoneyCheckAlt className="subscribers-align-icon" />
                        </span>
                        <div className="subscribers-text">
                            <h2>${inView && invest}k</h2>
                            <h4>average investment</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Subscribers;
