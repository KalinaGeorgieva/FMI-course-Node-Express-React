import React from 'react';

const Add = () => {
    return (
        <div id="app-page" className="add-new-post-container">
            <div className="panel panel-info col-lg-7 text-center">
                <div className="panel-body">
                    <div id="author-post" className="clearfix">
                            <span>Author: </span>
                            <input type="text" id="author-post-value" placeholder="Author"/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div id="title-post">
                            <span>Title: </span>
                            <input type="text" id="title-post-value" placeholder="Post title"/>
                    </div>
                    <textarea placeholder="Write your post here!" className="add-new-post-textarea"></textarea>
                        
                    
                        <div className="btn-group btn-icons">
                            <button className="btn btn-md" id="btn-post-text" type="button"><span className="glyphicon glyphicon-text-background"></span></button>
                            <button className="btn btn-md" id="btn-post-picture" type="button"><span className="glyphicon glyphicon-picture"></span></button>
                        </div>
                        <button className="btn btn-primary pull-right btn-add-new-post" type="button">Post</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Add