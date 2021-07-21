import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import './Header.css';

const Header = () => {
    return (
        <div className="main-header">
            <Link to="/" className="main container">
                <img src={Logo} alt="main logo" />
                <h1>Voxelate</h1>
            </Link>
        </div>
    )
}

export default Header;
