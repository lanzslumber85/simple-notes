import firebase, { database } from "./../../firebase/index";

export const getAction = () => dispatch => {
    setTimeout(() => {
        return dispatch({
            type: "CHANGE_USERNAME",
            value: "01000001 01111010 01101100 01100001 01101110",
        });
    }, 4000);
};

export const registerUserIntoFirebase = data => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({ type: "CHANGE_LOADING", value: true });
        firebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .then(res => {
                console.log("success: ", res);
                dispatch({ type: "CHANGE_LOADING", value: false });
                resolve(true);
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("errorCode:", errorCode);
                console.log("errorMessage:", errorMessage);
                dispatch({ type: "CHANGE_LOADING", value: false });
                reject(false);
            });
    });
};

export const loginUser = data => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({ type: "CHANGE_LOADING", value: true });
        firebase
            .auth()
            .signInWithEmailAndPassword(data.email, data.password)
            .then(res => {
                // console.log("success: ", res);
                const dataUser = {
                    email: res.user.email,
                    uid: res.user.uid,
                    emailVerified: res.user.emailVerified,
                    refreshToken: res.user.refreshToken,
                };
                dispatch({ type: "CHANGE_LOADING", value: false });
                dispatch({ type: "CHANGE_ISLOGIN", value: true });
                dispatch({ type: "CHANGE_USERNAME", value: dataUser });
                resolve(dataUser);
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("errorCode:", errorCode);
                console.log("errorMessage:", errorMessage);
                dispatch({ type: "CHANGE_LOADING", value: false });
                dispatch({ type: "CHANGE_ISLOGIN", value: false });
                reject(false);
            });
    });
};

export const addDataToAPI = data => dispatch => {
    database.ref("notes/" + data.userID).push({
        title: data.title,
        content: data.content,
        date: data.date,
    });
};

export const getDataFromAPI = userID => dispatch => {
    const urlNotes = database.ref("notes/" + userID);
    return new Promise((resolve, reject) => {
        urlNotes.on("value", snapshot => {
            const data = snapshot.val();
            console.log("get Data:", data);

            const dataInArrayFormat = [];
            Object.keys(data).map(key => {
                dataInArrayFormat.push({
                    id: key,
                    data: data[key],
                });
            });

            dispatch({ type: "SET_NOTES", value: dataInArrayFormat });
            resolve(dataInArrayFormat);
        });
    });
};
