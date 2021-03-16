import firebase from "./../../firebase/index";

export const getAction = () => dispatch => {
    setTimeout(() => {
        return dispatch({
            type: "CHANGE_USERNAME",
            value: "01000001 01111010 01101100 01100001 01101110",
        });
    }, 4000);
};

export const registerUserIntoFirebase = data => dispatch => {
    dispatch({ type: "CHANGE_LOADING", value: true });

    return firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(userCredential => {
            // Signed in
            var user = userCredential.user;
            console.log("success: ", user);
            dispatch({ type: "CHANGE_LOADING", value: false });
        })
        .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("errorCode:", errorCode);
            console.log("errorMessage:", errorMessage);
            dispatch({ type: "CHANGE_LOADING", value: false });
        });
};
