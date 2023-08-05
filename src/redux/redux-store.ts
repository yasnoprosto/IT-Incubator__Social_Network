import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profile-reducer";
import {dialogsReducer} from "./reducers/dialogs-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";

const reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    sidebar: sidebarReducer
});

export const store: any = createStore(reducers);