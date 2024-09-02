import {
    USER_LOGIN_REQUEST,
    USER_SEND_OTP,
    USER_SEND_OTP_SUCCESS,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from "../constants/userConstants";

const initialState = {
    loading: false,
    userInfo: null,
    error: null,
};

export const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { ...state, loading: true, error: null }; // Clear error on request

        case USER_SEND_OTP:
            return { ...state, loading: true, otpSent: null }; // OTP sent state
        
        case USER_SEND_OTP_SUCCESS:
            return{...state,loading:false, otpSent : true, error :null} //Success

        case USER_LOGIN_SUCCESS:
            return { ...state, loading: false, userInfo: action.payload, error: null }; // Successful login

        case USER_LOGIN_FAIL:
            return { ...state, loading: false, error: action.payload, userInfo: null }; // Handle login failure

        case USER_LOGOUT:
            return { ...initialState, userInfo: null, otpSent: false }; // Clear user info and reset state on logout

        default:
            return state; // Return unchanged state for unhandled action types
    }
};

export default userLoginReducer;