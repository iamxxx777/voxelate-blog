import axios from "axios";
import { NodeHtmlMarkdown } from "node-html-markdown";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

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
            const { data } = await axios.put(`http://localhost:4455/api/posts/${id}`, {
                title: e.target.title.value,
                categories: e.target.categories.value,
                body: e.target.body.value,
                username: post.username
            });

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


    return (
        <div className='edit-form'>
            {loading ? (<h1>Loading...</h1>) :
                error ? (<h1>Error...</h1>) :
                (
                <div>
                    <h2>{post.title}</h2>

                    <form action="#" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="#title">Title</label>
                            <input 
                                type="text" 
                                name='title' 
                                id='title' 
                                defaultValue={post.title}
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="#categories">Categories</label>
                            <input 
                                type="text" 
                                name='categories' 
                                id='categories' 
                                defaultValue={post.categories} 
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="#body">Article</label>
                            <textarea 
                                name="body" 
                                id="body" 
                                cols="30" 
                                rows="10" 
                                defaultValue={NodeHtmlMarkdown.translate(`${post.body}`, {}, undefined)}
                            ></textarea>
                        </div>

                        <div className="form-buttons">
                            <button className='form-submit btn' type="submit">Submit</button>
                            <button className='form-cancel btn' onClick={() => history.push('/author')}>Cancel</button>
                        </div>
                    </form>
                </div>
                
                )
                
            }
            
        </div>
    )
}

export default Editpost;
