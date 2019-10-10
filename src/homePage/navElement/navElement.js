import React from 'react';
import classes from './navElement.css';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <div className={classes.navEl}>
            <Link to={'/' + props.link}>{props.children}</Link>
        </div>
    );
}

