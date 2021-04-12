import { createStore } from '@reduxjs/toolkit';
import { combineReducers} from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import CheckLogin from './../reducers/checkLogin';
import ShowModal from './../reducers/showModal';
import LoginRegister from './../reducers/login-register';
import LeftList from './../reducers/leftList';
import OptionShow from './../reducers/optionShow';
import persistStore from 'redux-persist/es/persistStore';
import InfoPlace from './../reducers/infoPlace';
import InfoPlaceName from './../reducers/infoPlaceName';
import Place from './../reducers/place';
import DisTrictsStart from './../reducers/districtsStart';
import DisTrictsEnd from './../reducers/districtsEnd';


const rootReducer = combineReducers({
    CheckLogin: CheckLogin,
    LoginRegister: LoginRegister,
    LeftList: LeftList,
    OptionShow: OptionShow,
    ShowModal: ShowModal,
    InfoPlace: InfoPlace,
    InfoPlaceName: InfoPlaceName,
    Place: Place,
    DisTrictsStart: DisTrictsStart,
    DisTrictsEnd: DisTrictsEnd,
});

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return {store, persistor}
}