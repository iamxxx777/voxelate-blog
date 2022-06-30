import axios from "axios";
import { NodeHtmlMarkdown } from "node-html-markdown";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import Loading from "../../Loader/Loading"
import ErrorItem from "../../Loader/ErrorItem";

import { getAuthorPost } from "../../../redux/actions/authorActions";
import './Editpost.css';

const Editpost = () => {

    const dispatch = useDispatch();
    let history = useHistory();
    let location = useLocation();

    let { id } = location.state;

    const authorPost = useSelector((state) => state.authorPost);
    const { loading, error, post } = authorPost;


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.put(
              `https://voxelate-server.herokuapp.com/api/posts/${id}`,
              {
                title: e.target.title.value,
                categories: e.target.categories.value,
                body: e.target.body.value,
                username: post.username,
              }
            );

            if(data.success) {
                history.push("/author");
            }
        } catch (error) {
            alert('Error submiting post');
        }


    }

    useEffect(() => {
        dispatch(getAuthorPost(id));
    }, [dispatch, id]);

    if(loading) {
        return <Loading />
    } 

    if(error) {
        return <ErrorItem error={error} />
    }


    return (
        <div className="edit-form">
            <div>
                <h2>{post.title}</h2>

                <form action="#" onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="#title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        defaultValue={post.title}
                        onKeyPress={(e) => {
                        e.key === "Enter" && e.preventDefault();
                        }}
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="#categories">Categories</label>
                    <input
                        type="text"
                        name="categories"
                        id="categories"
                        defaultValue={post.categories}
                        onKeyPress={(e) => {
                        e.key === "Enter" && e.preventDefault();
                        }}
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="#body">Article</label>
                    <textarea
                        name="body"
                        id="body"
                        cols="30"
                        rows="10"
                        defaultValue={NodeHtmlMarkdown.translate(
                        `${post.body}`,
                        {},
                        undefined
                        )}
                    ></textarea>
                    </div>

                    <div className="form-buttons">
                    <button className="form-submit btn" type="submit">
                        Submit
                    </button>
                    <button
                        className="form-cancel btn"
                        onClick={() => history.push("/author")}
                    >
                        Cancel
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Editpost;
