export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";


export const signUpAction = (user) => {
    return {
        type: SIGN_UP,
        payload: user,
    };
};

export const signInAction = (users) => {
    return {
        type: SIGN_IN,
        payload: users,
    };
};

export const signOutAction = () => {
    return {
        type: SIGN_OUT,
        payload: {},
    };
};
