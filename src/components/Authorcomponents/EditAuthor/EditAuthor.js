import './EditAuthor.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAuthor, getAuthor } from "../../../redux/actions/authorActions";

const EditAuthor = () => {

    let dispatch = useDispatch();

    const { user } = useSelector((state) => state.author);
    const { update } = useSelector((state) => state.updatePassword);
    const { profilePic, loading, } = useSelector((state) => state.updatePic);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPassword2, setNewPassword2] = useState("");

    const [changePassword, setChangePassword] = useState(false);
    const [changePic, setChangePic] = useState(false);
    const [image, setImage] = useState('');

    const displayPassword = () => {
        setChangePic(false);
        setChangePassword(true);
    }

    const displayPic = () => {
        setChangePassword(false);
        setChangePic(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            oldPassword,
            newPassword,
            newPassword2,
            userId: user._id
        };

        dispatch(updateAuthor(user._id, data));
    }

    const handlePicture = async () => {
        try {
            let formdata = new FormData();
            formdata.append("image", image);
            formdata.append("userId", user._id);

            const { data } = await axios.put("https://voxelate-server.herokuapp.com/api/authors/pic", formdata);
            if (data.success) {
                dispatch(getAuthor(user.username));
            }
        } catch (error) {
            console.error(error);
        }

        // dispatch(putAuthor(data));

    }

    const handleSelect = (e) => {
        setImage(e.target.files[0]);
    }

    useEffect(() => {
        if(update.err) {
            console.log(update.err);
        }
    }, [update.err]);

    useEffect(() => {
        if(profilePic.err) {
            alert(profilePic.err);
        }
    }, [profilePic.err]);


    return (
        <div className='edit-author'>
            <h1>Author Profile</h1>
            <div className="edit-container">
                <div className="profile">
                    <div className="img-div">
                        <img src={user.avatar} alt="user profile" />
                    </div>

                    <h4>{user.email}</h4>
                    <h2>{user.username}</h2>

                    <div className="profile-button">
                        <button onClick={displayPic}>Change Profile Picture</button>
                        <button onClick={displayPassword}>Change Password</button>
                    </div>
                </div>
            </div>

            {changePassword && (
                <form action="#" className="author-edit" onSubmit={handleSubmit}>
                    <h3>Change Password</h3>

                    <div className="form-group">
                        <label htmlFor="#email">Old password</label>
                        <input id='email' type="password" value={oldPassword} name="oldPassword" onChange={(e) => setOldPassword(e.target.value)}  />
                    </div>

                    <div className="form-group">
                        <label htmlFor="#username">New password</label>
                        <input id="username" type="password" value={newPassword} name="newPassword" onChange={(e) => setNewPassword(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="#password">New password again</label>
                        <input id="password" type="password" value={newPassword2} name="newPassword2" onChange={(e) => setNewPassword2(e.target.value)} />
                    </div>

                    <div className="button-group">
                        <button className='edit-cancel'>Cancel</button>
                        <button className='edit-submit' type="submit"
                            style={loading ? {pointerEvents: 'none', backgroundColor: 'lightgray'} : {}}
                        >Submit</button>
                    </div>
                </form>
            )}

            {changePic && (
                <div className="picture-form" >
                    <h3>Change image</h3>
                    
                    <div className="form-group">
                        <label htmlFor="#picture">Choose Image</label>
                        <input id="picture" type="file" accept="image/*" name="image" onChange={handleSelect} />
                    </div>

                    <button onClick={handlePicture}
                        style={loading ? {pointerEvents: 'none', backgroundColor: 'lightgray'} : {}}
                    >Change</button>
                </div>
            )}
            
        
            </div>
    )
}

export default EditAuthor;
