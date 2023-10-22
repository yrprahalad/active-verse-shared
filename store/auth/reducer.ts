import { USER_LOGIN, UserActions, UserState } from "./types";

const initalState: UserState = {
    id: "",
    token: "",
    fullName: "",
    email: "",
};


export function userReducer(state = initalState, action: UserActions): UserState {
    switch (action.type) {
        case USER_LOGIN:
            const updatedLoginInfo = {
                ...state,
                password: action.password,
                email: action.email,
            };
            return updatedLoginInfo;
        default:
            return state;
    }
};