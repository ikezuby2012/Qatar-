import axios from "axios"
import {
    CREATE_WALLET_SUCCESS, CREATE_WALLET_FAILURE, GET_USER_WALLET_SUCCESS, GET_USER_WALLET_FAILURE
} from "./types";



export const handleRequest = (data, req, url, successType, failureType) =>
    async (dispatch) => {
        let token = JSON.parse(localStorage.getItem("token"));
        try {
            const res = await axios[req](url, data, {
                headers: {
                    "Authorization": `bearer ${token}`
                }
            });

            dispatch({
                type: successType,
                message: "success",
                payload: res.data
            });
            return Promise.resolve();
        } catch (err) {
            const { error } = err.response.data;
            dispatch({
                type: failureType,
                message: error
            });
            return Promise.reject();
        }
    }

export const createNewWallet = (data) =>
    handleRequest(data, "post", process.env.REACT_APP_CREATE_WALLET, CREATE_WALLET_SUCCESS, CREATE_WALLET_FAILURE);

export const getUserWallet = (id) =>
    async (dispatch) => {
        let token = JSON.parse(localStorage.getItem("token"));
        // const dataObj = JSON.stringify(data);
        console.log(token);
        try {
            // console.log(process.env.REACT_APP_GET_USER_WALLET);
            const res = await axios.get(`${process.env.REACT_APP_GET_USER_WALLET}/${id}`, {
                headers: {
                    "Authorization": `bearer ${token}`
                }
            });

            dispatch({
                type: GET_USER_WALLET_SUCCESS,
                message: "success",
                payload: res.data
            });
            return Promise.resolve();
        } catch (err) {
            const { error } = err.response.data;
            dispatch({
                type: GET_USER_WALLET_FAILURE,
                message: error
            });
            return Promise.reject();
        }
    }
