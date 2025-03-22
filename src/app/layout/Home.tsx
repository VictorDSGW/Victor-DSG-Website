import { Typewriter } from "react-simple-typewriter";

export const Home = () => {
  return (
    <section id="home" className="flex-col gap-20 items-center">
      <div className="sm:mb-9">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">Victor <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">DSG</span></h1>
      </div>
      <div className="mx-3 my-12">
        <p className="text-center text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl">
          Olá
          <Typewriter 
            words={["", "!, Eu sou "]}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2800}
          />
          <Typewriter 
            words={[" Mundo!", "", "Desenvolvedor Web",
              //  "Engenheiro de Software", "Victor DSG!"
              ]}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1800}
            />
        </p>
      </div>
    </section>
  )
}
