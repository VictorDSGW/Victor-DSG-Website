
export default function Navbar() {
    return (
        <nav className="bg-slate-900 text-white font-semibold">
            <div >
                <ul className="flex flex-row gap-10">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#certificates">Certificates</a></li>
                </ul>
            </div>
        </nav>
    )
}