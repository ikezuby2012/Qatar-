import React, { useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth";
import HeaderDash from "./HeaderDash";
import { getUserWallet } from '../../actions/wallet';

//icons
import {
    AccountCircle, AssignmentReturn, Store, Poll, Payment, Dashboard
} from "@material-ui/icons";
import { AiFillDashboard } from "react-icons/ai";
// import { GrTransaction } from "react-icons/gr";
import { MdLeaderboard } from "react-icons/md";
import { FaHandHoldingUsd, FaHistory, FaUserCog } from "react-icons/fa";
import { BsCreditCard, BsUiChecks, BsWallet } from "react-icons/bs";
import { RiCoinsFill, RiTeamLine, RiTableAltFill } from "react-icons/ri";

const MainLayout = (props) => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    // console.log(user);



    const logout = () => {
        // dispatch(logout);
        // props.history.push("/login");
        // localStorage.removeItem("token");
        console.log("here");
    }
    useEffect(() => {
        return () => {
            dispatch(getUserWallet(user.id));
        }
    }, [user.id]);

    useEffect(() => {
        const fetchData = () => {
            try {
                dispatch(getUserWallet(user.id));
            } catch (err) {
                console.log(err);
            }
        }
        const timer = setTimeout(() => {
            fetchData();
        }, 50);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    return (
        <section className="dashboard">
            <div className="dashboard-container">
                <nav className="dashboard-side_bar">
                    <Link className="dash_link " to="/">
                        <h1 style={{ color: "white", fontSize: "17px", marginTop: "25px" }} className="header-logo">
                            FCS
                        </h1>
                    </Link>

                    {user.role === "admin" && <>
                        <ul className="dashboard-sideNav">
                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link dashboard-sideNav-item--active" activeClassName="dashboard-sideNav-link--active" to="/dashboard/home">
                                    <span><AiFillDashboard className="dashboard-sideNav-logo" /></span>
                                    <span>dashboard</span>
                                </NavLink>
                            </li>

                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/wallet">
                                    <span><BsWallet className="dashboard-sideNav-logo" /></span>
                                    <span>wallets</span>
                                </NavLink>
                            </li>

                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/users">
                                    <span><FaUserCog className="dashboard-sideNav-logo" /></span>
                                    <span>users</span>
                                </NavLink>
                            </li>

                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/trx">
                                    <span><RiCoinsFill className="dashboard-sideNav-logo" /></span>
                                    <span>transactions</span>
                                </NavLink>
                            </li>

                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/leaderboard">
                                    <span><MdLeaderboard className="dashboard-sideNav-logo" /></span>
                                    <span>leaderBoard</span>
                                </NavLink>
                            </li>

                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/approve">
                                    <span><BsUiChecks className="dashboard-sideNav-logo" /></span>
                                    <span>approve request</span>
                                </NavLink>
                            </li>
                        </ul>
                    </>}

                    {user.role === "user" && <>
                        <ul className="dashboard-sideNav">
                            <li className="dashboard-sideNav-item ">
                                <NavLink className="dashboard-sideNav-link dashboard-sideNav-item--active" activeClassName="dashboard-sideNav-link--active" to="/dashboard/home">
                                    <span><AiFillDashboard className="dashboard-sideNav-logo" /></span>
                                    <span>dashboard</span>
                                </NavLink>
                            </li>

                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/investment">
                                    <span><FaHandHoldingUsd className="dashboard-sideNav-logo" /></span>
                                    <span>investment</span>
                                </NavLink>
                            </li>

                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/withdrawal">
                                    <span><BsCreditCard className="dashboard-sideNav-logo" /></span>
                                    <span>withdrawal</span>
                                </NavLink>
                            </li>

                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/history">
                                    <span><FaHistory className="dashboard-sideNav-logo" /></span>
                                    <span>history</span>
                                </NavLink>
                            </li>

                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/deposit">
                                    <span><RiCoinsFill className="dashboard-sideNav-logo" /></span>
                                    <span>deposit funds</span>
                                </NavLink>
                            </li>

                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/myInvestment">
                                    <span><RiTableAltFill className="dashboard-sideNav-logo" /></span>
                                    <span>my investment</span>
                                </NavLink>
                            </li>


                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/refferal">
                                    <span><RiTeamLine className="dashboard-sideNav-logo" /></span>
                                    <span>referrals panel</span>
                                </NavLink>
                            </li>
                        </ul>
                    </>}

                    <footer>
                        <ul>
                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/profile">
                                    <span><AccountCircle className="dashboard-sideNav-logo" /></span>
                                    <span>profile</span>
                                </NavLink>
                            </li>
                        </ul>

                        <ul>
                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/">
                                    <span><AssignmentReturn className="dashboard-sideNav-logo" /></span>
                                    <span>go to home</span>
                                </NavLink>
                            </li>
                        </ul>
                    </footer>
                </nav>
                <div className="dashboard-content">
                    {/* header component */}
                    <HeaderDash username={user.name} />
                    <div className="dashboard-children">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainLayout;