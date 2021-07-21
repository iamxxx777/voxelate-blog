import React from 'react';

// Components
import Socials from './components/Socials/Socials';
import Sidestories from './components/Sidestories/Sidestories';
import Categories from './components/Categories/Categories';

import './Sidecomponent.css';

const Sidecomponent = ({ stories }) => {
    return (
        <div className="side-components">
            <Socials />
            <Sidestories stories={stories} />
            <Categories />
        </div>
    )
}

export default Sidecomponent
