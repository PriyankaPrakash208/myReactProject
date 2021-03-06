import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
    // console.log(props);
    return(
        <div className="comment">
            <a href="/" className="avatar">
                <img src={props.profile} alt="Avatar" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date"> {props.timeAgo}</span>
                </div>
                <div className="text"> {props.post}</div>
            </div>
        </div>
    );

}

export default CommentDetail;