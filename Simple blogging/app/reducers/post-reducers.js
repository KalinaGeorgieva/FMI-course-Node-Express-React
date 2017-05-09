import {ADD_POST, REMOVE_POST, EDIT_POST, CHANGE_STATUS} from '../config/constants'
import { combineReducers } from "redux"


const initialState = {
  posts: []
}

const post = (state, action) => {
    debugger;
    switch (action.type) {
        case ADD_POST:
            return {
                id: action.id,
                author: action.post.value,
                title: action.post.value,
                msg: action.post.value,
                timestamp: Date.now(),
                active: true
            };
        case CHANGE_STATUS:
            return state;
        default:
            return state;
    }
};

function postReducer(state = initialState, action) {
    debugger;
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