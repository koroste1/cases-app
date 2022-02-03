import React, {useState} from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './Main.module.scss'
import Cases from "../Cases/Cases";
import {checkCases} from "../../AppReducer/AppReducer";

const Main = () => {
    const [word, setWord] = useState(' ');
    const [newWord, setNewWord] = useState('');
    const [value,setValue] = useState('');

// console.log(value)
    return (
        <div className={classes.main}>
            <Input onChange={(e => setWord(e.target.value))}/>
            <p className={classes.main__case}>{newWord}</p>
            <Cases onChange={(e)=>setValue(e.target.value)}/>
            <Button onClick={()=>checkCases(value,word,setNewWord)}>Перевести</Button>
        </div>
    );
};

export default Main;