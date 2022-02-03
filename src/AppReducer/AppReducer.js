import {removeChar} from "../data/data";

const ending = {}

export function checkCases(value, word, setNewWord) {
    console.log(checkDeclension(word));
    // checkDeclension(word);
    // console.log(ending);
    switch (value) {
        case 'genitive':
            return setNewWord(word.slice(0, -1) + 'ы');
        case 'dative':
            return setNewWord(word.slice(0, -1) + 'е');
        case 'accusative':
            return setNewWord(word.slice(0, -1) + 'у');
        case 'instrumental':
            return setNewWord(word.slice(0, -1) + 'ой');
        case 'prepositional':
            return setNewWord('о ' + word.slice(0, -1) + 'е');
        default:
            return;
    }
}

export function checkDeclension(word) {
    if (removeChar.find(item => word === item)) {
        return 'over';
    } else if (word.slice(-4) === 'тель' ||
        word.slice(-3) === 'арь' ||
        word.slice(-1) === 'о' ||
        word.slice(-1) === 'е') {
        ending.declension = 'second';
        ending.ending = word.slice(-1);
        return ending;
    } else if (word.slice(-2) === 'бь' || 'вь' || 'жь' || 'шь' || 'щь' ||
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
    } else {
        return 'second';
    }
}