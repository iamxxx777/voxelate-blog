import './Footer.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Footerpost from './Footerpost/Footerpost';

const Footer = () => {

    const date = () => {
        return new Date().getFullYear();
    } 

    const { posts } = useSelector((state) => state.posts);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <footer>
            <div className="footer-posts container">
                <div className="footer-recent-posts">
                    <h2>Recent Posts</h2>
                    {posts ? posts.slice(0, 2).map((post) => <Footerpost key={post._id} post={post} />) : null}
                </div>

                <div className="navigation">
                    <h2>Top Links</h2>

                    <div className="top-links">
                        <ul>
                            <li><Link to="/404">Technology</Link></li>
                            <li><Link to="/404">Business</Link></li>
                            <li><Link to="/404">Contact Us</Link></li>
                            <li><Link to="/404">Suggestions</Link></li>
                            <li><Link to="/register">Join Us</Link></li>
                            <li><Link to="/404">Privacy Policy</Link></li>
                            <li><Link to="/404">About us</Link></li>
                            <li><Link to="/404">Football</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-socials">
                    <h2>Follow our Socials</h2>

                    <ul>
                        <li>
                            <Link to="404ttps://www.facebook.com/profile.php?id=100007522123406" rel="noreferrer" target="_blank" title="Facebook page">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                                <span>Facebook</span>
                            </Link> 
                        </li>

                        <li>
                            <Link to="404ttps://www.instagram.com/swaggeralmighty/" target="_blank" rel="noreferrer" title="Instagram page">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                                <span>Instagram</span>
                            </Link>            
                        </li>

                        <li>
                            <Link to="404ttps://twitter.com/dayo_hope?s=09" target="_blank" rel="noreferrer" title="Twitter account">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                <span>Twitter</span>
                            </Link>            
                        </li>

                        <li>
                            <Link to="404ttps://t.me/iamxxx777" target="_blank" rel="noreferrer" title="Telegram page">
                                <i className="fa fa-telegram" aria-hidden="true"></i>
                                <span>Telegram</span>
                            </Link>    
                        </li>

                        <li>
                            <Link to="404ttps://www.twitter.com/dayo_hope" target="_blank" rel="noreferrer">
                                <i className="fa fa-youtube" aria-hidden="true"></i>
                                <span>Youtube</span>
                            </Link>    
                        </li>

                    </ul>
                </div>

                <div className="footer-topics">
                    <h2>Hot Topics</h2>

                    <div className="hot-topics">
                        <span>Bitcoin</span>
                        <span>React</span>
                        <span>Travel</span>
                        <span>Euro 2020</span>
                        <span>Seychells</span>
                        <span>Brexit</span>
                        <span>Ethereum</span>
                        <span>Grammys</span>
                        <span>Ballon d'or</span>
                        <span>SpaceX</span>
                        <span>Bad Bunny</span>
                        <span>Champions League</span>
                        <span>Elon Musk</span>
                        <span>Kai Harvert</span>
                        <span>Safemoon</span>
                        <span>Tailwind.css</span>
                        <span>The Weeknd</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>
                        Copyright © <span>{date()}</span> Voxelate All rights reserved 
                    </p>

                    <div className="terms">
                        <Link to="/404">Code of ethics</Link>
                        <Link to="/404">Privacy policy</Link>
                        <Link to="/404">Contact us</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
