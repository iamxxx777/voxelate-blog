import "./Postsscreen.css";

// Components

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Newsflash from "../../components/NewsFlash/Newsflash";
import Footer from "../../components/Footer/Footer";
import Postspage from "./Postspage/Postspage";

const Postsscreen = ({ click }) => {

    return (
        <div className='postscreen'>
            <Header />
            <Navbar toggle={click} />
            <Newsflash />
            <Postspage />
            <Footer />
        </div>
    )
}

export default Postsscreen
