import { useState, useEffect, memo } from "react";
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

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
        const handleResize = () => setIsMobile(window.innerWidth <= 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isMobile) {
        return (
            <Popover>
                <PopoverTrigger asChild>
                <button className="w-full h-full">
                    <Avatar className="w-full h-full">
                    <AvatarImage src={icon} alt={name} />
                    <AvatarFallback>{typeof name === 'string' && name.length > 0 ? name[0] : 'N/A'}</AvatarFallback>
                    </Avatar>
                </button>
                </PopoverTrigger>
                <PopoverContent className="bg-white p-4 rounded-lg shadow-md">
                    <Card
                        className="z-50"
                    >
                        <CardHeader>
                            <CardTitle>{card?.header?.title}</CardTitle>
                            <CardDescription>{card?.header?.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {card?.content?.text}
                        </CardContent>
                        <CardFooter>
                            <Progress value={card?.footer?.progress} />
                        </CardFooter>
                    </Card>
                </PopoverContent>
            </Popover>
        );
    }
      
    return (
        <div
            id={`${id}`}
            // style={{ gridArea: position }}
            // lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16

            className="flex justify-center items-center border rounded-full border-double border-teal-500 bg-gray-500
            w-16 h-16
            z-50"
        >
            <Popover>
            {/* <PopoverPrimitive.Root
                openDelay={100}
                closeDelay={300}
            > */}
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
            {/* </PopoverPrimitive.Root> */}
        </Popover>
        </div>
    )
}

export default memo(SkillAvatar);