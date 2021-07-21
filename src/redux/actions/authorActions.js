import * as actionTypes from "../constants/authorsconstants";
import axios from "../../axios";

export const getAuthor = (username) => async (dispatch, getState) => {
    try {
        dispatch({type: actionTypes.GET_AUTHOR_REQUEST});

        const { data } = await axios.get(`/api/authors/${username}`);

        dispatch({
            type: actionTypes.GET_AUTHOR_SUCCESS,
            payload: data
        });

        localStorage.setItem('author', JSON.stringify(getState().author.user));

    } catch (error) {
        dispatch({
            type: actionTypes.GET_AUTHOR_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
};

export const deleteAuthor = (id) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.AUTHOR_DELETE_REQUEST});

        const { data } = await axios.delete(`api/authors/delete/${id}`);

        dispatch({
            type: actionTypes.AUTHOR_DELETE_SUCCESS,
            payload: data
        });

        localStorage.removeItem('author');

    } catch (error) {
        dispatch({
            type: actionTypes.AUTHOR_DELETE_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }

}

export const logoutAuthor = () => async (dispatch) => {
    dispatch({type: actionTypes.AUTHOR_LOGOUT_REQUEST});

    localStorage.removeItem('author');

}

export const logAuthor = (details) => async (dispatch, getState) => {
    try {
        dispatch({type: actionTypes.AUTHOR_LOGIN_REQUEST});

        const { data } = await axios.post("/api/auth/login", details);

        dispatch({
            type: actionTypes.AUTHOR_LOGIN_SUCCESS,
            payload: data
        });

        localStorage.setItem('author', JSON.stringify(getState().loggedIn.author));

    } catch (error) {
        dispatch({
            type: actionTypes.AUTHOR_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
    
}

export const registerAuthor = (details) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.AUTHOR_REGISTER_REQUEST});

        const { data } = await axios.post("/api/auth/register", details);

        dispatch({
            type: actionTypes.AUTHOR_REGISTER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.AUTHOR_REGISTER_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
}

export const updateAuthor = (id, details) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.POST_AUTHOR_REQUEST});

        const { data } = await axios.put(`/api/authors/pic/${id}`, details);

        dispatch({
            type: actionTypes.POST_AUTHOR_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.POST_AUTHOR_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
}

export const putAuthor = ( details) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.PUT_AUTHOR_REQUEST});

        const { data } = await axios.put(`/api/authors/pic`, details);

        dispatch({
            type: actionTypes.PUT_AUTHOR_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.PUT_AUTHOR_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
}


export const getAuthorPosts = (username) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_AUTHOR_POSTS_REQUEST});

        const { data } = await axios.get(`/api/authors/${username}/posts/`);

        dispatch({type: actionTypes.GET_AUTHOR_POSTS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_AUTHOR_POST_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
}

export const getAuthorPost = (id) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_AUTHOR_POST_REQUEST});

        const { data } = await axios.get(`/api/authors/post/${id}`);

        dispatch({type: actionTypes.GET_AUTHOR_POST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_AUTHOR_POST_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
}