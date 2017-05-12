import React from 'react';
import ReactMarkdown from 'react-markdown';


const ShowPost = (props) => {
    let tags = props.tags.split("#").filter(function(item){return item});
    return (
        <div> 
            <div className="row all-posts">
                <div >
                    <div className="row">
                        <div className="col-lg-9 title">
                            <h4><strong>{props.title}</strong></h4>
                            <span className="glyphicon glyphicon-edit btn-edit-post btn"></span>
                            <span className="glyphicon glyphicon-trash btn-remove-post btn" data-id={props.id} onClick={(e)=> props.onClickRemove(e)}></span>
                        </div>
                    </div>
                    <div className="row">
                        {(props.url) ?
                        <div className="col-md-4">  
                              <img src={props.url}/>
                        </div> : ""}
                        <div className="col-md-8">  
                              <ReactMarkdown source={props.msg} />
                        </div>
                    </div>
                    <div className="row span-group">
                    <div className="span8">
                        <p></p>
                        <p>
                        <span> <i className="glyphicon glyphicon-user"></i> by {props.author} </span>
                        <span>| <i className="glyphicon glyphicon-calendar"></i> {new Date(props.timestamp).toDateString()} {new Date(props.timestamp).toLocaleDateString()}</span>
                        <span>| <i className="glyphicon glyphicon-check"></i> Status: {(props.status) ? "active": "inactive"} </span>                        
                        {tags.length ? 
                        <span>
                            <span>| <i className="glyphicon glyphicon-tags"></i> Tags : </span>
                            {tags.map(function(tag, index){
                                return <span key={index} className="label label-info">{tag}</span> 
                            })}
                        </span>
                         : ""}
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
)}

export default ShowPost;