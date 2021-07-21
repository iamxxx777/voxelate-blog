import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const TopLifeStyle = ({ lifestyle }) => {
    return (
        <div className="top-lifestyle">
            <Link to={`/article/${lifestyle._id}`}>
                <div className="trend-img">
                    <img src={lifestyle.imageURL} alt="post about lifestyle" />
                </div>
                    
                <div className="trend-title">
                    <div className={`category-btn ${lifestyle.categories}`}>{lifestyle.categories}</div>
                    <p>
                        <Moment format="MMM DD, YYYY">
                            {lifestyle.updatedAt}
                        </Moment>
                    </p>
                    <h3>{lifestyle.title}</h3>
                </div>
            </Link>
        </div>
        
    )
}

export default TopLifeStyle;
