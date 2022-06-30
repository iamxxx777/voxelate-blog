import "./Categories.css";

const Categories = () => {
    return (
        <div className="categories card" id="categories">
            <h2>Categories</h2>
            <div className="categories-container">
            <div className="category">
                <div className="category-img">
                <img
                    src="https://res.cloudinary.com/iamxxx777/image/upload/v1656612177/Blog-Images/crypto_csgpkd.jpg"
                    alt="cryptocurrency category"
                />
                </div>
                <div className="category-title">
                <h3 href="#">Cryptocurrency</h3>
                </div>
            </div>

            <div className="category">
                <div className="category-img">
                <img
                    src="https://res.cloudinary.com/iamxxx777/image/upload/v1656612177/Blog-Images/football_epqw3f.jpg"
                    alt="Football category"
                />
                </div>
                <div className="category-title">
                <h3 href="#">Football</h3>
                </div>
            </div>

            <div className="category">
                <div className="category-img">
                <img
                    src="https://res.cloudinary.com/iamxxx777/image/upload/v1656612175/Blog-Images/Lifestyle_e6clfa.jpg"
                    alt="Lifestyle category"
                />
                </div>
                <div className="category-title">
                <h3 href="#">Lifestyle</h3>
                </div>
            </div>

            <div className="category">
                <div className="category-img">
                <img
                    src="https://res.cloudinary.com/iamxxx777/image/upload/v1656612175/Blog-Images/Music_nstl2j.jpg"
                    alt="Music category"
                />
                </div>
                <div className="category-title">
                <h3 href="#">Music</h3>
                </div>
            </div>

            <div className="category">
                <div className="category-img">
                <img
                    src="https://res.cloudinary.com/iamxxx777/image/upload/v1656612175/Blog-Images/Technology_ccrabw.jpg"
                    alt="Technology category"
                />
                </div>
                <div className="category-title">
                <h3 href="#">Technology</h3>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Categories;
