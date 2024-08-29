import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userLoginReducer } from './reducers/userReducer';

// Define your reducers here
const reducer = combineReducers({userLogin:userLoginReducer}); // Assuming you might have reducers here

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')):null

// Initial state can be defined if necessary
const initialState = {
  userLogin :{userInfo : userInfoFromStorage}
};

// Configure the store
const store = configureStore({
  reducer,
  preloadedState: initialState,
  // No need to explicitly handle middleware or devTools
  devTools: process.env.NODE_ENV !== 'production', // Optional: explicitly set devTools based on environment
});


export default store;