import {ITags,ColorsTags} from '@/types/types';

export const tagsData: ITags[] = [
    {
        id: 1,
        name: "#МУЗЫКА",
        active: false,
        color: ColorsTags.music,
        tags: [
            { id: 4, name: "#биты", active: false, color: ColorsTags.music },
            { id: 5, name: "#текстыпесен", active: false, color: ColorsTags.music },
            { id: 6, name: "#музыкальныегайды", active: false, color: ColorsTags.music },
            { id: 7, name: "#плагины", active: false, color: ColorsTags.music },
            { id: 8, name: "#песни", active: false, color: ColorsTags.music },
            { id: 9, name: "#инструментал", active: false, color: ColorsTags.music }
        ]
    },
    {
        id: 2,
        name: "#ПРОГРАММИРОВАНИЕ",
        active: false,
        color: ColorsTags.programming,
        tags: [
            { id: 10, name: "#айтигайды", active: false, color: ColorsTags.programming },
            { id: 11, name: "#библиотеки", active: false, color: ColorsTags.programming },
            { id: 12, name: "#cpp", active: false, color: ColorsTags.programming },
            { id: 13, name: "#js", active: false, color: ColorsTags.programming },
            { id: 14, name: "#react", active: false, color: ColorsTags.programming },
            { id: 15, name: "#vue", active: false, color: ColorsTags.programming },
            { id: 16, name: "#айти нейросети", active: false, color: ColorsTags.programming },
            { id: 17, name: "#макеты", active: false, color: ColorsTags.programming }
        ]
    },
    {
        id: 3,
        name: "#ДРУГОЕ",
        active: false,
        color: ColorsTags.more,
        tags: [
            { id: 18, name: "#ролики", active: false, color: ColorsTags.more },
            { id: 19, name: "#подарки", active: false, color: ColorsTags.more },
            { id: 20, name: "#нейросети", active: false, color: ColorsTags.more }
        ]
    }
];
