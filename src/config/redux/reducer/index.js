const initialState = {
    popup: false,
    isLogin: false,
    isLoadingWillBeTrigger: false,
    user: {},
    notes: [],
};

const reducer = (state = initialState, action) => {
    if (action.type === "CHANGE_POPUP") {
        return { ...state, popup: action.value };
    }

    if (action.type === "CHANGE_ISLOGIN") {
        return { ...state, isLogin: action.value };
    }

    if (action.type === "CHANGE_USERNAME") {
        return { ...state, user: action.value };
    }

    if (action.type === "CHANGE_LOADING") {
        return { ...state, isLoadingWillBeTrigger: action.value };
    }

    if (action.type === "SET_NOTES") {
        return { ...state, notes: action.value };
    }

    return state;
};

export default reducer;
