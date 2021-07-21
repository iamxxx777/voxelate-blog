import './Sidetop.css';

const Sidetop = ({ author, click }) => {

    return (
        <div className="sidetop">
            <div className="top-image">
                <img src={author.avatar} alt={author.username} />
            </div>

            <div className="top-button">
                <button onClick={click}><i className="fa fa-bars" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}

export default Sidetop;
