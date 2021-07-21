import { useHistory } from 'react-router-dom';

// Component
import LatestPost from './LatestPost/LatestPost';

import "./LatestPosts.css";

const LatestPosts = ({ posts }) => {

    let history = useHistory();

    let slicedposts;

    if(posts) {
        slicedposts = posts.slice(0, 8);
    }

    return (
        <div className="latest-posts card">
            <h1>Latest Posts</h1>
            <div className="latest-posts-container">
                {posts ? 
                    slicedposts.map((post) => <LatestPost key={post._id} post={post} />)
                    : null
                }
            </div>
            <div className="latest-more">
                <button onClick={() => history.push("/allposts")}>More articles <i className="fa fa-arrow-down" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}

export default LatestPosts;
