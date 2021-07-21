import Moment from 'react-moment';
import { Link } from 'react-router-dom';


const TopCrypto = ({ crypto }) => {
    return (
            <div className="top-crypto">
                <Link to={`/article/${crypto._id}`}>
                    <div className="trend-img">
                        <img src={crypto.imageURL} alt={crypto.title} />
                    </div>
                            
                    <div className="trend-title">
                        <div className={`category-btn ${crypto.categories}`}>{crypto.categories}</div>
                        <p>
                            <Moment format="MMM DD, YYYY">
                                {crypto.updatedAt}
                            </Moment>
                        </p>
                        <h3>{crypto.title}</h3>
                    </div>
                </Link>
            </div>
        
    )
}

export default TopCrypto;
