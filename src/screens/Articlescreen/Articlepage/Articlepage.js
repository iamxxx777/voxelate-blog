import './Articlepage.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Moment from 'react-moment';

// Comment Action
import { newComment } from "../../../redux/actions/postActions";

// Comment Component
import Comment from "../Comment/Comment";

const Articlepage = ({ article }) => {

    let dispatch = useDispatch();
    let history = useHistory();

    const { commentLoading, comment, commentError } = useSelector((state) => state.newcomment);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            let data = {name, email, feedback};
            dispatch(newComment(article._id, data));
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        if(comment.success) {
            window.location.reload();
        }
        if(commentError) {
            console.log('Error uploading comment');
        }
    }, [comment.success, commentError]);

    return (
        <div className="single-post-div">
            <div className="post">
                <div className="post-image">
                    <img src={article.imageURL} alt={article.title} />
                </div>

                <div className="post-header">
                    <div href="#" className={`category-btn ${article.categories}`}>{article.categories}</div>
                    <h2>{article.title}</h2>
                    <div className="post-author">
                        <div className="post-author-img">
                            <img src={article.author_avatar} alt={article.author} />
                            <span>By {article.author}</span>
                        </div>
                        
                        <div className="post-date">
                            <i className="fa fa-calendar"></i>
                            <h4>
                                <Moment format="MMM DD, YYYY">{article.updatedAt}</Moment>
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="post-info" dangerouslySetInnerHTML={{__html: article.body}}></div>

                <div className="post-buttons">
                    <button onClick={() => history.goBack()}><i className="fa fa-long-arrow-left" aria-hidden="true"></i><span>Prev</span></button>
                    <button><span>Next</span><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                </div>

                <div className="comments">
                    {article.comments && (<h3>{article.comments.filter(((comment) => comment.feedback)).length} Comments</h3>)}
                    
                    <div className="comments-container">
                        {article.comments 
                            ? article.comments.filter((comment) => comment.feedback).map((comment) => <Comment key={comment._id} comment={comment} /> )
                            : null
                        }
                    </div>

                </div>

                <div className="comment-form">
                    <h1>Leave a comment</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="double">
                            <div className="comment-group">
                                <label>Name</label>
                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="comment-group">
                                <label>Email</label>
                                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>

                        <div className="feedback">
                            <label>Comment</label>
                            <textarea name="comment" id="comment" value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
                        </div>

                        <div className="comment-btn">
                            <button type="submit" style={commentLoading ? {
                                pointerEvents: 'none', backgroundColor: 'lightgray'
                            } : {}}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Articlepage;
