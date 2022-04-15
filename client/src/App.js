import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import ProtectedRoute from "./components/utils/ProtectedRoute";
import DashboardHome from "./pages/dashboard/dashboardHome";
import Deposit from "./pages/dashboard/deposit";
import History from "./pages/dashboard/history";
import Investment from "./pages/dashboard/investment";
import Profile from "./pages/dashboard/profile";
import Refferal from "./pages/dashboard/refferal";
import Withdrawal from "./pages/dashboard/withdrawal";
import MyInvestment from "./pages/dashboard/myInvestment";
import LandingPage from "./pages/landingPage";
import DashboardUser from "./pages/dashboard/dashboard-user";
import DashboardTrx from "./pages/dashboard/dashboard-trx";
import LeaderBoard from "./pages/dashboard/leaderboard";
import Wallet from "./pages/dashboard/wallet";
import ApproveRequest from "./pages/dashboard/approve-request";
import ApproveId from "./pages/dashboard/approve-id";
import TrxId from "./pages/dashboard/trx-id";
import Login from "./pages/login";
import Signup from "./pages/signup";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup/:id" component={Signup} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoute path="/dashboard/home" component={DashboardHome} />
        <ProtectedRoute path="/dashboard/investment" component={Investment} />
        <ProtectedRoute path="/dashboard/withdrawal" component={Withdrawal} />
        <ProtectedRoute path="/dashboard/deposit" component={Deposit} />
        <ProtectedRoute path="/dashboard/refferal" component={Refferal} />
        <ProtectedRoute path="/dashboard/myInvestment" component={MyInvestment} />
        <ProtectedRoute path="/dashboard/history" component={History} />
        <ProtectedRoute path="/dashboard/profile" component={Profile} />
        <ProtectedRoute path="/dashboard/users" component={DashboardUser} />
        <ProtectedRoute path="/dashboard/trx" component={DashboardTrx} />
        <ProtectedRoute path="/dash/trx/:type/:id" component={TrxId} />
        <ProtectedRoute path="/dashboard/LeaderBoard" component={LeaderBoard} />
        <ProtectedRoute path="/dashboard/wallet" component={Wallet} />
        <ProtectedRoute path="/dashboard/approve" component={ApproveRequest} />
        <ProtectedRoute path="/dash/approve/:type/:id" component={ApproveId} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
