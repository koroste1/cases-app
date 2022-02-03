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
                ending: '',
                wordSlice: 0,
                cases:
                    {
                        genitive: 'а',
                        dative: 'у',
                        accusative: '',
                        instrumental: 'ом',
                        prepositional: 'е',
                    }
            },
        ],
    }, {
        name: 'third',
        word: [
            {
                ending: 'ь',
                wordSlice: -1,
                cases:
                    {
                        genitive: 'и',
                        dative: 'и',
                        accusative: 'ь',
                        instrumental: 'ью',
                        prepositional: 'и',
                    }
            },
            {
                ending: 'жь',
                wordSlice: -2,
                cases:
                    {
                        genitive: 'жи',
                        dative: 'жи',
                        accusative: 'жь',
                        instrumental: 'жью',
                        prepositional: 'жи',
                    }
            },
            {
                ending: 'шь',
                wordSlice: -2,
                cases:
                    {
                        genitive: 'ши',
                        dative: 'ши',
                        accusative: 'шь',
                        instrumental: 'шью',
                        prepositional: 'ши',
                    }
            },
            {
                ending: 'чь',
                wordSlice: -2,
                cases:
                    {
                        genitive: 'чи',
                        dative: 'чи',
                        accusative: 'чь',
                        instrumental: 'чью',
                        prepositional: 'чи',
                    }
            },
            {
                ending: 'щь',
                wordSlice: -2,
                cases:
                    {
                        genitive: 'щи',
                        dative: 'щи',
                        accusative: 'щь',
                        instrumental: 'щью',
                        prepositional: 'щи',
                    }
            },
            {
                ending: 'адь',
                wordSlice: -3,
                cases:
                    {
                        genitive: 'ади',
                        dative: 'ади',
                        accusative: 'адь',
                        instrumental: 'адью',
                        prepositional: 'ади',
                    }
            }, {
                ending: 'ать',
                wordSlice: -3,
                cases:
                    {
                        genitive: 'ати',
                        dative: 'ати',
                        accusative: 'ать',
                        instrumental: 'атью',
                        prepositional: 'ати',
                    }
            },
            {
                ending: 'овь',
                wordSlice: -3,
                cases:
                    {
                        genitive: 'ови',
                        dative: 'ови',
                        accusative: 'овь',
                        instrumental: 'овью',
                        prepositional: 'ови',
                    }
            },
            {
                ending: 'ость',
                wordSlice: -4,
                cases:
                    {
                        genitive: 'ости',
                        dative: 'ости',
                        accusative: 'ость',
                        instrumental: 'остю',
                        prepositional: 'ости',
                    }
            },
            {
                ending: 'исть',
                wordSlice: -4,
                cases:
                    {
                        genitive: 'исти',
                        dative: 'исти',
                        accusative: 'исть',
                        instrumental: 'истью',
                        prepositional: 'исти',
                    }
            },
            {
                ending: 'есть',
                wordSlice: -4,
                cases:
                    {
                        genitive: 'ести',
                        dative: 'ести',
                        accusative: 'есть',
                        instrumental: 'естью',
                        prepositional: 'ести',
                    }
            },
        ],
    },
    {
        name: 'over',
        word: [
            {
                ending: 'мя',
                wordSlice: -2,
                cases:
                    {
                        genitive: 'мени',
                        dative: 'мени',
                        accusative: 'мя',
                        instrumental: 'менем',
                        prepositional: 'мени',
                    }
            }, {
                ending: 'ть',
                wordSlice: -2,
                cases:
                    {
                        genitive: 'ти',
                        dative: 'ти',
                        accusative: 'ть',
                        instrumental: 'тем',
                        prepositional: 'ти',
                    }
            },
            {
                ending: 'чь',
                wordSlice: -2,
                cases:
                    {
                        genitive: 'чи',
                        dative: 'чи',
                        accusative: 'чь',
                        instrumental: 'чью',
                        prepositional: 'чи',
                    }
            }
        ],
    },
]

export const overDecl = ['бремя', 'время', 'вымя', 'знамя', 'имя', 'пламя', 'племя', 'семя', 'стремя', 'темя', 'путь', 'дитя', 'ночь'];
export const secondDecl = ['тесть', 'ноготь', 'нехристь', 'локоть',
    'лапоть', 'коготь', 'дёготь', ' ломоть',
    ' голубь', ' лебедь', ' гусь', 'лось',
    'князь', 'дождь', 'вождь', 'груздь',
    'гвоздь','день','камень',
    'олень', 'конь', 'ячмень' ,'путь' ,'парень',
    'зверь' ,'шкворень', 'пень' ,'пельмень' ,'тюлень',]
export const thirdDecl = ['утварь', 'тварь', 'старь', 'пригарь', 'марь', 'изгарь', 'выгарь', 'бездарь', 'гарь', 'постель', 'повитель', 'пастель', 'нетель', 'метель', 'артель']