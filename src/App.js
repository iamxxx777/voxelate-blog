import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ScrollToTop from './ScrollToTop';

// Screens
import Homescreen from "./screens/Homescreen/Homescreen";
import Postsscreen from './screens/Postsscreen/Postsscreen';
import Articlescreen from './screens/Articlescreen/Articlescreen';

// import { getPosts } from './redux/actions/postActions';

import Sidenav from './components/SideNav/Sidenav';
import Overlay from './components/Overlay/Overlay';
import Loading from './components/Loader/Loading';

import "./App.css";


// Splited Screens
const Notfound = React.lazy(() => import("./screens/Notfound/Notfound"));
const Login = React.lazy(() => import("./screens/Login/Login"));
const Register = React.lazy(() => import("./screens/Register/Register"));
const Authorpage = React.lazy(() => import("./screens/Authorboard/Authorpage"));


// import Authorpage from './screens/Authorboard/Authorpage';
// import Register from "./screens/Register/Register";
// import Login from "./screens/Login/Login";
// import Notfound from './screens/Notfound/Notfound';



const App = () => {

    const { user } = useSelector((state) => state.author);

    const [sideToggle, setSideToggle] = useState(false);

    // let dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getPosts());
    // }, [dispatch]);

    return (
        <Router>
            <div>
                <Overlay show={sideToggle} click={() => setSideToggle(false)} />
                <Sidenav show={sideToggle} click={() => setSideToggle(false)} />
                <ScrollToTop>
                    <React.Suspense fallback={<Loading />}>
                        <Switch>
                            <Route exact path={"/"}> <Homescreen click={() => setSideToggle(true)} /> </Route>
                            <Route path={"/allposts"}> <Postsscreen click={() => setSideToggle(true)} /> </Route>
                            <Route path={`/article/:id`}> <Articlescreen click={() => setSideToggle(true)} /> </Route>
                            <Route path={"/author"}>{user.username ? <Authorpage /> : <Redirect to="/login" /> } </Route>
                            <Route path={"/register"}> {!user.username ? <Register click={() => setSideToggle(true)} /> : <Redirect to="/author" /> } </Route>
                            <Route path={"/login"}> <Login click={() => setSideToggle(true)} /> </Route>
                            <Route path="/404"> <Notfound click={() => setSideToggle(true)} /> </Route>
                            <Redirect from="*" to="/404" />
                        </Switch> 
                    </React.Suspense>
                </ScrollToTop>
            </div>
        </Router> 
    )
}

export default App;
