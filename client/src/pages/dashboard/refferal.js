import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import MainLayout from '../../components/dashboard/MainLayout';

const Refferal = () => {
    const { user } = useSelector((state) => state.user);
    const [copyStatus, setCopyStatus] = useState(false);
    const textAreaRef = useRef(null);

    const onCopy = (e) => {
        e.preventDefault();
        textAreaRef.current.select();
        document.execCommand("copy");
        e.target.focus();
        setCopyStatus(true);
    }

    return (
        <MainLayout>
            <div className="dashRefferal">
                <div className="dashHistory-box">
                    <h2>no referrals</h2>
                </div>

                <div className="dashRefferal-box-1">
                    <div className="dashRefferal-form-group">
                        <label className="dashRefferal-form-label" htmlFor="eth_add">referral link</label>
                        <input type="text"
                            defaultValue={`${window.location.origin}/signup/:${user.id}`}
                            className="dashRefferal-form-input form-input"
                            placeholder="transaction id"
                            contentEditable={false}
                            id="eth_add"
                            ref={textAreaRef}
                            // value={email} error={errors.email}
                            required={true}
                        />
                        <button onClick={onCopy} className="dashRefferal-form-btn">
                            copy
                        </button>
                        {copyStatus && <p>text copied to clipboard!</p>}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Refferal;
