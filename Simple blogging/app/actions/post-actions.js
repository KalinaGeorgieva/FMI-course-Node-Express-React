import {ADD_POST, REMOVE_POST, EDIT_POST, CHANGE_STATUS} from '../config/constants'


let nextId = 0;
export function addPost(props){
    let post = {
        title: props.title,
        author: props.author,
        msg: props.msg,
        timestamp: Date.now()
    }
    debugger;
    return {
        type: ADD_POST,
        id: nextId +=1,
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