import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import * as Config from '../constants/Config';

export const changePassword = createAsyncThunk('user/changePassword', async (params, thunkAPI) => {
    const dataUser = await axios.post(`${Config.API_URL}/api/auth/changePassword`, {
        'username': params.username, 'oldPassword': params.oldPassword, 'newPassword': params.newPassword
    }).then(res => res);
    return dataUser;
})

const login = createSlice({
    name: 'login',
    initialState: null,
    reducers: {
       
    },
    extraReducers: {

        [changePassword.fulfilled]: (state, action) => {
            state.current = action.payload;
        }
    }
});

const { reducer } = login;
export default reducer;