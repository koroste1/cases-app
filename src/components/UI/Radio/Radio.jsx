import React from 'react';

const Radio = ({id, text, onChange, ...props}) => {
    return (
        <label htmlFor={id}>{text}
            <input type='radio' id={id} onChange={onChange} {...props}/>
        </label>
    );
};

export default Radio;