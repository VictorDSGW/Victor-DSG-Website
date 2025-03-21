import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState("");
    const [headerOffset, setHeaderOffset] = useState(0);
    const range = 150;

    useEffect(() => {
        const updateHeaderOffset = () => {
            const header = document.querySelector("header");
            setHeaderOffset(header ? header.offsetHeight : 0);
        };

        updateHeaderOffset();
        window.addEventListener("resize", updateHeaderOffset);

        return () => window.removeEventListener("resize", updateHeaderOffset);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "";
            sectionIds.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect();
                    if (top <= range && bottom >= range) {
                        currentSection = id;
                    }
                }
            });
            setActiveSection(currentSection);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionIds]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offsetPosition = element.offsetTop - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    return { activeSection, scrollToSection };
}
