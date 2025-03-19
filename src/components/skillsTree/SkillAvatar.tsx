"use client"
import { memo } from "react";
import useMobileView from "@/components/hooks/useMobileView";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import * as HoverCardPrimitive from "@radix-ui/react-popover";

interface SkillAvatarProps {
    id: string;
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
    return (
        <div
            id={`${id}`}
            style={ useMobileView() ? {transform: 'rotate(90deg)'} : {}}
            className="flex justify-center items-center border rounded-full border-double border-teal-500 bg-gray-500 w-16 h-16 z-50"
        >
            <Popover>
                <PopoverTrigger>
                    <Avatar className="w-full h-full">
                        <AvatarImage src={icon} alt={name} />
                        <AvatarFallback>{typeof name === 'string' && name.length > 0 ? name[0] : 'N/A'}</AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent>
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