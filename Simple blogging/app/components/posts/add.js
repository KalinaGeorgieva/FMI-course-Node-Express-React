import React from 'react';
import NotificationSystem from 'react-notification-system';
import {connect} from 'react-redux';
import {addPost} from '../../actions/post-actions'


const Add = (props) => {   
        return (
            <div id="app-page" className="add-new-post-container">
                <NotificationSystem ref={props.notificationSystem} />
                <div className="panel panel-info col-lg-7 text-center">
                    <div className="panel-body">
                        <div id="author-post" className="clearfix">
                                <span>Author: </span>
                                <input type="text" ref={props.author} id="author-post-value" placeholder="Author"/>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div id="title-post">
                                <span>Title: </span>
                                <input type="text" ref={props.title} id="title-post-value" placeholder="Post title"/>
                        </div>
                        <textarea placeholder="Write your post here!" ref={props.msg} className="add-new-post-textarea"></textarea>
                            <div className="btn-group btn-icons">
                                <button className="btn btn-md" id="btn-post-text" type="button"><span className="glyphicon glyphicon-text-background"></span></button>
                                <button className="btn btn-md" id="btn-post-picture" type="button"><span className="glyphicon glyphicon-picture"></span></button>
                            </div>
                            <button className="btn btn-primary pull-right btn-add-new-post" type="button" onClick={props.onClick}>Post</button>                    
                    </div>
                </div>
            </div>
        )
    }

const mapStateToProps = (state, ownProps) => {
    debugger;
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(addPost(ownProps))
    }
  }
}

let AddPost = connect(
  mapStateToProps,
  mapDispatchToProps
)(Add)

export default AddPost