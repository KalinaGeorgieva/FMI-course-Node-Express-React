import React from 'react';
import NotificationSystem from 'react-notification-system';
import {connect} from 'react-redux';
import ShowPost from '../posts/show-post';
import {dispatch} from 'redux';

import {removePost} from '../../actions/post-actions';

class All extends React.Component {
    onClickRemove(e){
        this.addNotification()
        this.props.dispatch(removePost(+e.target.getAttribute("data-id")))
    }

    addNotification() {
        this.refs.notificationSystem.addNotification({
            message: 'Post removed successfully',
            level: 'success'
        });
    } 

    render() {
    return (
        <div id="app-page" >
            {this.props.posts.length ? 
            <div id="show-status"> Show only: 
                <span className="btn btn-primary btn-active">Active </span> 
                <span className=" btn btn-primary btn-inactive">Inactive</span> 
                {this.props.posts.map((post) => <ShowPost key={post.id} {...post} onClickRemove={(e) => {return this.onClickRemove(e)}}/>)}
                <hr/>
            </div> 
            : <div id="no-posts">No posts yet!</div>}
            <NotificationSystem ref="notificationSystem" />
        </div>        
    )}
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts
    }
}

let AllPosts = connect(
  mapStateToProps, null
)(All)

export default AllPosts