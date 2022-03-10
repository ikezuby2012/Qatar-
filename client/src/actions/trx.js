import axios from "axios"
import {
    INVESTMENT_SUCCESS, INVESTMENT_FAILURE, DEPOSIT_SUCCESS, DEPOSIT_FAILURE, WITHDRAWAL_FAILURE, WITHDRAWAL_SUCCESS
} from "./types";



export const depositFund = (data) =>
    async (dispatch) => {
        const dataObj = JSON.stringify(data);
        let token = JSON.parse(localStorage.getItem("token"));
        try {
            const res = await axios.post(process.env.REACT_APP_DEPOSIT, JSON.parse(dataObj), {
                headers: {
                    "authorization": `bearer ${token}`
                }
            });

            dispatch({
                type: DEPOSIT_SUCCESS,
                message: "success",
                payload: res.data
            });
            return Promise.resolve();
        } catch (err) {
            const { error } = err.response.data;
            dispatch({
                type: DEPOSIT_FAILURE,
                message: error
            });
            return Promise.reject();
        }
    }

export const investFund = (data) =>
    async (dispatch) => {
        const dataObj = JSON.stringify(data);
        let token = JSON.parse(localStorage.getItem("token"));
        // console.log(token);
        try {
            const res = await axios.post(process.env.REACT_APP_INVESTMENT, JSON.parse(dataObj), {
                headers: {
                    "Authorization": `bearer ${token}`
                }
            });

            dispatch({
                type: INVESTMENT_SUCCESS,
                message: "success",
                payload: res.data
            });
            return Promise.resolve();
        } catch (err) {
            const { error } = err.response.data;
            dispatch({
                type: INVESTMENT_FAILURE,
                message: error
            });
            return Promise.reject();
        }
    }

export const withdrawFund = (data) =>
    async (dispatch) => {
        const dataObj = JSON.stringify(data);
        let token = JSON.parse(localStorage.getItem("token"));
        // console.log(token);
        try {
            const res = await axios.post(process.env.REACT_APP_WITHDRAWAL, JSON.parse(dataObj), {
                headers: {
                    "Authorization": `bearer ${token}`
                }
            });

            dispatch({
                type: WITHDRAWAL_SUCCESS,
                message: "success",
                payload: res.data
            });
            return Promise.resolve();
        } catch (err) {
            const { error } = err.response.data;
            dispatch({
                type: WITHDRAWAL_FAILURE,
                message: error
            });
            return Promise.reject();
        }
    }

