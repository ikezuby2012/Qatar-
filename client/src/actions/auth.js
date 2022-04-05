import axios from "axios";
import {
   LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_FAILURE, SIGNUP_SUCCESS, LOGOUT, CLEAR,
   UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE, GET_USER_SUCCESS, GET_USER_FAILURE
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

export const signUp = (data) =>
   async (dispatch) => {
      // const dataObj = JSON.stringify(data);
      // console.log("data coming from action " + dataObj);
      try {
         const res = await axios.post(process.env.REACT_APP_SignUpUserApi, data);
         console.log(res.data);
         dispatch({
            type: SIGNUP_SUCCESS,
            message: "success",
            payload: res.data
         });
         return Promise.resolve();
      } catch (err) {
         const { error } = err.response.data;
         let message = "something went wrong!";
         if (error.code === 11000) message = "email already exist!"
         dispatch({
            type: SIGNUP_FAILURE,
            message
         });
         return Promise.reject();
      }
   }

export const login = (data) =>
   async (dispatch) => {
      // const dataObj = JSON.stringify(data);
      // console.log(process.env.REACT_APP_loginUserApi);
      try {
         const res = await axios.post(process.env.REACT_APP_loginUserApi, data);
         if (res.data.token) {
            // console.log("here from action");
            localStorage.setItem("token", JSON.stringify(res.data.token));
            console.log(res.data.token);
         }
         dispatch({
            type: LOGIN_SUCCESS,
            message: "Login successful!",
            payload: res.data
         });
         return Promise.resolve();
      } catch (err) {
         const { error } = err.response.data;
         // console.log(error);
         let message;
         if (error) {
            if (error.statusCode === 401) message = "incorrect email or password!";
         } else {
            message = "server not reachable!";
         }

         dispatch({
            type: LOGIN_FAILURE,
            message
         });
         return Promise.reject();
      }
   }

export const clear = () =>
   async (dispatch) => {
      dispatch({
         type: CLEAR
      });
   }

export const signOut =
   async (dispatch) => {
      try {
         // await axios.get(`${API}/logout`);
         // dispatch({
         //    type: LOGOUT
         // });
      } catch (err) {
         console.log(err.response.message);
      }
      localStorage.removeItem("token");
   }

export const updateMe = (data) =>
   async (dispatch) => {
      // console.log(token);
      let token = JSON.parse(localStorage.getItem("token"));
      // const dataObj = JSON.stringify(data);
      // console.log(process.env.REACT_APP_UPDATE_PROFILE);
      try {
         const res = await axios.patch(process.env.REACT_APP_UPDATE_PROFILE, data, {
            headers: {
               "Authorization": `bearer ${token}`
            }
         });
         dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            message: "Login successful!",
            payload: res.data
         });
         return Promise.resolve();
      } catch (err) {
         const { error } = err.response.data;
         // console.log(error);
         let message;
         if (error) {
            if (error.statusCode === 401) message = "incorrect email or password!";
         } else {
            message = "server not reachable!";
         }

         dispatch({
            type: UPDATE_PROFILE_FAILURE,
            message
         });
         return Promise.reject();
      }
   }

export const getUser = (id) =>
   async (dispatch) => {
      // const dataObj = JSON.stringify(data);
      // console.log(token);
      let token = JSON.parse(localStorage.getItem("token"));
      try {
         // console.log(process.env.REACT_APP_GET_USER_WALLET);
         const res = await axios.get(`${process.env.REACT_APP_getUser}/${id}`, {
            headers: {
               "Authorization": `bearer ${token}`
            }
         });

         dispatch({
            type: GET_USER_SUCCESS,
            message: "success",
            payload: res.data
         });
         return Promise.resolve();
      } catch (err) {
         const { error } = err.response.data;
         dispatch({
            type: GET_USER_FAILURE,
            message: error
         });
         return Promise.reject();
      }
   }
