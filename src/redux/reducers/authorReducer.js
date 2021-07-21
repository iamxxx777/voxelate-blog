import * as actionTypes from "../constants/authorsconstants";

export const getAuthorReducer = (state = { user: {} }, action) => {
    switch(action.type) {
        case actionTypes.GET_AUTHOR_REQUEST:
            return {
                loading: true,
                user: {},
            }
        case actionTypes.GET_AUTHOR_SUCCESS:
            return {
                loading: false,
                user: action.payload,
            }
        case actionTypes.GET_AUTHOR_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export const getAuthorDeleteReducer = (state = {deleted: {}}, action) => {
    switch(action.type) {
        case actionTypes.AUTHOR_DELETE_REQUEST:
            return {
                loading: true,
                deleted: {}
            }
        case actionTypes.AUTHOR_DELETE_SUCCESS:
            return {
                loading: false,
                deleted: action.payload
            }
        case actionTypes.AUTHOR_DELETE_FAIL:
            return {
                loading: false,
                deleted: action.payload
            }
        default: {
            return state;
        }
    }
}

export const getAuthorLogoutReducer = (state = {author: {}}, action) => {
    switch(action.type) {
        case actionTypes.AUTHOR_LOGOUT_REQUEST:
            return {
                loading: true,
                author: {}
            }
        case actionTypes.AUTHOR_LOGOUT_SUCCESS:
            return {
                loading: false,
                author: {}
            }
        case actionTypes.AUTHOR_LOGOUT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: {
            return state;
        }
    }
}

export const getAuthorLoginReducer = (state = {author: {}}, action) => {
    switch(action.type) {
        case actionTypes.AUTHOR_LOGIN_REQUEST:
            return {
                loading: true,
                author: {},
            }
        case actionTypes.AUTHOR_LOGIN_SUCCESS:
            return {
                loading: false,
                author: action.payload
            }
        case actionTypes.AUTHOR_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}



export const getAuthorRegisterReducer = (state = {register: {}}, action) => {
    switch(action.type) {
        case actionTypes.AUTHOR_REGISTER_REQUEST:
            return {
                loading: true,
                register: {},
            }
        case actionTypes.AUTHOR_REGISTER_SUCCESS:
            return {
                loading: false,
                register: action.payload
            }
        case actionTypes.AUTHOR_REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const getAuthorUpdateReducer = (state = {update: {}}, action) => {
    switch(action.type) {
        case actionTypes.POST_AUTHOR_REQUEST:
            return {
                loading: true,
                update: {},
            }
        case actionTypes.POST_AUTHOR_SUCCESS:
            return {
                loading: false,
                update: action.payload
            }
        case actionTypes.POST_AUTHOR_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const getAuthorPicReducer = (state = {profilePic: {}}, action) => {
    switch(action.type) {
        case actionTypes.PUT_AUTHOR_REQUEST:
            return {
                loading: true,
                profilePic: {},
            }
        case actionTypes.PUT_AUTHOR_SUCCESS:
            return {
                loading: false,
                profilePic: action.payload
            }
        case actionTypes.PUT_AUTHOR_FAIL:
            return {
                loading: false,
                err: action.payload
            }
        default:
            return state;
    }
}


export const getAuthorPostsReducer = (state = {posts: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_AUTHOR_POSTS_REQUEST:
            return {
                loading: true,
                posts: [],
            }
        case actionTypes.GET_AUTHOR_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
            }
        case actionTypes.GET_AUTHOR_POSTS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case actionTypes.GET_AUTHOR_POSTS_RESET:
            return {
                posts: [],
            }
        default: {
            return state;
        }
    }
};

export const getAuthorPostReducer = (state = {post: {}}, action) => {
    switch(action.type) {
        case actionTypes.GET_AUTHOR_POST_REQUEST:
            return {
                loading: true,
                post: {},
            }
        case actionTypes.GET_AUTHOR_POST_SUCCESS:
            return {
                loading: false,
                post: action.payload,
            }
        case actionTypes.GET_AUTHOR_POST_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case actionTypes.GET_AUTHOR_POST_RESET:
            return {
                post: {},
            }
        default: {
            return state;
        }
    }
};