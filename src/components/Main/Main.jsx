import React, {useState} from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './Main.module.scss'
import Cases from "../Cases/Cases";
import {checkCases} from "../../AppReducer/AppReducer";

const Main = () => {
    const [word, setWord] = useState(' ');
    const [newWord, setNewWord] = useState('');
    const [value, setValue] = useState('');

// console.log(value)
    return (
        <div className={classes.main}>
            <div className={classes.main__block}>
                <Input onChange={(e => setWord(e.target.value))} id='input'
                       text='Введите существительное в именительном падеже единственного числа' placeholder='Введите слово'/>
                <p className={classes.main__case}>{newWord}</p>
            </div>
            <div>
                <Cases onChange={(e) => setValue(e.target.value)}/>
                <Button onClick={() => word.trim().length>0 ? checkCases(value, word.trim().toLowerCase(), setNewWord) : alert('Введите слово')}>Перевести</Button>
            </div>
        </div>
    );
};

export default Main;