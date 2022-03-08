import React, { useState } from 'react';
import { Redirect } from "react-router-dom";

//icons
import {
    Search, Notifications, Face, Settings, Close
} from "@material-ui/icons";
import ResDash from './res-dash';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const HeaderDash = ({ username }) => {
    const [res, setIsRes] = useState(false);

    if (username === undefined) {
        return <Redirect to="/login" />
    }
    // console.log(username);
    // username = "john terry";
    let name = username.split(" ")[0];

    const toggleButton = (e) => setIsRes(!res);
    const onClose = (e) => setIsRes(false);

    return (
        <header className="dashboard-header">
            {res && <ResDash onClose={onClose}/>}
            {/* responsive button */}
            <div className="res">
                <button className="res-button" onClick={(e) => toggleButton(e)}>
                    {res ? <Close className="res-icon" /> : <div className="res-div" >&nbsp;</div>}
                </button>
            </div>

            <h2 className="dashboard-header-hdText">
                welcome {name}
            </h2>

            <form action="#" className={"dashboard-header-form"}>
                <button className={"dashboard-header-form_button"}>
                    <Search className={"dashboard-header-form_icon"} />
                </button>
                <input type="search" className={"dashboard-header-form_input"} placeholder={"search"} />
            </form>
            <div className="dashboard-header-flex">
                <div className={"dashboard-header-notification"}>
                    <Notifications className={"dashboard-header-notification_icon"} />
                    <span className={"dashboard-header-notification-circle"}></span>
                </div>
                <div className="dashboard-header-setting dashboard-header-notification">
                    <span>
                        <Settings className={"dashboard-header-notification_icon"} />
                    </span>
                </div>
            </div>
        </header>
    );
}

export default HeaderDash;
