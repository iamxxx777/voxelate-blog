import './Postmodal.css';

const Postmodal = ({ postModal, click, removePost }) => {
    return (
        <div className={`post-modal ${postModal && "show-post-modal"}`}>
            <div className="post-modal-content">
                <span onClick={click} className="close" title="Close Modal">&times;</span>

                <div className="post-modal-container">
                    <h1>Delete Article</h1>
                    <p>This action is irreversable</p>

                    <div className="post-modal-buttons">
                        <button className="cancelbtn" onClick={click}>Cancel</button>
                        <button className="deletebtn" onClick={removePost}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Postmodal;
