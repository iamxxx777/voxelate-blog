import './Notfound.css';
import Image from "../../assets/404 pink.svg"

// Components
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Notfound = ({ click }) => {
    return (
        <div className="not-found">
            <Header />
            <Navbar toggle={click} />
            <div className="err-page container">
                <div className='err-text'>
                    <h2>404 page not found</h2>
                    <h4>This dosen't happen often</h4>
                    <p>
                    You are seeing this page because the developer missed a cup of cofee
                    or the page you are looking for does not exist.
                    </p>
                </div>
                <div className="err-image">
                    <img src={Image} alt="404 error" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Notfound;
