import {ADD_POST, REMOVE_POST, EDIT_POST, CHANGE_STATUS} from '../config/constants'


let nextId = 0;
export function addPost(title, author, msg, tags){
    let post = {
        title, author, msg, tags
    }

    return {
        type: ADD_POST,
        id: nextId +=1,
        timestamp: Date.now(),
        post
    }
}

export function removePost(id){
    return {
        type: ADD_POST,
        id
    }
}

export function editPost(post){
    return {
        type: EDIT_POST,
        post
    }
}

export function changeStatus(id){
    return {
        type: ADD_POST,
        id
    }
}