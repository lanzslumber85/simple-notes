export const getAction = () => dispatch => {
    setTimeout(() => {
        return dispatch({
            type: "CHANGE_USERNAME",
            value: "01000001 01111010 01101100 01100001 01101110",
        });
    }, 2000);
};
