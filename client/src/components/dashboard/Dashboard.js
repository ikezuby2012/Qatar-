import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MainLayout from "./MainLayout";

const DashLayout = ({ name, children }) => {
    document.body.classList.add("bg-color");

    return (
        <MainLayout username={name}>
            <main className="dashboard-main">
                {children}
            </main>
        </MainLayout>
    );
}

export default DashLayout;
