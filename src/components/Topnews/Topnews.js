import { useSelector } from "react-redux";

// Components
import Toplifestyle from "./components/Toplifestyle";
import TopTech from "./components/TopTech";
import TopCrypto from "./components/TopCrypto";

import "./Topnews.css";

const Topnews = () => {

    const { posts, loading, error } = useSelector((state) => state.posts);

    let lifestyle = posts.find(post => post.categories.includes('Lifestyle'));
    let technology = posts.find(post => post.categories.includes('Technology'));
    let crypto = posts.find(post => post.categories.includes('Cryptocurrency'));


    return (
        <section className="trending container">
            {loading ? (<h2>Loading...</h2>) :
                 error ? (<h2>Error...</h2>) : (
                <div className="trending-container">
                    {lifestyle && <Toplifestyle lifestyle={lifestyle} />}
                    <div className="split">
                        {technology && <TopTech technology={technology} />}
                        {crypto && <TopCrypto crypto={crypto} />}
                    </div>
                </div>
            )}
            
            
        </section>
    )
}

export default Topnews;
