import './Comment.css';

import { format } from 'timeago.js';

const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <div className="comment-img">
                <img src={comment.commentImage} alt={comment.name} />
            </div>
            <div className="comment-body">
                <div className="comment-head">
                    <div className="comment-name">
                        <h4>{comment.name}</h4>
                    </div>
                    <div className="comment-date">
                        <h5>{format(comment.date)}</h5>
                    </div>
                </div>
                <div className="comment-feedback">
                    <p>{comment.feedback}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment;
