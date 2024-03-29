import {v1} from "uuid";
import avatar from "../../src/components/avatar_sidebar.png";
import {AppStateDataType} from "../App";
import {
    AddPostActionType,
    UpdateNewPostTextActionType
} from "./reducers/profile-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import {
    SendMessageActionType,
    dialogsReducer,
    UpdateNewMessageActionType
} from "./reducers/dialogs-reducer";

export type addPostAT = AddPostActionType
export type updateNewPostAT = UpdateNewPostTextActionType
export type addMessageAT = SendMessageActionType
export type updateNewMessageAT = UpdateNewMessageActionType

export type ActionsType = updateNewPostAT | addPostAT | addMessageAT | updateNewMessageAT

export type StoreType = {
    _state: AppStateDataType
    _callSubscriber: () => void
    getState: () => AppStateDataType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}


export const store: any = {
    _state: {
        profileData: {
            postsData: [
                {
                    postID: v1(),
                    postLikesCount: 40,
                    postText: "Hello"
                },
                {
                    postID: v1(),
                    postLikesCount: 68,
                    postText: "I'm Learning React"
                },
                {
                    postID: v1(),
                    postLikesCount: 113,
                    postText: "My goal is to be React Developer"
                },
                {
                    postID: v1(),
                    postLikesCount: 104,
                    postText: "I love u!"
                },
            ],
            newPostText: ""
        },
        dialogsData: {
            dialogsUsers: [
                {
                    userID: v1(),
                    userName: "Denis"
                },
                {
                    userID: v1(),
                    userName: "Alex"
                },
                {
                    userID: v1(),
                    userName: "Michael"
                },
                {
                    userID: v1(),
                    userName: "Ludovic"
                },
                {
                    userID: v1(),
                    userName: "Cinderella"
                }
            ],
            dialogsMessages: [
                {
                    messageID: v1(),
                    messageText: "Hello"
                },
                {
                    messageID: v1(),
                    messageText: "How are u?"
                },
                {
                    messageID: v1(),
                    messageText: "I love y'all"
                },
                {
                    messageID: v1(),
                    messageText: "Hello"
                },
                {
                    messageID: v1(),
                    messageText: "Let's fun"
                },
            ],
            newMessageText: ""
        },
        sidebarData: {
            friendsListData: [
                {
                    id: v1(),
                    avatar: avatar,
                    name: "Oleg"
                },
                {
                    id: v1(),
                    avatar: avatar,
                    name: "Mike"
                },
                {
                    id: v1(),
                    avatar: avatar,
                    name: "Stas"
                },
            ]
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },

    dispatch(action: ActionsType) {
        // this._state.profileData = profileReducer(this._state.profileData, action);
        // this._state.dialogsData = dialogsReducer(this._state.dialogsData, action);
        // this._state.sidebarData = sidebarReducer(this._state.sidebarData, action);

        this._callSubscriber(this._state);
    }
};

// @ts-ignore
window.store = store;