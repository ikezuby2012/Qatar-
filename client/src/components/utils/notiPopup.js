// import React from "react";
import { Warning, CheckCircle } from "@material-ui/icons";

const NotiPopup = ({ content, color }) => {
    return <div className={"popup-flex popup-box"}>
        <div className={`popup-center popup--animate popup-alert-${color}`}>
            {color === "danger" && <div className="popup-div">
                <span>
                    <Warning className={`popup-icon-${color}`} />
                </span>
                <h5>{content}</h5>
            </div>}

            {color === "success" && <div className="popup-div">
                <span>
                    <CheckCircle className={`popup-icon-${color}`} />
                </span>
                <h5>{content}</h5>
            </div>}
        </div>
    </div>
}

export default NotiPopup;