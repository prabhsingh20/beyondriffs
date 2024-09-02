import axios from 'axios';
import {
    USER_LOGIN_REQUEST,
    USER_SEND_OTP,
    USER_SEND_OTP_SUCCESS,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from "../constants/userConstants"; 

export const sendOtp = (phone_number) => async (dispatch) => {
    try {
        dispatch({ type: USER_SEND_OTP });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const { data: otpData } = await axios.post(
            'http://127.0.0.1:8000/send/otp',
            { phone_number }, // Simplified object literal notation
            config
        );

        dispatch({
            type: USER_SEND_OTP_SUCCESS,
            payload: otpData
        });

        return {success :true ,data :otpData}

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
        return { error: true, message: error.Message };
    }
};

// Action to login using OTP
export const login = (phone_number, otp) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const { data: loginData } = await axios.post(
            'http://127.0.0.1:8000/api/login/', // Corrected the URL
            { phone_number, otp }, // Simplified object literal notation
            config
        );

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: loginData
        });

        // Store user info in localStorage
        localStorage.setItem('userInfo', JSON.stringify(loginData));
        return {success :true ,data :loginData}

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
        return { error: true, message: error.Message };
    }
   
};

export const logout = () =>(dispatch)=> {
    localStorage.removeItem('userInfo')
    dispatch( 
        {
            type:USER_LOGOUT
        }
     )
}