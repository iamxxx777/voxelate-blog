import { useState, useEffect, useRef } from 'react';
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logAuthor, getAuthor } from "../../redux/actions/authorActions";

// Components
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Login.css';

const Login = ({ click }) => {

    let dispatch = useDispatch();
    let history = useHistory();

    let inputRef = useRef(null);

    const logged = useSelector((state) => state.loggedIn);
    const{ user } = useSelector((state) => state.author);
    const { loading, error, author } = logged;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [serverError, setServerError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            var details = { email, password };

            dispatch(logAuthor(details));

            
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        if (author.username) {
            dispatch(getAuthor(author.username));
        }
    }, [dispatch, author.username]);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        if(author.err) {
            if(author.err.split(" ")[0] === "Email") {
                setEmailError(author.err);
            } else if (author.err.split(" ")[0] === "Password") {
                setPasswordError(author.err);
            }
        }
        if (error) {
            setServerError(error);
        }

        if(user.username) {
            history.replace("/author");
        }
        
    }, [author.err, author, error, user.username, history]);


    return (
        <div className="login">
            <Header />
            <Navbar toggle={click} />
            <div className="log_in container">
                <div className="card login-container">
                    <h2>Welcome back Talent</h2>
                    {serverError && (<h3>{serverError}</h3>)}
                    <form action="#" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="#">Email</label>
                            <input
                                type="email"
                                name="email"
                                className={emailError ? "error" : ""}
                                value={email}
                                ref={inputRef}
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                onChange={(e) => {setEmail(e.target.value); setEmailError("")}} 
                            />
                            {emailError && <small>{emailError}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="#">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                className={passwordError ? "error" : ""} 
                                value={password} 
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                onChange={(e) => {setPassword(e.target.value); setPasswordError("")}}  
                            />
                            {passwordError && <small>{passwordError}</small>}
                        </div>
                        <div className="log-button">
                            <button type="submit" style={
                                loading ? {pointerEvents: 'none', backgroundColor: 'lightgray', color: 'black'} : {}
                            }
                            >Login</button>

                            <h4>New here? click to <Link to="/register">sign up</Link></h4>
                        </div>
                        
                    </form>
                </div>
            </div>

            <Footer />
        </div>
        
    )
}

export default Login
