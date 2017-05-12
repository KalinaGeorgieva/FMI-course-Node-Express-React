import {ADD_POST, REMOVE_POST, EDIT_POST, CHANGE_STATUS} from '../config/constants'
import { combineReducers } from "redux"


const initialState = {
  posts: [],
  status: "ALL"
}

const post = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                id: action.id,
                author: action.post.author,
                title: action.post.title,
                msg: action.post.msg,
                tags: action.post.tags,
                timestamp: action.timestamp,
                status: action.post.status,
                url: action.post.url
            };
        default:
            return state;
    }
};

function postReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            return {posts: [
                ...state.posts,
                post(state, action)
            ], status: state.status};
        case REMOVE_POST:
            return {posts: state.posts.filter(post => post.id !== action.id), status: state.status};
        case CHANGE_STATUS:
            return {status: action.status, posts: state.posts};
        default:
        return state;
  }
}


export default postReducer