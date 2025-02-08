// stores/counterStore.ts
import {makeAutoObservable} from "mobx";
import {tagsData} from "@/data/data";
import {ITags} from "@/types/types";

class TagsStore {
    constructor() {
        makeAutoObservable(this);
    }

    state: ITags[] = tagsData;
    date: null | undefined | Date = null

    submit() {
        let msg: string = ''
        this.state.forEach(headTags => {
            if (headTags.active) {
                msg += headTags.name
            }
            headTags?.tags?.forEach((tag) => {
                if (headTags.active && tag.active) {
                    msg += ' ' + tag.name
                }
            })
            msg += '\n'
        })

        return msg
    }
}

export const tagsStore = new TagsStore();
