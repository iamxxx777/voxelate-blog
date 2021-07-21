import './newPost.css';
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { newPost } from "../../../redux/actions/postActions";

const Newpost = () => {

    let dispatch = useDispatch();
    let history = useHistory();

    const { user } = useSelector((state) => state.author);
    const { newpost, loading } = useSelector((state) => state.addpost);

    const [isNew, setIsNew] = useState(true);

    // Form state
    const [title, setTitle] = useState("");
    const [intro, setIntro] = useState("");
    const [image, setImage] = useState('');
    const [categories, setCategories] = useState([]);
    const [body, setBody] = useState("");

    const handleSelect = (e) => {
        setImage(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let formdata = new FormData();

        formdata.append("title", title);
        formdata.append("body", body);
        formdata.append("author", user.username);
        formdata.append("author_avatar", user.avatar);
        formdata.append("categories", categories);
        formdata.append("intro", intro);
        formdata.append("image", image);

        dispatch(newPost(formdata));
        setIsNew(false);
    } 

    useEffect(() => {
        if(!isNew) {
            if(newpost.success) {
                history.push("/author");
            }
        }    
    }, [newpost.success, history, isNew]);

    

    return (
        <div className='blog-form'>

            <form action="#" id="blog-form" onSubmit={handleSubmit}>
                <h2>New Post</h2>

                <div className="form-group">
                    <label htmlFor="#title">Title</label>
                    <input 
                        type="text" 
                        name='title' 
                        id='title' 
                        value={title}
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="#picture">Article Image</label>
                    <input id="picture" type="file" accept="image/*" name="image" 
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                    onChange={handleSelect} />
                </div>

                <div className="form-group">
                    <label htmlFor="#categories">Categories</label>
                    <select
                        name="categories" 
                        id="categories"
                        value={categories}
                        onChange={(e) => setCategories(e.target.value)}
                    >
                        <option value="cryptocurrency">Cryptocurrency</option>
                        <option value="football">Football</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="music">Music</option>
                        <option value="technology">Technology</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="#intro">Short Intro</label>
                    <input 
                        type="text" 
                        name='intro' 
                        id='intro' 
                        value={intro}
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        onChange={(e) => setIntro(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="#body">Article</label>
                    <textarea 
                        name="body" 
                        id="body" 
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>

                <div className="form-buttons">
                    <button className='form-submit btn' type="submit" style={
                        loading ? {
                            pointerEvents: 'none',
                            backgroundColor: 'lightgray'
                     } : {}
                    }>Submit</button>
                    <button className='form-cancel btn' onClick={() => history.push('/author')}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Newpost;
