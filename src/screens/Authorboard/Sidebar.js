import { Link, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logoutAuthor, deleteAuthor } from "../../redux/actions/authorActions";

import "./Sidebar.css";
let imageurl = "https://res.cloudinary.com/iamxxx777/image/upload/v1625213907/default-profile-picture_kvdhsr.jpg";

const Sidebar = ({ url, author, show }) => {

    let dispatch = useDispatch();
    let history = useHistory();

    const { deleted } = useSelector((state) => state.delete)

    const logOut = () => {
        dispatch(logoutAuthor());
        history.replace("/login");
        window.location.reload();
    }

    const deleteAcc = () => {
        dispatch(deleteAuthor(author._id));
        
        if(deleted.err) {
            console.log(deleted.err);
        }
    }

    useEffect(() => {
        if(deleted.success) {
            history.replace("/register");
            window.location.reload();
        }
    }, [deleted.success, history]);

    return (
        <div className={`sidebar ${show && "side-translate"}`}>
            <div className="side-container">
                <div className="author-info">
                    <div className="author-img">
                        <img src={author.avatar ? author.avatar : imageurl} alt="profile"/>
                    </div>
                    <h3>{author.username}</h3>
                    <h3>{author.email}</h3>
                    <Link to={`${url}/profile`} className="profile-link">Edit Profile</Link>
                    <button className="btn logout" onClick={deleteAcc}><i className="fa fa-power-off" aria-hidden="true"></i> Delete User</button>
                </div>
                <div className="side-links">
                    <Link to="/" className="link">Home</Link>
                    <Link to={`${url}`} className="link">All Posts</Link>
                    <Link to={`${url}/newpost`} className="link">New Post</Link>
                    <button className="link btn logout" onClick={logOut}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;