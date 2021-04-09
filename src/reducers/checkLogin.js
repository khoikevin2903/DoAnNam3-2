import {createSlice} from '@reduxjs/toolkit';

const login = createSlice({
    name: 'login',
    initialState: {
        isAuth : false,
        user: null
    },
    reducers: {
        onLogin: (state, action) => {
            console.log(action.payload);
            return {...state, isAuth: true, user: action.payload};
        },
        onLogout: (state, action) => {
            return {
                isAuth: false,
                user: null
            };
        }
    }
});

const {reducer, actions} = login;
export const {onLogin, onLogout} = actions;
export default reducer;