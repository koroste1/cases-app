import React from 'react';
import Radio from '../UI/Radio/Radio';
import {cases} from '../../data/data';
import classes from './Cases.module.scss';

const Cases = ({onChange, ...props}) => {
    return (
        <div className={classes.cases}>
            {cases.map(item =>
                <Radio key={item.value} id={item.value}
                       value={item.value} name='cases'
                       text={item.text} onChange={onChange}/>
            )}
        </div>

    );
};

export default Cases;