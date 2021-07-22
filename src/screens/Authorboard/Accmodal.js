import './Accmodal.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAuthor } from '../../redux/actions/authorActions';

const Accmodal = ({ modal, click, author }) => {

    let dispatch = useDispatch();
    let history = useHistory();

    const { deleted } = useSelector((state) => state.delete)

    const deleteAcc = () => {
        dispatch(deleteAuthor(author._id));
        
        if(deleted.err) {
            alert("Error deleting user, try again");
        }
    }

    useEffect(() => {
        if(deleted.success) {
            history.replace("/register");
            window.location.reload();
        }
    }, [deleted.success, history]);

    return (
        <div className={`modal ${modal && "show-modal"}`}>
            <div className="modal-content">
                <span onClick={click} className="close" title="Close Modal">&times;</span>

                <div className="modal-container">
                    <h1>Delete Account</h1>
                    <p>This action is irreversable</p>

                    <div className="modal-buttons">
                        <button className="cancelbtn" onClick={click}>Cancel</button>
                        <button className="deletebtn" onClick={deleteAcc}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accmodal;
