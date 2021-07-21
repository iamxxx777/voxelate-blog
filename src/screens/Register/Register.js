import { useState, useEffect, useRef } from 'react';
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerAuthor } from "../../redux/actions/authorActions";

// Components
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import "./Register.css";

const Register = ({ click }) => {

    let dispatch = useDispatch();
    let history = useHistory();

    let inputRef = useRef(null);

    const registered = useSelector((state) => state.signIn);
    const { loading, register } = registered;

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        
        var details = { username, email, password, password2 };

        dispatch(registerAuthor(details));
    }


    useEffect(() => {
        if(register.err) {
            if(register.err.split(" ")[0] === "email") {
                setEmailError(register.err);
            } else if (register.err.split(" ")[0] === "username") {
                setNameError(register.err);
            } else if (register.err.split(" ")[0] === "password") {
                setPasswordError(register.err);
            }
        }
        if (register.success) {
            history.push("/login");
        }
    }, [register.err, history, register.success]);
    

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="signup">
            <Header />
            <Navbar toggle={click} />
            <div className='register container'>
                <div className="card register-container">
                    <h2>Become an author</h2>
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
                            <label htmlFor="#">Username</label>
                            <input 
                                type="text" 
                                name="username" 
                                className={nameError ? "error" : ""} 
                                value={username}
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                onChange={(e) => {setUsername(e.target.value); setNameError("")}} 
                            />
                            {nameError && <small>{nameError}</small>}
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
                        <div className="form-group">
                            <label htmlFor="#">Password2</label>
                            <input 
                                type="password" 
                                name="password2" 
                                value={password2} 
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                onChange={(e) => setPassword2(e.target.value)} 
                            />
                        </div>
                        <div className="reg-button">
                            <button type="submit" style={
                                loading ? {pointerEvents: 'none', backgroundColor: 'lightgray', color: 'black'} : {}
                            }>Register</button>

                            <h4>Already registered, <Link to="login">sign in</Link></h4>
                        </div>

                    </form>
                </div>
            </div>
            <Footer />
        </div>       
    )
}

export default Register;
