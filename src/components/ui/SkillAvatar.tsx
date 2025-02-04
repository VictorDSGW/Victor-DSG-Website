import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

interface SkillAvatarProps {
    id?: number;
    position?: string;
    icon: string;
    name: string;
    hoverCard: {
        title: string;
        content: string;
        footer: string;
    };
}

const SkillAvatar: React.FC<SkillAvatarProps> = ({position, icon, name, hoverCard}) => {
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
                  <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>
              </button>
            </PopoverTrigger>
            <PopoverContent className="bg-white p-4 rounded-lg shadow-md">
              <div>
                <h3>{hoverCard.title}</h3>
                <p>{hoverCard.content}</p>
                <footer>{hoverCard.footer}</footer>
              </div>
            </PopoverContent>
          </Popover>
        );
    }
      
    return (
        <div
        style={{ gridArea: position }} className="flex justify-center items-center border rounded-full border-double border-teal-500 bg-gray-500 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16
        2xl:h-16"
        >
            <HoverCard>
                <HoverCardPrimitive.Root
                    
                    openDelay={100}
                    closeDelay={300}
                >
                    <HoverCardTrigger>
                        <Avatar className="w-full h-full">
                            <AvatarImage src={icon} alt={name} />
                            <AvatarFallback>{name[0]}</AvatarFallback>
                        </Avatar>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <div>
                            <h3
                                className="text-xl"
                            >{hoverCard.title}</h3>
                            <p>{hoverCard.content}</p>
                            <footer>{hoverCard.footer}</footer>
                        </div>
                        <HoverCardPrimitive.Arrow className="fill-white border border-none" />
                    </HoverCardContent>
                </HoverCardPrimitive.Root>
            </HoverCard>
        </div>
    )
}

export default SkillAvatar