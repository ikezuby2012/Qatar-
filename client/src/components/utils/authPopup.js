import React from 'react';

import WarningIcon from '@material-ui/icons/Warning';

const AuthPopup = ({ content, handleClose }) => {
    return (
        <div className={"popup-flex popup-box"}>
            <div className="popup-auth-center popup--animate popup-alert-danger">
                <WarningIcon className="warning-icon" />
                <span className="text">{content}</span>
                <button onClick={handleClose} className={"popup-button"}>&times;</button>
            </div>
        </div>
    );
}

export default AuthPopup;
