import {declension, overDecl} from "../data/data";
import {editableInputTypes} from "@testing-library/user-event/dist/utils";

// let ending = {}

export function checkCases(value, word, setNewWord) {
    const findDeclension = declension.find(item => item.name === checkDeclension(word));
    const ending = findDeclension.word.find(elem=>elem.ending === word.slice(elem.wordSlice));

    console.log(ending)
    // console.log(checkDeclension(word));
    // const ending = declension.find(item => item.word.find(elem => elem.ending === word.slice(-1)));
    switch (value) {
        case 'genitive':
            return setNewWord(word.slice(0, ending.wordSlice) + ending.cases.genitive);
        case 'dative':
            return setNewWord(word.slice(0, ending.wordSlice) + ending.cases.dative);
        case 'accusative':
            return setNewWord(word.slice(0, ending.wordSlice) + ending.cases.accusative);
        case 'instrumental':
            return setNewWord(word.slice(0, ending.wordSlice) + ending.cases.instrumental);
        case 'prepositional':
            return setNewWord('о ' + word.slice(0, ending.wordSlice) + ending.cases.prepositional);
        default:
            return;
    }
}

export function checkDeclension(word) {
    if (overDecl.find(item => word === item)) {
        return 'over';
    } else if (word.slice(-4) === 'тель' ||
        word.slice(-3) === 'арь' ||
        word.slice(-1) === 'о' ||
        word.slice(-1) === 'е'
        // declension.map(item => item.word.find(elem => elem.ending === word.slice(-1)))
    ) {

        return 'second';
    } else if (/*word.slice(-2) === 'бь' || 'вь' || 'жь' || 'шь' || 'щь' ||*/
        word.slice(-3) === 'адь' ||
        word.slice(-3) === 'ать' ||
        word.slice(-3) === 'овь' ||
        word.slice(-4) === 'ость' ||
        word.slice(-4) === 'исть' ||
        word.slice(-4) === 'есть') {
        return 'third';
    } else if (word.slice(-1) === 'а' ||
        word.slice(-1) === 'я') {
        return 'first';
    }
        //     if (declension.map(item => item.word.find(elem => elem.ending === word.slice(-1)))) {
        //     const ending = declension.map(item => item.word.find(elem => elem.ending === word.slice(-1)))
        //     return ending;
    // }

    else {
        return 'second';
    }
}