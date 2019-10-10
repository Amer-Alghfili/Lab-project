import React from 'react';
import classes from './input.css';

const x = props => {
    let c = null;
    switch(props.type) {  
        case ('text') :
            c = <input className={classes.input} type='text' placeholder={props.placeholder} />;
            break;  
        case ('email') :
            c = <input className={classes.input} type='email' onChange={props.change} value={props.val} placeholder={props.placeholder} />;
            break;
        case  ('password') :  
            c = <input className={classes.input} type='password' onChange={props.change} value={props.val} placeholder={props.placeholder} />;
            break;
    }

    return (
        <div>
            {c}
        </div>
    )
}

export default x;