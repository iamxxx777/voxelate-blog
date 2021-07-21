import Moment from 'react-moment';
import './Footerpost.css';

const Footerpost = ({ post }) => {
    return (
        <div className="recent-post">
            <div className={`category-btn ${post.categories}`}>{post.categories}</div>
            <h3>{post.title}</h3>
            <div className="recent-author">
                <div className="recent-img">
                    <img src={post.author_avatar} alt={post.title} />
                    <p>By {post.author}</p>
                </div>
                <h4>
                    <Moment format="MMM DD, YYYY">{post.updatedAt}</Moment>
                </h4>
            </div>
        </div>
    )
}

export default Footerpost;
