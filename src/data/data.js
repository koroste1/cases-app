import {checkDeclension} from "../AppReducer/AppReducer";

export const cases = [
    {
        value: 'genitive',
        text: 'Родительный'
    }, {
        value: 'dative',
        text: 'Дательный'
    }, {
        value: 'accusative',
        text: 'Винительный'
    }, {
        value: 'instrumental',
        text: 'Творительный'
    }, {
        value: 'prepositional',
        text: 'Предложный'
    },
];

export const declension = [
    {
        name: 'first',
        word: [
            {
                ending: 'а',
                wordSlice: -1,
                cases:
                    {
                        genitive: 'ы',
                        dative: 'е',
                        accusative: 'у',
                        instrumental: 'ой',
                        prepositional: 'е',
                    }
            }, {
                ending: 'я',
                wordSlice: -1,
                cases:
                    {
                        genitive: 'и',
                        dative: 'е',
                        accusative: 'ю',
                        instrumental: 'ей',
                        prepositional: 'е',
                    }
            }
        ],
    },
    {
        name: 'second',
        word: [
            {
                ending: 'о',
                wordSlice: -1,
                cases:
                    {
                        genitive: 'а',
                        dative: 'у',
                        accusative: 'о',
                        instrumental: 'ом',
                        prepositional: 'е',
                    }
            }, {
                ending: 'е',
                wordSlice: -1,
                cases:
                    {
                        genitive: 'я',
                        dative: 'ю',
                        accusative: 'е',
                        instrumental: 'ем',
                        prepositional: 'е',
                    }
            }, {
                ending: 'арь',
                wordSlice: -3,
                cases:
                    {
                        genitive: 'аря',
                        dative: 'арю',
                        accusative: 'арь',
                        instrumental: 'арем',
                        prepositional: 'аре',
                    }
            }, {
                ending: 'тель',
                wordSlice: -4,
                cases:
                    {
                        genitive: 'теля',
                        dative: 'телю',
                        accusative: 'теля',
                        instrumental: 'телем',
                        prepositional: 'теле',
                    }
            },
            {
                ending: 'й',
                wordSlice: -1,
                cases:
                    {
                        genitive: 'я',
                        dative: 'ю',
                        accusative: 'я',
                        instrumental: 'ем',
                        prepositional: 'е',
                    }
            },
            {
                ending: 'ь',
                wordSlice: -1,
                cases:
                    {
                        genitive: 'я',
                        dative: 'ю',
                        accusative: 'я',
                        instrumental: 'ем',
                        prepositional: 'е',
                    }
            },
        ],
    },
]

export const overDecl = ['бремя', 'время', 'вымя', 'знамя', 'имя', 'пламя', 'племя', 'семя', 'стремя', 'темя', 'путь', 'дитя'];