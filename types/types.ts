export enum ColorsTags {
    programming = '#3A86FF',
    music = '#FF006E',
    more = '#FB5607'
}
export interface ITags {
    id: number;
    name: string;
    color: ColorsTags;
    tags?: ITags[];
    active: boolean;
}

