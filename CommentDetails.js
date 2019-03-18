import React from 'react';
const CommentDetails=props=>{
	return (
		<div className="comment">
    <a className="avatar">
      <img src={props.image}/>
    </a>
    <div className="content">
      <a className="author">{props.author}</a>
      <div className="metadata">
        <div className="date">{props.time}</div>
      </div>
      <div className="text">
        {props.comment}
      </div>
      <div className="actions">
        <a className="reply">Reply</a>
        <a className="save">Save</a>
        <a className="hide">Hide</a>
      </div>
    </div>
  </div>
		);
}; 
export default CommentDetails;
