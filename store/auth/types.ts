
export const USER_LOGIN = 'USER_LOGIN';
export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_LOGOUT = 'USER_LOGOUT';

export interface UserState {
    id: string,
    token: string,
    fullName: string,
    email: string
}

export interface Login {
    email: string;
    password: string;
}

export interface SignUp {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface UserLogin {
    type: typeof USER_LOGIN,
    email: string,
    password: string
};

export interface UserSignUp {
    type: typeof USER_SIGNUP,
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string
};

export interface UserLogout {
    type: typeof USER_LOGOUT
};

export type UserActions = UserLogin | UserSignUp | UserLogout;