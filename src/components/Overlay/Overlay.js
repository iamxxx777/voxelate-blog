import "./Overlay.css";

const Overlay = ({ show, click }) => {
    return (
       show && <div className="side-overlay" onClick={click}></div>
    )
}

export default Overlay;
