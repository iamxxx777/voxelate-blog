import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = ({ toggle }) => {

    // const [fixed, setFixed] = useState(false);
    const [drop, setDrop] = useState(false);

    // const sticky = () => {
    //     if(document.body.clientWidth > 601) {
    //         if(window.scrollY > 124) {
    //             setFixed(true);
    //         } else {
    //             setFixed(false);
    //         }
    //     } else {
    //         if(window.scrollY > 84) {
    //             setFixed(true);
    //         } else {
    //             setFixed(false);
    //         }
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener("scroll", sticky);
    //     return () => {
    //         window.removeEventListener('scroll', sticky);
    //     }
    // }, []);

    return (
        <header className="head" >
            <div className="header container">
                <nav className="header-nav">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/allposts" className="nav-link">Latest</Link></li>
                    <li id="dropdown">
                        <button className="nav-link" onClick={() => setDrop(!drop)}>Categories</button>
                        <div className={`dropdown-content ${drop && "drop-flex"}`}>
                            <Link to="/allposts">Cryptocurrency</Link>
                            <Link to="/allposts">Football</Link>
                            <Link to="/allposts">Lifestyle</Link>
                            <Link to="/allposts">Music</Link>
                            <Link to="/allposts">Technology</Link>
                        </div>
                    </li>
                    <li><Link to="/login" className="nav-link">Login</Link></li>
                    <li><Link to="/register" className="nav-link">Signup</Link></li>
                </nav>
                <div className="side-mb">
                    <Link to="/">Home</Link>
                    <button id="menu-btn" onClick={toggle}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                </div>
            </div>    
        </header>
    )
}

export default Navbar;
