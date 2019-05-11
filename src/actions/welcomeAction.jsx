import axios from 'axios';

export const ADD_WELCOME = 'ADD_WELCOME';
export const GET_WELCOME = 'GET_WELCOME';
export const GET_WELCOME_SUCCESS = 'GET_WELCOME_SUCCESS';
export const GET_WELCOME_FAIL = 'GET_WELCOME_FAIL';

export const addWelcome = (author, content) => {
    return {
        type: ADD_WELCOME,
        payload: {
            author,
            content
        }
    };
};

export const getWelcomeAsync = () => {
    return (dispatch) => {
        dispatch(getWelcome());
        return axios.get('https://leo-posts-walkthrough.herokuapp.com/v1/posts')
        .then(res => {
            dispatch(getWelcomeSuccess(res.data));
        }, error => {
            dispatch(getWelcomeFail());
        });
    }
};

export const getWelcome = () => {
    return {
        type: GET_WELCOME,
    };
};

export const getWelcomeSuccess = (welcomeList) => {
    return {
        type: GET_WELCOME_SUCCESS,
        payload: {welcomeList}
    };
};

export const getWelcomeFail = () => {
    return {
        type: GET_WELCOME_FAIL,
    }
};