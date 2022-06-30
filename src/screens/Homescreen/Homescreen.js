import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../../redux/actions/postActions";


// Components
import Loading from "../../components/Loader/Loading";
import ErrorItem from "../../components/Loader/ErrorItem";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Newsflash from "../../components/NewsFlash/Newsflash";
import Topnews from "../../components/Topnews/Topnews";
import Latest from "../../components/Latest/Latest";
import PostsByCategory from '../../components/PostsByCategory/PostsByCategory';
import Footer from '../../components/Footer/Footer';

import './Homescreen.css';

const Homescreen = ({ click }) => {

    const { loading, posts, error } = useSelector((state) => state.posts);

    let dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch]);

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <ErrorItem error={error} />
    }


    return (
        <div>
            <Header  />
            <Navbar toggle={click} />
            <Newsflash post={posts[0]} />
            <Topnews posts={posts} />
            <Latest posts={posts} />
            <PostsByCategory posts={posts} />
            <Footer />
        </div>
    )
}

export default Homescreen;
