const userActionTypes = {
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
    LOGOUT: 'USERS_LOGOUT'
};
const changeloggedIn = (isLoggedIn, user) => {
    return (dispatch) => {
        dispatch({
            type: userActionTypes.LOGIN_SUCCESS,
            payload: { isLoggedIn: isLoggedIn, userData: user }
        });
    }
}

export {userActionTypes, changeloggedIn}