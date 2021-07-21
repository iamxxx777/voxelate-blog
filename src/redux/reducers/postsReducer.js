import * as actionTypes from "../constants/blogpostconstants";

export const getPostsReducer = (state = { posts: [] }, action) => {
    switch(action.type) {
        case actionTypes.GET_POSTS_REQUEST:
            return {
                loading: true,
                posts: [],
            }
        case actionTypes.GET_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
            }
        case actionTypes.GET_POSTS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};


export const getPostDetailsReducer = (state = {post: {}}, action) => {
    switch(action.type) {
        case actionTypes.GET_POST_DETAILS_REQUEST:
            return {
                loading: true,
                post: {},
            }
        case actionTypes.GET_POST_DETAILS_SUCCESS:
            return {
                loading: false,
                post: action.payload,
            }
        case actionTypes.GET_POST_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case actionTypes.GET_POST_DETAILS_RESET:
            return {
                post: {},
            }
        default: {
            return state;
        }
    }
};

export const newPostReducer = (state = { newpost: {} }, action) => {
    switch(action.type) {
        case actionTypes.NEW_POST_REQUEST:
            return {
                loading: true,
                newpost: {},
            }
        case actionTypes.NEW_POST_SUCCESS:
            return {
                loading: false,
                newpost: action.payload,
            }
        case actionTypes.NEW_POST_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};



export const newCommentReducer = (state = { comment: {} }, action) => {
    switch(action.type) {
        case actionTypes.NEW_COMMENT_REQUEST:
            return {
                commentLoading: true,
                comment: {},
            }
        case actionTypes.NEW_COMMENT_SUCCESS:
            return {
                commentLoading: false,
                comment: action.payload,
            }
        case actionTypes.NEW_COMMENT_FAIL:
            return {
                commentLoading: false,
                commentError: action.payload,
            }
        default:
            return state;
    }
};

export const deletePostReducer = (state = { deletepost: {} }, action) => {
    switch(action.type) {
        case actionTypes.DELETE_POST_REQUEST:
            return {
                loading: true,
                deletepost: {},
            }
        case actionTypes.DELETE_POST_SUCCESS:
            return {
                loading: false,
                deletepost: action.payload,
            }
        case actionTypes.DELETE_POST_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};