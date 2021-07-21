import './Newsflash.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Newsflash = () => {

    const { posts } = useSelector((state) => state.posts);

    const [text, setText] = useState("");

    var index = 0, first, title;
    if (posts.length > 1) {
        first = posts[0];
        title = first.title;
    }
    
    useEffect(() => {
        const writeText = () => {
            if(title !== undefined) {
                setText(title.substring(0, index));
                index++;
    
                if(index > title.length - 1) {
                    index = 0;
                }
            }
        }

        setInterval(writeText, 100);

        return () => {
            clearInterval(writeText);
        }
    }, [title, posts]);

    return (
        <section className="news-flash container">
            <div className="flash-container">
                <div className="flash-btn">
                    <Link to={`/article/${first !== undefined  ? first._id : ""}`}>Latest</Link>
                </div>
                <div className="flash-text">
                    <h4>{text}</h4>
                </div>
            </div>
        </section>
    )
}

export default Newsflash;
