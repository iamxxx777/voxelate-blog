import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logoutAuthor } from "../../redux/actions/authorActions";

import "./Sidebar.css";
let imageurl = "https://res.cloudinary.com/iamxxx777/image/upload/v1625213907/default-profile-picture_kvdhsr.jpg";

const Sidebar = ({ url, author, show, click, toggle }) => {

    let dispatch = useDispatch();
    let history = useHistory();


    const logOut = () => {
        dispatch(logoutAuthor());
        history.replace("/login");
        window.location.reload();
    }

    return (
        <div className={`sidebar ${show && "side-translate"}`}>
            <div className="side-container">
                <div className="author-info">
                    <div className="author-img">
                        <img src={author.avatar ? author.avatar : imageurl} alt="profile"/>
                    </div>
                    <h3>{author.username}</h3>
                    <h3>{author.email}</h3>
                    <Link onClick={toggle} to={`${url}/profile`} className="profile-link">Edit Profile</Link>
                    <button className="btn logout" onClick={click}><i className="fa fa-power-off" aria-hidden="true"></i> Delete User</button>
                </div>
                <div className="side-links">
                    <Link onClick={toggle} to="/" className="link">Home</Link>
                    <Link onClick={toggle} to={`${url}`} className="link">All Posts</Link>
                    <Link onClick={toggle} to={`${url}/newpost`} className="link">New Post</Link>
                    <button className="link btn logout" onClick={logOut}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;