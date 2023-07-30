import {v1} from "uuid";
import {DialogsPageDataType} from "../../App";


const initialState: DialogsPageDataType = {
    dialogsUsers: [
        {
            userId: v1(),
            userName: "Denis"
        },
        {
            userId: v1(),
            userName: "Alex"
        },
        {
            userId: v1(),
            userName: "Michael"
        },
        {
            userId: v1(),
            userName: "Ludovic"
        },
        {
            userId: v1(),
            userName: "Cinderella"
        }
    ],
    dialogsMessages: [
        {
            messageId: v1(),
            messageText: "Hello"
        },
        {
            messageId: v1(),
            messageText: "How are u?"
        },
        {
            messageId: v1(),
            messageText: "I love y'all"
        },
        {
            messageId: v1(),
            messageText: "Hello"
        },
        {
            messageId: v1(),
            messageText: "Let's fun"
        },
    ],
    newMessageText: ""
}

export const dialogsReducer = (state: DialogsPageDataType = initialState, action: any): DialogsPageDataType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            const newMessage = {
                messageId: v1(),
                messageText: state.newMessageText
            };
            state.dialogsMessages.push(newMessage);
            state.newMessageText = "";
            return state;
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            state.newMessageText = action.value;
            return state;
        }
        default:
            return state;
    }
};

export type SendMessageActionType = ReturnType<typeof sendMessageAC>

export const sendMessageAC = () => {
    return {type: "SEND-MESSAGE"};
};

export type UpdateNewMessageActionType = ReturnType<typeof updateNewMessageAC>

export const updateNewMessageAC = (value: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        value: value
    };
};