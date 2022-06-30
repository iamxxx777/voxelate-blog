import "./Postspage.css";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Get Products action
import { getPosts } from "../../../redux/actions/postActions";

//Components
import Loading from "../../../components/Loader/Loading";
import ErrorItem from "../../../components/Loader/ErrorItem";
import LatestPost from "../../../components/Latestposts/LatestPost/LatestPost";
import Sidecomponent from "../../../components/Sidecomponent/Sidecomponent";
import Pagination from "../Pagination/Pagination";

const Postspage = () => {

    const dispatch = useDispatch();

    const { posts, loading, error } = useSelector((state) => state.posts);

    // Pagination
    const articlesPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    let postsLength = posts.length;

    const paginate = (number) => setCurrentPage(number);

    let currentProductIndex = currentPage * articlesPerPage;
    let previousProductIndex = currentProductIndex - articlesPerPage;
    let displayedProducts = posts.slice(previousProductIndex, currentProductIndex);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <ErrorItem error={error} />;
    }


    return (
        <div className="all-posts container">
            <div className="all-posts-container card">
                <h2>All Posts</h2>

                <div className="all-posts-div">
                    {displayedProducts.map((post) => (
                        <LatestPost key={post._id} post={post} />
                    ))}
                </div>
                <Pagination
                    length={postsLength}
                    posts={articlesPerPage}
                    pagination={paginate}
                />
            </div>
            <Sidecomponent stories={posts} />
        </div>
    );
}

export default Postspage;
