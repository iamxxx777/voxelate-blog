import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAuthorPosts } from "../../../redux/actions/authorActions";

import Loading from "../../Loader/Loading";
import ErrorItem from "../../Loader/ErrorItem";
import Post from "./Post";
import './AllPost.css';

const AllPost = () => {

    const dispatch = useDispatch();

    const getPosts = useSelector((state) => state.authorPosts);
    const { user } = useSelector((state) => state.author);

    const { posts, loading, error } = getPosts;

    useEffect(() => {
        if(user) {
            dispatch(getAuthorPosts(user.username));
        }
    }, [dispatch, user]);

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <ErrorItem error={error} />;
    }


    return (
        <div className='all-post'>
            <h1>All Posts by {user.username}</h1>

            <h5>Total number of posts: <span>{posts.length}</span></h5>
            {loading ? (<h1>Loading....</h1>) : 
                error ? (<h1>Error...</h1>)
                : <div className="all-post-container">
                    {posts.map((post) => <Post key={post._id} data={post} />)}
                  </div>
            }
            
        </div>
    )
}

export default AllPost;
