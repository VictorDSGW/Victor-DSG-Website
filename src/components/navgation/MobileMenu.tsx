import React from "react";
import { useScrollSpy } from "@/components/hooks/useScrollSpy";

export default function MobileMenu({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  const sectionIds = [
    "home",
    "about",
    "skills",
    "projects",
    "achievements",
    "contact",
  ];
  const activeSection = useScrollSpy(sectionIds);

  return (
    <div
      className={`fixed flex flex-col justify-center items-center z-10 top-16 right-0 h-full w-full pb-16 bg-white text-black transition-transform duration-300 transform ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="flex flex-col gap-5 md:gap-9 w-full justify-center content-center items-center">
        {sectionIds.map((id, index) => (
          <li
            key={id}
            className={`transition hover:scale-110 duration-300 flex justify-center items-center w-3/5 h-12 sm:h-16 sm:text-xl sm:font-semibold md:h-20 md:text-3xl md:font-bold`}
          >
            <a
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className={`
                      flex justify-center items-center bg-violet-500 w-full h-full
                      ${
                        activeSection
                          ? "transition ease-in-out delay-50 text-slate-100 border-b-2 border-b-violet-600"
                          : ""
                      } 
                      ${
                        index === 0
                          ? "rounded-t-3xl"
                          : index === sectionIds.length - 1
                          ? "rounded-b-3xl"
                          : ""
                      }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
