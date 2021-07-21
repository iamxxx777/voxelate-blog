import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const TopTech = ({ technology }) => {
    return (
        
            <div className="top-tech">
                <Link to={`/article/${technology._id}`}>
                    <div className="trend-img">
                        <img src={technology.imageURL} alt={technology.title} />
                    </div>
                            
                    <div className="trend-title">
                        <div className={`category-btn ${technology.categories}`}>{technology.categories}</div>
                        <p>
                            <Moment format="MMM DD, YYYY">
                                {technology.updatedAt}
                            </Moment>
                        </p>
                        <h3>{technology.title}</h3>
                    </div>
                </Link> 
            </div>
             
    )
}

export default TopTech;
