import React from 'react';
import ReactMarkdown from 'react-markdown';


const ShowPost = (props) => {
    return (
        <div> 
            <div className="row all-posts">
                <div >
                    <div className="row">
                        <div className="col-lg-9 title">
                            <h4><strong>{props.title}</strong></h4>
                            <span className="glyphicon glyphicon-edit btn-edit-post btn"></span>
                            <span className="glyphicon glyphicon-trash btn-remove-post btn"></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="span6">  
                              <ReactMarkdown source={props.msg} />
                        </div>
                    </div>
                    <div className="row span-group">
                    <div className="span8">
                        <p></p>
                        <p>
                        <span> <i className="glyphicon glyphicon-user"></i> by {props.author} </span>
                        <span>| <i className="glyphicon glyphicon-calendar"></i> {new Date(props.timestamp).toDateString()} {new Date(props.timestamp).toLocaleDateString()}</span>
                        <span>| <i className="glyphicon glyphicon-tags"></i> Tags : </span>
                        <span className="label label-info">Snipp</span> 
                        <span className="label label-info">Bootstrap </span> 
                        <span className="label label-info">UI </span> 
                        <span className="label label-info">growth </span>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
)}

export default ShowPost;