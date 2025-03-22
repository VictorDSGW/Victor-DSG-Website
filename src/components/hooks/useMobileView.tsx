import { useState, useEffect } from "react";

const useMobileView = (breakpoint = 1024) => {
    const [useMobileView, setUseMobileView] = useState(() => window.innerWidth <= 1024);
    
    useEffect(() => {
        const handleResize = () => setUseMobileView(window.innerWidth <= breakpoint);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return useMobileView
};

export default useMobileView