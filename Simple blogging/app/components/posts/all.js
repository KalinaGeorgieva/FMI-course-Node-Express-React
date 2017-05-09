import React from 'react';
import {connect} from 'react-redux';
import ShowPost from '../posts/show-post';

const All = (props)=> {
    return (
        <div id="app-page" >
            {props.posts.map((post) => <ShowPost key={post.id} {...post}/>)}
        </div>        
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts
    }
}

let AllPosts = connect(
  mapStateToProps,null
)(All)

export default AllPosts