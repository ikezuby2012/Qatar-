import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";


import {
    AccountCircle, AssignmentReturn, Store, Poll, Payment, Dashboard, Close
} from "@material-ui/icons";
import { AiFillDashboard } from "react-icons/ai";
import { MdLeaderboard } from "react-icons/md";
import { FaHandHoldingUsd, FaHistory, FaUserCog } from "react-icons/fa";
import { BsCreditCard, BsUiChecks, BsWallet } from "react-icons/bs";
import { RiCoinsFill, RiTeamLine, RiTableAltFill } from "react-icons/ri";

const ResDash = ({ onClose }) => {
    const { user } = useSelector((state) => state.user);
    // const dispatch = useDispatch();
    return (
        <div className="res-box">
            <div className="res-top">
                <Link to="/">
                    <h1 style={{ color: "black", fontSize: "14px", marginTop: "2px" }} className="header-logo">
                        Qatar-invest
                    </h1>
                </Link>
                <button onClick={onClose} className="res-close">
                    <Close className="res-icon" />
                </button>
            </div>

            <nav className="res-nav">
                {user.role === "admin" && <>
                    <ul className="res-sideNav">
                        <li className="res-sideNav-item">
                            <NavLink className="res-sideNav-link" activeClassName="" to="/dashboard" onClick={onClose}>
                                <span><AiFillDashboard className="res-sideNav-logo" /></span>
                                <span>dashboard</span>
                            </NavLink>
                        </li>

                        <li className="res-sideNav-item">
                            <NavLink className="res-sideNav-link" to="/dashboard/wallet" onClick={onClose}>
                                <span><BsWallet className="dashboard-sideNav-logo" /></span>
                                <span>wallets</span>
                            </NavLink>
                        </li>

                        <li className="res-sideNav-item">
                            <NavLink className="res-sideNav-link" to="/dashboard/users" onClick={onClose}>
                                <span><FaUserCog className="dashboard-sideNav-logo" /></span>
                                <span>users</span>
                            </NavLink>
                        </li>

                        <li className="res-sideNav-item">
                            <NavLink className="res-sideNav-link" to="/dashboard/trx" onClick={onClose}>
                                <span><RiCoinsFill className="dashboard-sideNav-logo" /></span>
                                <span>transactions</span>
                            </NavLink>
                        </li>

                        <li className="res-sideNav-item">
                            <NavLink className="res-sideNav-link" to="/dashboard/leaderboard" onClick={onClose}>
                                <span><MdLeaderboard className="dashboard-sideNav-logo" /></span>
                                <span>leaderBoard</span>
                            </NavLink>
                        </li>

                        <li className="res-sideNav-item">
                            <NavLink className="res-sideNav-link" to="/dashboard/approve">
                                <span><BsUiChecks className="dashboard-sideNav-logo" /></span>
                                <span>approve request</span>
                            </NavLink>
                        </li>

                        <li className="res-sideNav-item">
                            <NavLink className="res-sideNav-link" to="/dashboard/profile" onClick={onClose}>
                                <span><AccountCircle className="dashboard-sideNav-logo" /></span>
                                <span>profile</span>
                            </NavLink>
                        </li>

                        <li className="res-sideNav-item">
                            <NavLink className="res-sideNav-link" to="/" onClick={onClose}>
                                <span><AssignmentReturn className="dashboard-sideNav-logo" /></span>
                                <span>Go back Home</span>
                            </NavLink>
                        </li>
                    </ul>
                </>}

                {user.role === "user" && <>
                    <ul className="res-sideNav">
                        <li className="res-sideNav-item ">
                            <NavLink className="res-sideNav-link res-sideNav-item--active" activeClassName="res-sideNav-link--active" to="/dashboard/home" onClick={onClose}>
                                <span><AiFillDashboard className="dashboard-sideNav-logo" /></span>
                                <span>dashboard</span>
                            </NavLink>
                        </li>

                        <li className="res-sideNav-item">
                            <NavLink className="res-sideNav-link" to="/dashboard/investment" onClick={onClose}>
                                <span><FaHandHoldingUsd className="dashboard-sideNav-logo" /></span>
                                <span>investment</span>
                            </NavLink>
                        </li>

                        <li className="res-sideNav-item">
                            <NavLink className="res-sideNav-link" to="/dashboard/withdrawal" onClick={onClose}>
                                <span><BsCreditCard className="dashboard-sideNav-logo" /></span>
                                <span>withdrawal</span>
                            </NavLink>
                        </li>

                        <li className="res-sideNav-item">
                            <NavLink className="res-sideNav-link" to="/dashboard/history" onClick={onClose}>
                                <span><FaHistory className="dashboard-sideNav-logo" /></span>
                                <span>history</span>
                            </NavLink>
                        </li>

                        <li className="res-sideNav-item">
                            <NavLink className="res-sideNav-link" to="/dashboard/deposit" onClick={onClose}>
                                <span><RiCoinsFill className="dashboard-sideNav-logo" /></span>
                                <span>deposit funds</span>
                            </NavLink>
                        </li>

                        <li className="res-sideNav-item">
                            <NavLink className="res-sideNav-link" to="/dashboard/myInvestment" onClick={onClose}>
                                <span><RiTableAltFill className="dashboard-sideNav-logo" /></span>
                                <span>my investment</span>
                            </NavLink>
                        </li>

                        <li className="res-sideNav-item">
                            <NavLink className="res-sideNav-link" to="/dashboard/refferal" onClick={onClose}>
                                <span><RiTeamLine className="dashboard-sideNav-logo" /></span>
                                <span>referrals panel</span>
                            </NavLink>
                        </li>

                        <li className="res-sideNav-item">
                            <NavLink className="res-sideNav-link" to="/dashboard/profile" onClick={onClose}>
                                <span><AccountCircle className="dashboard-sideNav-logo" /></span>
                                <span>profile</span>
                            </NavLink>
                        </li>

                        <li className="res-sideNav-item">
                            <NavLink className="res-sideNav-link" to="/" onClick={onClose}>
                                <span><AssignmentReturn className="dashboard-sideNav-logo" /></span>
                                <span>Go back Home</span>
                            </NavLink>
                        </li>
                    </ul>
                </>}
            </nav>
            <footer className="res-footer">
                <p>&copy;copyright, qatarInvest - {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
}

export default ResDash;
