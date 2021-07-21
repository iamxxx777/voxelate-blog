import "./Post.css";
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";

import { deletePost as removePost } from "../../../redux/actions/postActions";

const Post = ({ data }) => {

    let { url } = useRouteMatch();
    let created_date = new Date(data.updatedAt);
    
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = created_date.getFullYear();
    var month = months[created_date.getMonth()];
    var date = created_date.getDate();
    var hour = created_date.getHours();
    var min = created_date.getMinutes();
    var sec = created_date.getSeconds();

    var total_date = month + ' ' + date + ', ' + year;
    var total_time = hour + ':' + min + ':' + sec ;

    let dispatch = useDispatch();
    const { deletepost, loading } = useSelector((state) => state.deletedpost);


    const remove = () => {
        const details = {author: data.author}
        dispatch(removePost(data._id, details));
    }

    useEffect(() => {
        if (deletepost.success) {
            window.location.reload();
        }
    }, [deletepost.success]);

    return (
        <div className='author-post'>
            <div className="post-title">
                <h2>{data.title}</h2>
            </div>
            <div className="post-date">
                <h5>{total_date}</h5>
                <h5 className="time">{total_time}</h5>
            </div>
            <div className="post-buttons">
                <Link to={{
                    pathname: `${url}/editpost`,
                    state: {id: data._id}
                    }} className="edit"
                ><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                <button className="delete" onClick={remove} style={
                    loading ? {
                        pointerEvents: "none",
                        backgroundColor: "lightgray"
                    } : {}
                }><i className="fa fa-trash" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}

export default Post;
