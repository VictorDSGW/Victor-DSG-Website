import { useState, useEffect } from "react";

const useMobileView = (breakpoint = 1024) => {
    const [useMobileView, setUseMobileView] = useState(false);
    
    useEffect(() => {
        const handleResize = () => setUseMobileView(window.innerWidth <= breakpoint);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return useMobileView
};

export default useMobileView