import { Button } from "@/components/ui/button";
import { aboutData } from "@/data/layout/About.json";
import { GiTargetShot, GiPaperArrow } from "react-icons/gi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const About = () => {
  return (
    <section id="about" className="flex flex-col justify-between xl:justify-around ">
      <div className="px-3 lg:p-5 xl:px-20 2xl:p-20">
        <h1
         className="flex flex-row gap-3 mb-5 text-lg sm:text-xl md:text-2xl lg:justify-center lg:text-3xl xl:text-4xl 2xl:text-6xl"
        >
          <GiPaperArrow className="-rotate-45 m-1"/>
          {aboutData.title}
        </h1>
        <p
         className="text-xs leading-6 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-4xl lg:justify-center lg:text-center"
        >
          {aboutData.description}
        </p>
      </div>
      <div className="px-3 lg:px-10 xl:px-20 2xl:p20">
        <h2
         className="flex flex-row gap-3 my-3 text-base sm:text-lg md:text-xl lg:justify-center lg:text-2xl xl:text-3xl 2xl:text-5xl"
        >
          <GiTargetShot className="-rotate-45 m-1"/>
          {aboutData.title2}
        </h2>
        <p
         className="text-xs leading-6 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-4xl lg:justify-center lg:text-center"
        >
          {aboutData.description2}
        </p>
      </div>
      <div
        className="flex flex-row flex-wrap justify-evenly gap-5 p-5 lg:mb-5"
      >
        <a
         href="https://github.com/VictorDSGW"
         className="bg-primarys lg:hover:scale-110 lg:transition-transform"
        >
          <Button
            variant="vdsg"
            size="vdsg"
            className="lg:skew-x-45 lg:translate-x-8 xl:translate-x-10 2xl:translate-x-"
          >
            <FaGithub
            className="lg:-translate-x-5 lg:-skew-x-45 xl:-translate-x-8 2xl:translate-x-"
            />
          </Button>
        </a>
        <a
         href="https://www.linkedin.com/in/victor-dsg-w"
         className="bg-primarys lg:translate-x-10 lg:-skew-x-45 xl:translate-x-12 2xl:translate-x-16 lg:hover:scale-110 lg:transition-transform"
        >
          <Button
            variant="vdsg"
            size="vdsg"
            className="lg:-translate-x-20 lg:skew-x-64 xl:-translate-x-24 2xl:-translate-x-28"
          >
            <FaLinkedin
            className="lg:translate-x-9 lg:-skew-x-45 xl:translate-x-12 2xl:translate-x-16"
            />
          </Button>
        </a>
        <a
         href="mailto:victor.dsgw@gmail.com"
         className="bg-primarys lg:hover:scale-110 lg:transition-transform"
        >
          <Button
            variant="vdsg"
            size="vdsg"
            className="lg:-skew-x-45 lg:-translate-x-8 xl:-translate-x-10 2xl:-translate-x-12"
          >
            <IoIosMail
            className="lg:translate-x-5 lg:skew-x-45 xl:translate-x-8 2xl:translate-x-10"
            />
          </Button>
        </a>
      </div>
    </section>
  )
}
