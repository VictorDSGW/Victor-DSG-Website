import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState("");
    const range = 150;

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

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionIds]);

    return activeSection;
}
