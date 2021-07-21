import Moment from 'react-moment';
import { Link } from 'react-router-dom';

import './LatestPost.css';

const LatestPost = ({ post }) => {
    return (
        <Link to={`/article/${post._id}`}>
            <div className="article">
                <div className="article-img">
                    <div className="article-overlay"></div>
                    <img src={post.imageURL} alt={post.title} />
                    <div className={`category-btn ${post.categories}`}>{post.categories}</div>
                </div>
                <div className="article-container">
                    <div className="article-title">
                        <h3>{post.title}</h3>
                    </div>
                    <div className="article-info">
                        <div className="author">
                            <img src={post.author_avatar} alt={`${post.author} portrait`} />
                            <h4>by {post.author}</h4>
                        </div>
                        <div className="article-date">
                            <i className="fa fa-calendar" aria-hidden="true"></i>
                            <h4>
                                <Moment format="MMM DD, YYYY">{post.updatedAt}</Moment>
                            </h4>
                        </div>
                    </div>
                </div>                    
            </div>
        </Link>
        
    )
}

export default LatestPost;
