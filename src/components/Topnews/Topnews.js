// Components
import Toplifestyle from "./components/Toplifestyle";
import TopTech from "./components/TopTech";
import TopCrypto from "./components/TopCrypto";

import "./Topnews.css";

const Topnews = ({ posts }) => {

    let lifestyle = posts.find(post => post.categories.includes('Lifestyle'));
    let technology = posts.find(post => post.categories.includes('Technology'));
    let crypto = posts.find(post => post.categories.includes('Cryptocurrency'));

    return (
        <section className="trending container">
            <div className="trending-container">
                {lifestyle && <Toplifestyle lifestyle={lifestyle} />}
                {technology && <TopTech technology={technology} />}
                {crypto && <TopCrypto crypto={crypto} />}
            </div>
        </section>
    )
}

export default Topnews;
