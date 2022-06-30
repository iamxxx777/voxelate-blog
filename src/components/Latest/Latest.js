// Components
import LatestPosts from '../Latestposts/LatestPosts';
import Sidecomponent from '../Sidecomponent/Sidecomponent';

import "./Latest.css";

const Latest = ({ posts }) => {

    return (
        <section className="latest container">
            <LatestPosts posts={posts} />
            <Sidecomponent stories={posts} />
        </section>
    );
}

export default Latest
