import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import * as Config from '../constants/Config';

export const changeInfo = createAsyncThunk('edit/changeInfo', async (params, thunkAPI) => {
    const dataUser = await axios.post(`${Config.API_URL}/api/auth/changePassword`, {
        firstName: params.firstName,
        lastName: params.lastName,
        idCardNumber: params.idCardNumber,
        city: params.city,
        phoneNumber: params.phoneNumber,
        age: params.age,
        gender: params.gender,
        dayOfBirth: params.dayOfBirth
    }).then(res => res);
    return dataUser;
})

const changeInformation = createSlice({
    name: 'edit/changePass',
    initialState: null,
    reducers: {},
    extraReducers: {
        [changeInfo.fulfilled]: (state, action) => {
            state.current = action.payload;
        }
    }
});

const { reducer } = changeInformation;
export default reducer;