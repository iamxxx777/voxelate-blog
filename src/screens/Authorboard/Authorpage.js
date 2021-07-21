import "./Authorpage.css";

import { useState } from "react";
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Components
import Sidebar from "./Sidebar";
import Sidetop from "./Sidetop";
import AllPost from "../../components/Authorcomponents/AllPost/AllPost";
import NewPost from "../../components/Authorcomponents/NewPost/Newpost";
import EditAuthor from "../../components//Authorcomponents/EditAuthor/EditAuthor";
import Editpost from "../../components/Authorcomponents/EditPost/Editpost";

const Authorpage = () => {

    const { user } = useSelector((state) => state.author);

    let { path, url } = useRouteMatch();

    const [sidebar, setSideBar] = useState(false);

    return (
        <div className="authorpage">
            <Sidebar url={url} author={user} show={sidebar} />
            <Sidetop author={user} click={() => setSideBar(!sidebar)} />

            <div className="author-container">
                <Switch>
                    <Route path={`${path}/editpost`} component={Editpost} />
                    <Route path={`${path}/newpost`} component={NewPost} /> 
                    <Route exact path={`${url}/profile`} component={EditAuthor} /> 
                    <Route exact path={path}> <AllPost /> </Route>
                </Switch>
            </div>
            
        </div>
    )
}

export default Authorpage;
