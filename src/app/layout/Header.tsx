import Navbar from "@/components/navgation/Navbar";
import { Button } from "@/components/ui/button";
import { useScrollSpy } from "@/components/hooks/useScrollSpy";
import Link from "next/link";
import MobileMenu from "@/components/navgation/MobileMenu";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { ThemeToggle } from "@/components/navgation/ThemeToggle";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const sectionIds = ["contact"];
    // const activeSection = useScrollSpy(sectionIds);
    const { activeSection, scrollToSection } = useScrollSpy(sectionIds);

    return (
        <header className="fixed top-0 left-0 w-screen md:h-[var(--navbar-height)] flex flex-row bg-[hsl(var(--tertiary))] pl-1 pr-3 py-3 z-50 xl:py10 2xl:py-16">
            <div className="container mx-auto flex justify-between lg:justify-between">
                <Link href="/" className="flex items-center cursor-default">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold xl:font-bold 2xl:font-extrabold">Victor
                        <span className="text-purple-500"> DSG</span>
                    </h1>
                </Link>

                <div className="hidden lg:flex items-center">
                    <Navbar />
                </div>

                <div
                    className="absolute left-2/4 lg:left-[80%] 2xl:left-[90%] translate-y-2 2xl:-translate-y-5 2xl:scale-125"
                >
                    <ThemeToggle />
                </div>

                <div className="hidden lg:flex items-center">
                    {sectionIds.map((id) => (
                        <li key={id} className="list-none" onClick={() => scrollToSection(`${id}`)}>
                            <Button
                            variant="contact"
                            className={activeSection === id ? "transition ease-in-out delay-50 text-violet-500 hover:scale-110 duration-300 border-b-2 border-violet-600" : "transition hover:scale-110 duration-300"}
                            >Contact</Button>
                        </li>
                    ))}
                </div>

                <div className="lg:hidden flex items-center">
                    <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
                    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                </div>
            </div>
        </header>
    );
}
