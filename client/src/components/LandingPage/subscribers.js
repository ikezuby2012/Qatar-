import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";

import { BsGraphUp } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FaMoneyCheckAlt } from "react-icons/fa";

//FaMoneyCheckAlt
const Subscribers = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    // useEffect(() => {
    //     const sleep = ms => {
    //         return new Promise(resolve => setTimeout(resolve, ms))
    //     }
    //     const onScroll = () => {
    //         const first = async () => {
    //             for (let i = 1; i <= 931; i++) {
    //                 await sleep(0.2);
    //                 setPrice(i);
    //             }
    //         }
    //         const second = async () => {
    //             for (let j = 1; j <= 18; j++) {
    //                 await sleep(100);
    //                 setUsers(`${j}, 000`);
    //             }
    //         }
    //         const third = async () => {
    //             for (let j = 1; j <= 14; j++) {
    //                 await sleep(50);
    //                 setInvest(j);
    //             }
    //         }
    //         first();
    //         second();
    //         third();
    //         // setPrice(931);
    //         // setUsers(18000);
    //     }
    //     const Timer = setTimeout(() => onScroll(), 500);

    //     window.addEventListener("scroll", onScroll);

    //     return () => {
    //         clearTimeout(Timer);
    //         window.removeEventListener("scroll", onScroll);
    //     }
    // });

    return (
        <section class="subscribers">
            <div className={`subscribers-boxes ${inView}`}>
                <motion.div className="subscribers-box"
                    initial="hidden"
                    whileInView="visible"
                    ref={ref}
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="subscribers-align">
                        <span>
                            <BsGraphUp className="subscribers-align-icon" />
                        </span>
                        <div className="subscribers-text">
                            <h2>$198k</h2>
                            <h4>investment in prices</h4>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="subscribers-box"
                    initial="hidden"
                    whileInView="visible"
                    ref={ref}
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="subscribers-align">
                        <span>
                            <IoIosPeople className="subscribers-align-icon" />
                        </span>
                        <div className="subscribers-text">
                            <h2>18 000+</h2>
                            <h4>registered users</h4>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="subscribers-box"
                    initial="hidden"
                    whileInView="visible"
                    ref={ref}
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="subscribers-align">
                        <span>
                            <FaMoneyCheckAlt className="subscribers-align-icon" />
                        </span>
                        <div className="subscribers-text">
                            <h2>$15k</h2>
                            <h4>average investment</h4>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Subscribers;
