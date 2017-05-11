import {ADD_POST, REMOVE_POST, EDIT_POST, CHANGE_STATUS} from '../config/constants'
import { combineReducers } from "redux"


const initialState = {
  posts: []
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
                active: true
            };
        case CHANGE_STATUS:
            return state;
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
            ]};
    case REMOVE_POST:
      return state.filter(post => post !== action.id);;
    case CHANGE_STATUS:
        return state.map(p =>
            post(p, action)
        );
    default:
      return state;
  }
}


export default postReducer