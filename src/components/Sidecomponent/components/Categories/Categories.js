import "./Categories.css";

const Categories = () => {
    return (
        <div className="categories card" id="categories">
            <h1>Categories</h1>
            <div className="categories-container">
                <div className="category">
                    <div className="category-img">
                        <img src="https://res.cloudinary.com/iamxxx777/image/upload/v1626384752/Cryptocoin_mjthvs.jpg" alt="cryptocurrency category" />
                    </div>
                    <div className="category-title">
                        <h3 href="#">Cryptocurrency</h3>
                    </div>
                </div>

                <div className="category">
                    <div className="category-img">
                        <img src="https://res.cloudinary.com/iamxxx777/image/upload/v1626384746/Football_ovzhk0.jpg" alt="Football category" />
                    </div>
                    <div className="category-title">
                        <h3 href="#">Football</h3>
                    </div>
                </div>

                <div className="category">
                    <div className="category-img">
                        <img src="https://res.cloudinary.com/iamxxx777/image/upload/v1626384744/Lifestyle_jwpckt.jpg" alt="Lifestyle category" />
                    </div>
                    <div className="category-title">
                        <h3 href="#">Lifestyle</h3>
                    </div>
                </div>

                <div className="category">
                    <div className="category-img">
                        <img src="https://res.cloudinary.com/iamxxx777/image/upload/v1626384739/Music_jioqhy.jpg" alt="Music category" />
                    </div>
                    <div className="category-title">
                        <h3 href="#">Music</h3>
                    </div>
                </div>

                <div className="category">
                    <div className="category-img">
                        <img src="https://res.cloudinary.com/iamxxx777/image/upload/v1626384744/Technology_hvrzgq.jpg" alt="Technology category" />
                    </div>
                    <div className="category-title">
                        <h3 href="#">Technology</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Categories;
