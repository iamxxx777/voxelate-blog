import React from 'react';
import Sidestory from './Sidestory/Sidestory';

import "./Sidestories.css";

const Sidestories = ({ stories }) => {

    const sliced = stories.slice(0, 6);

    return (
        <div className="side-stories card">
            <h2>Top Stories</h2>
            <div className="stories">
                {sliced ? sliced.map((story) => <Sidestory key={story._id} story={story} />) : null}
            </div>
        </div>
    )
}

export default Sidestories;
