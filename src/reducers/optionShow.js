import {createSlice} from '@reduxjs/toolkit';

const options = createSlice({
    name: 'option',
    initialState: 0,
    reducers: {
        changeOption : (state, action) => {
            return action.payload;
        }
    }
})

const {reducer, actions} = options;
export const {changeOption} = actions;
export default reducer;