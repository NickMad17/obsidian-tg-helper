'use client';
import {Badge} from "@/components/ui/badge";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {tagsStore} from "@/store/TagsStore";

export const Tags = observer(() => {
    useEffect(() => {
    }, []);

    return (
        <div>
            <div className='mx-4 mt-4 flex gap-4 flex-wrap items-center'>
                {tagsStore.state.map((tagHead) =>
                    <span key={`tagHead-${tagHead.id}`} className='flex flex-wrap gap-2 items-center'>
                        <Badge
                            onClick={() => tagHead.active = !tagHead.active}
                            className='h-8 cursor-pointer'
                            style={{
                                backgroundColor: tagHead.active ? tagHead.color : 'transparent',
                                borderColor: !tagHead.active ? tagHead.color : 'transparent',
                            }}
                            variant='outline'>{tagHead.name}</Badge>
                        {(tagHead.active && tagHead?.tags) && tagHead?.tags?.map(tag =>
                            <Badge key={`tag-${tag.id}`}
                                   onClick={() => tag.active = !tag.active}
                                   className='h-7 cursor-pointer'
                                   style={{
                                       backgroundColor: tag.active ? tag.color : 'transparent',
                                       borderColor: !tag.active ? tag.color : 'transparent',
                                   }}
                                   variant='outline'>{tag.name}</Badge>
                        )}
                    </span>
                )}
            </div>
        </div>
    );
});
