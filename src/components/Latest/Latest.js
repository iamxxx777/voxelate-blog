import { useSelector } from 'react-redux';

// Components
import LatestPosts from '../Latestposts/LatestPosts';
import Sidecomponent from '../Sidecomponent/Sidecomponent';

import "./Latest.css";

const Latest = () => {

    const { loading, posts, error } = useSelector((state) => state.posts);

    return (
        <section className="latest container">
        {loading ? (<h2>Loading...</h2>) :
            error ? (<h2>Error...</h2>) : 
            (
                <>
                    <LatestPosts posts={posts} />
                    <Sidecomponent stories={posts} />
                </>
            )
        }
            
        </section>
    )
}

export default Latest
