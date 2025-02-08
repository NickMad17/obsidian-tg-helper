'use client';

import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import * as React from "react";
import {useState} from "react";
import {useToast} from "@/hooks/use-toast";
import {observer} from "mobx-react-lite";
import {tagsStore} from "@/store/TagsStore";

export const MassageInput = observer(() => {
    const [text, setText] = useState<string>('')
    const [app, setApp] = useState<string>('Obsidian')
    const {toast} = useToast()
    const copyText = async () => {
        try {
            const myText = `${app}\n\n${text}\n${tagsStore.submit()}`;
            await navigator.clipboard.writeText(myText)
            toast({
                title: "Тест успешно скопирован",
                description: "Спасибо что пользуетесь нашими услугами"
            })
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <div className="mt-2 flex gap-3">
                <Button onClick={() => setApp('Obsidian')}
                        className={`h-7 px-0 ${app === 'Obsidian' ? 'text-primary' : 'text-gray-500'}`}
                        variant='link'>Obsidian</Button>
                <Button onClick={() => setApp('TG Favourites')}
                        className={`h-7 px-0 ${app === 'TG Favourites' ? 'text-primary' : 'text-gray-500'}`}
                        variant='link'>TG Favourites</Button>
            </div>
            <div className="flex w-full mt-6 items-center space-x-2">

                <div className='w-full relative'>
                    <Textarea onChange={e => setText(e.target.value)} placeholder="Напиши что-нибудь сюда (-_-)"/>
                    <Button className='absolute right-4 bottom-4' onClick={copyText}>Copy</Button>
                </div>
            </div>
        </>
    );
})

