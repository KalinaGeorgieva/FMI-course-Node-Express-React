import React from 'react';
import NotificationSystem from 'react-notification-system';


let nextId = 0;
class Add extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            posts: []
        }

        this.handleAddPost = this.handleAddPost.bind(this);
    }

    handleAddPost() {
        this.setState({
            posts: [
            ...this.state.posts, {
                id: nextId += 1,
                author: this.refs.author.value,
                title: this.refs.title.value,
                msg: this.refs.msg.value,
                timestamp: Date.now()
            }]
        })

        this.refs.notificationSystem.addNotification({
            message: 'Post added successfully',
            level: 'success'
        });
    }
    
    render() {
        return (
            <div id="app-page" className="add-new-post-container">
                <NotificationSystem ref="notificationSystem" />
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
                            <button className="btn btn-primary pull-right btn-add-new-post" type="button" onClick={this.handleAddPost}>Post</button>                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Add