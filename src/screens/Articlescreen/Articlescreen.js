import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getPostDetails } from "../../redux/actions/postActions";

import './Articlescreen.css';

// Components
import Loading from "../../components/Loader/Loading";
import ErrorItem from "../../components/Loader/ErrorItem";
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Newsflash from '../../components/NewsFlash/Newsflash';
import Sidecomponent from '../../components/Sidecomponent/Sidecomponent';
import Articlepage from './Articlepage/Articlepage';

const Articlescreen = ({ click }) => {

    let dispatch = useDispatch();
    const { id } = useParams();

    const { posts } = useSelector((state) => state.posts);
    const { loading, error, post } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(getPostDetails(id));
    }, [dispatch, id]);

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <ErrorItem error={error} />;
    }

    return (
        <div>
            <Header />
            <Navbar toggle={click} />
            <Newsflash />
            <section className="single-post container">
                <Articlepage article={post} />
                <Sidecomponent stories={posts} />
            </section>
            <Footer />
        </div>
    );
}

export default Articlescreen;
