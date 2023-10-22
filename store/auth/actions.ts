import { USER_LOGIN, USER_SIGNUP, UserLogin, UserSignUp } from "./types"

export function userLogin(email: string, password: string): UserLogin {
    return {
        type: USER_LOGIN,
        email,
        password
    };
};

export function userSignUp(fullName: string, email: string, password: string, confirmPassword: string): UserSignUp {
    return {
        type: USER_SIGNUP,
        fullName,
        email,
        password,
        confirmPassword
    };
};
