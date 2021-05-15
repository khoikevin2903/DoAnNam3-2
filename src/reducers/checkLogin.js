import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import * as Config from '../constants/Config';

export const userLogin = createAsyncThunk('user/login', async (params, thunkAPI) => {
    // thunkAPI.dispatch(...) Dung de dispatch cac action nao do
    const dataUser = await axios.post(`${Config.API_URL}/api/auth/signin`, {
        'username': params.username, 'password': params.password
    }).then(res => res);
    return dataUser;
})

const login = createSlice({
    name: 'login',
    initialState: {
        current: {},
        isAuth: false
    },
    reducers: {
        onLogout: (state) => {
            return {
                current: {},
                isAuth: false
            }

        },
        onLogin: (state, action) => {
            return {
                current: {...action.payload},
                isAuth: true
            }
        }
    },
    extraReducers: {

        [userLogin.fulfilled]: (state, action) => {
            state.current = action.payload;
        }
    }
});

const { reducer, actions } = login;
export const { onLogout, clearState, onLogin } = actions;
export default reducer;