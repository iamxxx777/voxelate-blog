import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const Sidestory = ({ story }) => {
    return (
        <Link to={`/article/${story._id}`}>
            <div className="story">
                <div className="story-img">
                    <img src={story.imageURL} alt="stories" />
                </div>
                <div className="story-info">
                    <h3 className="story-title">{story.title}</h3>
                    <div className="story-date">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <h3>
                            <Moment format="MMM DD, YYYY">{story.updatedAt}</Moment>
                        </h3>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Sidestory
