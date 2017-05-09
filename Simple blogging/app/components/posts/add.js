import React from 'react';
import NotificationSystem from 'react-notification-system';
import {connect} from 'react-redux';
import {addPost} from '../../actions/post-actions';
import {dispatch} from 'redux'


class Add extends React.Component {   
    render() {
        return (
            <div id="app-page" className="add-new-post-container">
                <NotificationSystem ref="author" />
                <div className="panel panel-info col-lg-7 text-center">
                    <div className="panel-body">
                        <div id="author-post" className="clearfix">
                                <span>Author: </span>
                                <input type="text" ref="author" id="author-post-value" placeholder="Author"/>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div id="title-post">
                                <span>Title: </span>
                                <input type="text" ref="title" id="title-post-value" placeholder="Post title"/>
                        </div>
                        <textarea placeholder="Write your post here!" ref="msg" className="add-new-post-textarea"></textarea>
                            <div className="btn-group btn-icons">
                                <button className="btn btn-md" id="btn-post-text" type="button"><span className="glyphicon glyphicon-text-background"></span></button>
                                <button className="btn btn-md" id="btn-post-picture" type="button"><span className="glyphicon glyphicon-picture"></span></button>
                            </div>
                            <button className="btn btn-primary pull-right btn-add-new-post" type="button" onClick={() => (this.props.dispatch(addPost( this.refs.title.value, this.refs.author.value, this.refs.msg.value )))} >Post</button>                    
                    </div>
                </div>
            </div>
        )
        }
    }

// const mapStateToProps = (state) => ({
//     posts: state.posts
// })

//  const mapDispatchToProps = (dispatch) => ({
//         onClick(title){
//             dispatch(addPost(title))
//         }
//     }); 


let AddPost = connect(
  null,
  null
)(Add)

export default AddPost