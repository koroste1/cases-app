import {declension, overDecl, secondDecl, thirdDecl} from "../data/data";

export function checkCases(value, word, setNewWord) {
    const findDeclension = declension.find(item => item.name === checkDeclension(word));
    console.log(findDeclension)
    let ending = findDeclension.word.find(elem => elem.ending === word.slice(elem.wordSlice));
    console.log(ending)
    if (!ending) {
        ending = findDeclension.word.find(elem => elem.ending === '');
        switch (value) {
            case 'genitive':
                return setNewWord(word + ending.cases.genitive);
            case 'dative':
                return setNewWord(word + ending.cases.dative);
            case 'accusative':
                return setNewWord(word + ending.cases.accusative);
            case 'instrumental':
                return setNewWord(word + ending.cases.instrumental);
            case 'prepositional':
                return setNewWord('о ' + word + ending.cases.prepositional);
            default:
                return;
        }
    }
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
    } else if (thirdDecl.find(item => word === item)) {
        return 'third';
    } else if (secondDecl.find(item => word === item)) {
        return 'second';
    } else if (word.slice(-4) === 'тель' ||
        word.slice(-3) === 'арь' ||
        word.slice(-1) === 'о' ||
        word.slice(-1) === 'е'
    ) {
        return 'second';
    } else if (word.slice(-2) === 'жь' ||
        word.slice(-2) === 'шь' ||
        word.slice(-2) === 'щь' ||
        word.slice(-3) === 'адь' ||
        word.slice(-3) === 'ать' ||
        word.slice(-3) === 'овь' ||
        word.slice(-4) === 'ость' ||
        word.slice(-4) === 'исть' ||
        word.slice(-4) === 'есть' ||
        word.slice(-1) === 'ь' &&
        secondDecl.find(item => word == item) === undefined) {
        return 'third';
    } else if (word.slice(-1) === 'а' ||
        word.slice(-1) === 'я') {
        return 'first';
    } else {
        console.log(word)
        return 'second';
    }
}