import Navbar from "@/components/navgation/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed w-screen h-[var(--navbar-height)] flex flex-row items-center bg-slate-900 py-5 xl:py10">
            <div className="container mx-auto flex justify-around lg:justify-around">
                <Link href="/">
                    <h1 className="text-3xl font-semibold">Victor
                        <span className="text-purple-500"> DSG</span>
                    </h1>
                </Link>

                <div className="hidden lg:flex items-center">
                    <Navbar />
                </div>
                <div className="hidden lg:flex items-center">
                    <Link href="#contact">
                        <Button variant="outline">Contact</Button>
                    </Link>
                </div>

                <div className="lg:hidden">moba</div>
            </div>
        </header>
    );
}
