import * as actionTypes from "../constants/blogpostconstants";
import axios from "../../axios";

export const getPosts = () => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_POSTS_REQUEST});

        const { data } = await axios.get("/api/posts/");

        dispatch({
            type: actionTypes.GET_POSTS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
}

export const getPostDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_POST_DETAILS_REQUEST});

        const { data } = await axios.get(`/api/posts/${id}`);

        dispatch({
            type: actionTypes.GET_POST_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POST_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
}


export const newPost = (details) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.NEW_POST_REQUEST});

        const { data } = await axios.post("/api/posts/", details);

        dispatch({
            type: actionTypes.NEW_POST_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: actionTypes.NEW_POST_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
};

export const newComment = (id, details) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.NEW_COMMENT_REQUEST});

        const { data } = await axios.put(`/api/posts/comment/${id}`, details);

        dispatch({
            type: actionTypes.NEW_COMMENT_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: actionTypes.NEW_COMMENT_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
};

export const deletePost = (id, username) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.DELETE_POST_REQUEST});

        const { data } = await axios.delete(`/api/posts/${id}`, {data: username});

        dispatch({
            type: actionTypes.DELETE_POST_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: actionTypes.DELETE_POST_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
};