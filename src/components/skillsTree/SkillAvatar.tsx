/* eslint-disable react/jsx-no-duplicate-props */
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
            style={ useMobileView() ? {transform: 'rotate(90deg)'} : {} }
            className="flex justify-center items-center border-2 border-none rounded-full bg-secondary shadow-[inset_0_0_32px_5px_rgba(0,0,0,0.25)] w-16 h-16 z-50"
        >
            <Popover>
                <PopoverTrigger>
                    <Avatar className="w-full h-full -z-50">
                        <AvatarImage src={icon} alt={name} />
                        <AvatarFallback>{typeof name === 'string' && name.length > 0 ? name[0] : 'N/A'}</AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent side="right">
                    <Card
                        className="leading-5"
                    >
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