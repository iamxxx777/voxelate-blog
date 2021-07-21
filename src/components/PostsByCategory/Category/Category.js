import Moment from "react-moment";
import { Link } from "react-router-dom";

const Category = ({ post }) => {
    return (
            <Link to={`article/${post._id}`}>
                <div className="category">
                    <div className="category-img">
                        <div className="category-overlay"></div>
                        <img src={post.imageURL} alt={post.title} />
                        <div className={`category-btn ${post.categories}`}>{post.categories}</div>
                    </div>

                    <div className="category-description">
                        <h3>{post.title}</h3>
                        <div className="category-info">
                            <div className="category-author">
                                <img src={post.author_avatar} alt="author" />
                                <span>by {post.author}</span>
                            </div>
                            <div className="category-date">
                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                <span>
                                    <Moment format="MMM DD, YYYY">{post.updatedAt}</Moment>
                                </span>
                            </div>
                        </div>
                        <div className="category-desc">
                            <p>{post.intro.substring(0, 140)}...</p>
                        </div>
                    </div>
                </div>
            </Link>
            
    )
}

export default Category;
