import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidenav.css";


const Sidenav = ({ show , click}) => {

    const [drop, setDrop] = useState(false);

    return (
        <div className={`sidenav ${show && "translate"}`}>
            <div className="sidenav-container">
                <Link to="/" onClick={click}>Home</Link>
                <Link to="/allposts" onClick={click}>Latest Posts</Link>
                <button href="#" id="side-drop-btn" onClick={() => setDrop(!drop)}><span>Categories</span> <i className="fa fa-caret-down" aria-hidden="true"></i></button>
                <div className={`side-drop ${drop && "show"}`}>
                    <Link to="/allposts" href="#" onClick={click}>Technology</Link>
                    <Link to="/allposts" href="#" onClick={click}>Cryptocurrency</Link>
                    <Link to="/allposts" href="#" onClick={click}>Lifestyle</Link>
                    <Link to="/allposts" href="#" onClick={click}>Football</Link>
                    <Link to="/allposts" href="#" onClick={click}>Music</Link>
                </div>
                <Link to="login" onClick={click}>Log in</Link>
                <Link to="register" onClick={click}>Sign up</Link>
            </div>
        </div>
    )
}

export default Sidenav
