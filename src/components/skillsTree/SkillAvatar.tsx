"use client"
import { memo } from "react";
import useMobileView from "@/components/mobile/useMobileView";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import * as HoverCardPrimitive from "@radix-ui/react-popover";

interface SkillAvatarProps {
    id: string;
    // position?: { x: number, y: number };
    icon: string;
    name: string;
    card: {
        header: {
            title: string;
            description?: string;
        }
        content: {
            text: string;
        }
        footer: {
            progress?: number | null;
            link?: string;
        }
    }
    position?: { x: number; y: number; }
}

const SkillAvatar: React.FC<SkillAvatarProps> = ({id, icon, name, card}) => {
// const SkillAvatar = ({id, icon, name, card}) => {


    // if (isMobile) {
    //     return (
    //         <div
    //         id={`${id}`}
    //         className="flex justify-center items-center border rounded-full border-double border-teal-500 bg-gray-500
    //         w-16 h-16
    //         z-50
    //         rotate-90
    //         "
    //         >
    //             <Popover>
    //                 <PopoverTrigger asChild>
    //                 <button className="w-full h-full">
    //                     <Avatar className="w-full h-full">
    //                     <AvatarImage src={icon} alt={name} />
    //                     <AvatarFallback>{typeof name === 'string' && name.length > 0 ? name[0] : 'N/A'}</AvatarFallback>
    //                     </Avatar>
    //                 </button>
    //                 </PopoverTrigger>
    //                 <PopoverContent className="bg-white p-4 rounded-lg shadow-md">
    //                     <Card
    //                         className="z-50"
    //                     >
    //                         <CardHeader>
    //                             <CardTitle>{card?.header?.title}</CardTitle>
    //                             <CardDescription>{card?.header?.description}</CardDescription>
    //                         </CardHeader>
    //                         <CardContent>
    //                             {card?.content?.text}
    //                         </CardContent>
    //                         <CardFooter>
    //                             <Progress value={card?.footer?.progress} />
    //                         </CardFooter>
    //                     </Card>
    //                 </PopoverContent>
    //             </Popover>
    //         </div>
    //     );
    // }
      
    return (
        <div
            id={`${id}`}
            style={ useMobileView() ? {transform: 'rotate(90deg)'} : {}}
            className="flex justify-center items-center border rounded-full border-double border-teal-500 bg-gray-500
            w-16 h-16
            z-50"
        >
            <Popover>
                <PopoverTrigger>
                    <Avatar className="w-full h-full">
                        <AvatarImage src={icon} alt={name} />
                        <AvatarFallback>{typeof name === 'string' && name.length > 0 ? name[0] : 'N/A'}</AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent
                    // style={{ clipPath: "polygon(0 10%, 1% 1%, 10% 0, 90% 0%, 99% 1%, 100% 10%, 100% 90%, 99% 99%, 90% 100%, 10% 100%, 1% 99%, 0 90%)" }}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>{card?.header?.title}</CardTitle>
                            <CardDescription>{card?.header?.description}</CardDescription>
                        </CardHeader>
                        <CardContent>{card?.content?.text}</CardContent>
                        <CardFooter>
                            <Progress value={card?.footer?.progress} />
                        </CardFooter>
                    </Card>
                    <HoverCardPrimitive.Arrow className="fill-white border border-none" />
                </PopoverContent>
        </Popover>
        </div>
    )
}

export default memo(SkillAvatar);