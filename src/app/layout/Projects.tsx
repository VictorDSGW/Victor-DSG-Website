"use client"
import { projectsData } from "@/data/Projects/projectsData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";

export const Projects = () => {
  return (
    <section id="projects"
      className="flex flex-col items-center xl:mt-5 select-none"
    >
      <div>Alguns dos meus Projetos</div>
      <Carousel
        style={{ maxWidth: "85%" }}
       className="w-full m-5"
      >
        <CarouselContent className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-[330px] xl:w-[360px]">
          {projectsData.map((project) => (
            <CarouselItem key={project.id} className="md:basis-3/4 lg:basis-11/12">
              <Card className="min-h-[460px] flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>{project.header.title}</CardTitle>
                  <CardDescription>{project.header.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <p className="text-base/5 2xl:text-base/5">{project.content}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {project.footer?.github && (
                    <Button variant="link" asChild>
                      <a href={project.footer.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> GitHub <FaExternalLinkAlt />
                      </a>
                    </Button>
                  )}
                  {project.footer?.More && (
                    <Button variant="default" asChild>
                      <a href={project.footer.More} target="_blank" rel="noopener noreferrer">
                        Details <GoProjectSymlink />
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
