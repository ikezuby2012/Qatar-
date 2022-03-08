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
import LandingPage from "./pages/landingPage";
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
        <ProtectedRoute path="/dashboard/history" component={History} />
        <ProtectedRoute path="/dashboard/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
