import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import * as Config from '../constants/Config';

export const changeInfo = createAsyncThunk('edit/changeInfo', async (params, thunkAPI) => {
    console.log(params)
    const dataUser = await axios.put(`${Config.API_URL}/api/user-information/modify`, {
        id: params.id,
        firstName: params.firstName,
        lastName: params.lastName,
        idCardNumber: params.idCardNumber,
        address: params.address,
        phoneNumber: params.phoneNumber,
        age: Number(params.age),
        gender: params.gender,
        dob: params.dob,
    },{
        headers: {
            'Authorization': `Bearer ${params.header}`
        }
    }).then(res => console.log(res));
    return dataUser;
})

export const getInfo = createAsyncThunk('edit/getInfo', async (params, thunkAPI) => {
    const dataUser = await axios.get(`${Config.API_URL}/api/user-information/${params.id}`,{
        headers: {
            'Authorization': `Bearer ${params.header}`
        }
    }).then(res => thunkAPI.dispatch(saveInfo(res.data)));
    return dataUser;
})

const changeInformation = createSlice({
    name: 'edit/changePass',
    initialState: {},
    reducers: {
        saveInfo : (state, action) => {
            return action.payload;
        }
    },
    extraReducers: {
        [changeInfo.fulfilled]: (state, action) => {
            state = action.payload;
        },
        [getInfo.fulfilled]: (state, action) => {
            state = action.payload;
        }

    }
});

const { reducer, actions } = changeInformation;
export const { saveInfo } = actions;
export default reducer;