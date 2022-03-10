import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

import ResButton from '../utils/ResButton';

const Header = () => {
    const [res, setIsRes] = useState(false);

    const toggleButton = (e) => setIsRes(!res);
    const closePanel = (e) => setIsRes(false);
    return (
        <header className="header">
            <div className="header-top">
                <h1 className="header-logo">
                    Qatar
                    <span>Invest</span>
                </h1>

                {/* responsive button */}
                <div className="navigation">
                    <input type="checkbox" className="navigation__checkbox" id="navi-toggle" onClick={(e) => toggleButton(e)} />
                    <label htmlFor="navi-toggle" className="navigation__button">
                        <span className="navigation__icon">&nbsp;</span>
                    </label>
                </div>
                {res && <ResButton onClose={closePanel} />}
                <nav className="header-nav">
                    <ul className="header-nav-list">
                        <li className="header-nav-item"><a className="header-nav-link" href="/">home</a></li>
                        <li className="header-nav-item"><a className="header-nav-link" href="#info">about us</a></li>
                        <li className="header-nav-item"><a className="header-nav-link" href="#testimonial">testimonial</a></li>
                        <li className="header-nav-item"><a className="header-nav-link" href="#plans">plans</a></li>
                        <li className="header-nav-item"><NavLink className="header-nav-link" to="/login">sign in</NavLink></li>
                        <li className="header-nav-item"><NavLink className=" header-btns-2" to="/signup/:id">sign up</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="header_text">
                <h1 className="header_text-h1">
                    <span className={"header_text-primary"}>
                        <span>Invest with us!</span>
                        <span>Easy way to trade digital assets</span>
                    </span>
                    <span className={"header_text-secondary"}>
                        a platform that allows you to pay with a simple
                        <span>two step scan and pay,anywhere in the world</span>
                    </span>
                </h1>

                <div className={"header-btns"}>
                    <a className={"header-btns-1"} href="#newsletter">contact us</a>
                    <NavLink className={"header-btns-2"} to="/signup/:id">sign up for free</NavLink>
                </div>
            </div>

        </header>
    );
}

export default Header;
