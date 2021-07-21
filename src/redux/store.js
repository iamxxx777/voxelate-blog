import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import { getPostDetailsReducer, getPostsReducer, newPostReducer, newCommentReducer, deletePostReducer } from "./reducers/postsReducer";
import { getAuthorReducer, getAuthorPostReducer, getAuthorDeleteReducer, getAuthorLoginReducer, 
    getAuthorUpdateReducer, getAuthorPicReducer, getAuthorRegisterReducer, 
    getAuthorPostsReducer } from "./reducers/authorReducer";


const reducer = combineReducers({
    posts: getPostsReducer,
    post: getPostDetailsReducer,
    addpost: newPostReducer,
    newcomment: newCommentReducer,
    deletedpost: deletePostReducer,
    author: getAuthorReducer,
    loggedIn: getAuthorLoginReducer,
    signIn: getAuthorRegisterReducer,
    delete: getAuthorDeleteReducer,
    updatePassword: getAuthorUpdateReducer,
    updatePic: getAuthorPicReducer,
    authorPosts: getAuthorPostsReducer,
    authorPost: getAuthorPostReducer
});

const middleware = [thunk];

const savedAuthor = localStorage.getItem('author');
let parsedAuthor;

if(savedAuthor) {
    parsedAuthor = JSON.parse(savedAuthor);
} else {
    parsedAuthor = {}
}

const INITIAL_STATE = {
    author: {
        user: parsedAuthor
    }
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;