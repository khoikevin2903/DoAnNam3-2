import {createSlice} from '@reduxjs/toolkit';

const login = createSlice({
    name: 'login',
    initialState: {
        isAuth : false,
        token: null
    },
    reducers: {
        onLogin: (state, action) => {
            return {...state, isAuth: true, token: action.payload};
        },
        onLogout: (state, action) => {
            return {
                isAuth: false,
                token: null
            };
        }
    }
});

const {reducer, actions} = login;
export const {onLogin, onLogout} = actions;
export default reducer;