import SkillAvatar from "@/components/SkillAvatar";
import { skillsData } from "@/data/SkillsTree/skillsData";

export const Skills = () => {
  return (
    <section
     id="skills"
     className="static"
    >
        <div
         className="border border-blue-600 w-full h-screen absolute "
        >
          <div
           className="border border-red-600 w-full h-full grid grid-cols-3 grid-rows-3 gap-10 justify-items-center items-center"
          >
            {skillsData.map((skill) => (
              <SkillAvatar
                key={skill.id}
                position={skill.position}
                icon={skill.icon}
                name={skill.name}
                hoverCard={skill.hoverCard}
              />
            ))}
          </div>
        </div>
    </section>
  )
}
