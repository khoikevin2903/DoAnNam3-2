import {createSlice} from '@reduxjs/toolkit';

const infoPlaceName = createSlice({
    name: 'infoPlaceName',
    initialState: {
        startCity : null,
        startDistrict: null,
        endCity : null,
        endDistrict: null,
        startHours: null,
        startMinute: null,
        endHours : null,
        endMinute : null
    },
    reducers: {
        ChangePlaceName: (state, action) => {
            return {...state, ...action.payload};
        },
        defaultPlaceName: (state, action) => {
            return {...state, 
                startCity : null,
                startDistrict: null,
                endCity : null,
                endDistrict: null,
                startHours: null,
                startMinute: null,
                endHours : null,
                endMinute : null
            }
        }
    }
});

const {reducer, actions} = infoPlaceName;
export const {ChangePlaceName,defaultPlaceName} = actions;
export default reducer;