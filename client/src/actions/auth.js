import axios from "axios";
import {
   LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_FAILURE, SIGNUP_SUCCESS, LOGOUT, CLEAR,
   UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE
} from "./types";


export const signUp = (data) =>
   async (dispatch) => {
      // const dataObj = JSON.stringify(data);
      // console.log("data coming from action " + dataObj);
      try {
         const res = await axios.post(process.env.REACT_APP_SignUpUserApi, data);
         if (res.data.token) {
            localStorage.getItem("token", JSON.stringify(res.data.token));
            // console.log(res.data.token);
         }
         console.log(res.data);
         dispatch({
            type: SIGNUP_SUCCESS,
            message: "success",
            payload: res.data
         });
         return Promise.resolve();
      } catch (err) {
         const { error } = err.response.data;
         let message;
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

let token = JSON.parse(localStorage.getItem("token"));
export const updateMe = (data) =>
   async (dispatch) => {
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