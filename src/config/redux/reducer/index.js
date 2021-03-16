const initialState = {
    popup: false,
    isLogin: false,
    user: "",
};

const reducer = (state = initialState, action) => {
    if (action.type === "CHANGE_POPUP") {
        return {
            ...state,
            popup: action.value,
        };
    }

    if (action.type === "CHANGE_ISLOGIN") {
        return {
            ...state,
            isLogin: action.value,
        };
    }

    if (action.type === "CHANGE_USERNAME") {
        return { ...state, user: action.value };
    }

    return state;
};

export default reducer;
