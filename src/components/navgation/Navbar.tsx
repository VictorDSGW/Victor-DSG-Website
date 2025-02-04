import { useScrollSpy } from "./ScrollSpy";

export default function Navbar() {
    const sectionIds = ["home", "about", "skills", "projects", "achievements"];
    const activeSection = useScrollSpy(sectionIds);

    return (
        <nav className="text-white font-semibold text-base xl:text-base xl:font-bold 2xl:text-3xl 2xl:font-extrabold">
            <ul className="flex flex-row gap-10">
            {sectionIds.map((id) => (
                <li key={id} className="transition hover:scale-110 duration-300">
                    <a href={`#${id}`} className={activeSection === id ? "transition ease-in-out delay-50 text-violet-500 border-b-2 border-b-violet-600" : ""}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
                </li>
                ))}
            </ul>
        </nav>
    )
}