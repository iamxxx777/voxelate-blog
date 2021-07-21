import { useEffect } from "react";
// Components

import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Newsflash from "../../components/NewsFlash/Newsflash";
import Topnews from "../../components/Topnews/Topnews";
import Latest from "../../components/Latest/Latest";
import PostsByCategory from '../../components/PostsByCategory/PostsByCategory';
import Footer from '../../components/Footer/Footer';

import './Homescreen.css';

const Homescreen = ({ click }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header  />
            <Navbar toggle={click} />
            <Newsflash />
            <Topnews />
            <Latest />
            <PostsByCategory />
            <Footer />
        </div>
    )
}

export default Homescreen;
