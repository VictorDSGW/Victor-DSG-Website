import { achievementsData } from "@/data/Achievements/achievementsData";
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaExternalLinkAlt } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import Image from "next/image";

type CardProps = React.ComponentProps<typeof Card>

export const Achievements = ({ className, ...props }: CardProps) => {
  return (
    <section id="achievements" className="flex-col items-center">    
      <div >
        <h2>
          <GiAchievement
            className="-translate-x-5 translate-y-6"
          />
          Conquistas
        </h2>
      </div>
      <div className="gap-3 m-1 flex justify-center flex-wrap bevel">
        {achievementsData.map((achievement, index) => (
          <Card
            key={index}
            className={cn("w-[300px] h-[400px] md:w-[360px] md:h-[460px] lg:w-[400px] lg:h-[500px] xl:w-[440px] Xl:h-[580px] flex flex-col justify-between", className)}
            {...props}
          >
            <CardHeader>
              <CardTitle>{achievement.header.title}</CardTitle>
              <CardDescription>{achievement.header.description}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className=" flex items-center space-x-4 rounded-md border p-4">
                <h3
                  className="text-lg lg:text-xl"
                >{achievement.course}</h3>
                {achievement.content?.img && (
                  <>
                    <Image src={achievement.content.img} alt={"img"} />
                    <p>{achievement.content.text}</p>
                  </>
                )}
              </div>
            </CardContent>
            <CardFooter
              className="flex flex-col gap-2"
            >
              <Progress value={achievement.footer.progress} />
              <Button className="w-full flex flex-row" variant="link">
                <a href={achievement.footer.link} target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2">
                  Ver certificado <FaExternalLinkAlt />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
