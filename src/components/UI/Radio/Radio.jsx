import React from 'react';
import classes from './Radio.module.scss';

const Radio = ({id, text, onChange, ...props}) => {
    return (
        <label htmlFor={id}>
            <input type='radio' id={id} onChange={onChange} className={classes.radio__input} {...props}/>
            <span className={classes.radio__span}>{text}</span>
        </label>
    );
};

export default Radio;