import React from 'react';


const Popup = ({ content, title, handleClose, children }) => {

    // const handleClose = () => {
    //     // const { history } = props;
    //     // history.replace("/signup");
    //     // window.location.reload();
    // }
    return (
        <div className={"popup-grid popup-box"}>
            <div className="popup-center popup--animate">
                {/* <button onClick={handleClose} className={"popup-button"}>&times;</button>
                <span className="text">{content}</span> */}
                {children}
            </div>
        </div>
    );
}
export default Popup;