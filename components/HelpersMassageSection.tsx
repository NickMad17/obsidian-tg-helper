'use client';
import {Calendar} from "@/components/ui/calendar";
import {useEffect, useState} from "react";
import {Tags} from "@/components/Tags";
import {tagsStore} from "@/store/TagsStore";

export const HelpersMassageSection = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    useEffect(() => {
        tagsStore.date = date
    }, [date])
    return (
        <div className="helpers flex w-full gap-4 mt-6">
            <Calendar
                className="calendar"
                mode="single"
                selected={date}
                onSelect={setDate}
            />
                <Tags/>
        </div>
    );
};

