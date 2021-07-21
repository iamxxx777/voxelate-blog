import { useSelector } from "react-redux";
import Category from "./Category/Category";

import "./PostsByCategory.css";

const PostsByCategory = () => {

    const { loading, error, posts } = useSelector((state) => state.posts);

    let lifestyle = posts.find(post => post.categories.includes('Lifestyle'));
    let technology = posts.find(post => post.categories.includes('Technology'));
    let crypto = posts.find(post => post.categories.includes('Cryptocurrency'));
    let football = posts.find(post => post.categories.includes('football'));
    let music = posts.find(post => post.categories.includes('music'));

    const all = [crypto, football, lifestyle, music, technology];

    return (
        <section className="post-by-category card container">
            <h2>Top Post by category</h2>
                {loading ? (<h2>Loading...</h2>) : 
                    error ? (<h2>Error...</h2>) : 
                    (
                        <div className="category-container">
                            {all[0] !== undefined ? all.map((post) => <Category key={post._id} post={post} />) : null}
                        </div>
                    ) 
                
                }
                
        </section>
    )
}

export default PostsByCategory;
