import React from 'react';
import classes from './Input.module.scss';

const Input = ({onChange, id, text, ...props}) => {
    return (
        <div className={classes.block}>
            <label htmlFor={id} className={classes.block__label}>{text}</label>
            <input type='text' className={classes.block__input} onChange={onChange} id={id} {...props}/>
        </div>
    );
};

export default Input;