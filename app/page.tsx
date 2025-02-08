import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {MassageInput} from "@/components/MassageInput";
import {HelpersMassageSection} from "@/components/HelpersMassageSection";

export default function Home() {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <p className=''>Создай новую заметку, Никита</p>
                <Avatar >
                    <AvatarImage src="https://github.com/shadcn.png" alt="@user"/>
                    <AvatarFallback>N</AvatarFallback>
                </Avatar>
            </div>
            <MassageInput/>
            <HelpersMassageSection/>
        </div>
    );
}
