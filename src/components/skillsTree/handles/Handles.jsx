"use client"
import React, { memo, useState, useEffect } from "react";    
import { Handle, Position } from "@xyflow/react";

const Handles = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
        const handleResize = () => setIsMobile(window.innerWidth <= 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // if (isMobile) {
    //     console.log("DAFDA")
    // }

    // return <>
    //     {/* Pontos Cardeais */}

    //     <Handle
    //         id={isMobile ? "S" : "N"}
    //         type="source"
    //         position={ isMobile ? Position.Left : Position.Top }
    //         style={{ transform: "translate(-0%, -0%)", background: "blue", width: 5, height: 5 }}
    //     />
    //     <Handle
    //         id={isMobile ? "S" : "N"}
    //         type="target"
    //         position={ isMobile ? Position.Left : Position.Top }
    //         style={{ transform: "translate(-0%, -0%)", background: "red", width: 5, height: 5 }}
    //     />

    //     <Handle
    //         id={isMobile ? "N" : "S"}
    //         type="source"
    //         position={ isMobile ? Position.Right : Position.Bottom }
    //         style={{ transform: "translate(-0%, -0%)", background: "blue", width: 5, height: 5 }}
    //     />
    //     <Handle
    //         id={isMobile ? "N" : "S"}
    //         type="target"
    //         position={ isMobile ? Position.Right : Position.Bottom }
    //         style={{ transform: "translate(-0%, -0%)", background: "red", width: 5, height: 5 }}
    //     />

    //     <Handle
    //         id={isMobile ? "E" : "W"}
    //         type="source"
    //         position={ isMobile ? Position.Top : Position.Left }
    //         style={{ transform: "translate(-0%, -0%)", background: "blue", width: 5, height: 5 }}
    //     />
    //     <Handle
    //         id={isMobile ? "E" : "W"}
    //         type="target"
    //         position={ isMobile ? Position.Top : Position.Left }
    //         style={{ transform: "translate(-0%, -0%)", background: "red", width: 5, height: 5 }}
    //     />

    //     <Handle
    //         id={isMobile ? "W" : "E"}
    //         type="source"
    //         position={ isMobile ? Position.Top : Position.Right }
    //         style={{ transform: "translate(-0%, -0%)", background: "blue", width: 5, height: 5 }}
    //     />
    //     <Handle
    //         id={isMobile ? "W" : "E"}
    //         type="target"
    //         position={ isMobile ? Position.Top : Position.Right }
    //         style={{ transform: "translate(-0%, -0%)", background: "red", width: 5, height: 5 }}
    //     />

    //     {/* Pontos Colaterais */}

    //     <Handle
    //         id={isMobile ? "" : "NW"}
    //         type="source"
    //         position={Position.Right}
    //         style={{ position: 'absolute', transform: 'translate(-800%, 300%)', background: '#555' }}
    //     />
    //     <Handle
    //         id={isMobile ? "" : "NW"}
    //         type="target"
    //         position={Position.Right}
    //         style={{ position: 'absolute', transform: 'translate(-800%, 300%)', background: '#555' }}
    //     />
    //     <Handle
    //         id={isMobile ? "" : "NE"}
    //         type="source"
    //         position={Position.Left}
    //         style={{ position: 'absolute', transform: 'translate(800%, 300%)', background: '#555' }}
    //     />
    //     <Handle
    //         id={isMobile ? "" : "NE"}
    //         type="target"
    //         position={Position.Left}
    //         style={{ position: 'absolute', transform: 'translate(800%, 300%)', background: '#555' }}
    //     />

    //     <Handle
    //         id={isMobile ? "" : "SW"}
    //         type="source"
    //         position={Position.Right}
    //         style={{ position: 'absolute', transform: 'translate(-800%, -400%)', background: '#555' }}
    //     />
    //     <Handle
    //         id={isMobile ? "" : "SW"}
    //         type="target"
    //         position={Position.Right}
    //         style={{ position: 'absolute', transform: 'translate(-800%, -400%)', background: '#555' }}
    //     />
        
    //     <Handle
    //         id={isMobile ? "" : "SE"}
    //         type="source"
    //         position={Position.Left}
    //         style={{ position: 'absolute', transform: 'translate(800%, -400%)', background: '#555' }}
    //     />
    //     <Handle
    //         id={isMobile ? "" : "SE"}
    //         type="target"
    //         position={Position.Left}
    //         style={{ position: 'absolute', transform: 'translate(800%, -400%)', background: '#555' }}
    //     />
    // </>
    return <>
        {/* Pontos Cardeais */}

        <Handle
            id= "N"
            type="source"
            position={ Position.Top }
            style={{ transform: "translate(0%, 0%)", background: "blue", width: 5, height: 5 }}
        />
        <Handle
            id= "N"
            type="target"
            position={ Position.Top }
            style={{ transform: "translate(0%, 0%)", background: "red", width: 5, height: 5 }}
        />

        <Handle
            id= "S"
            type="source"
            position={ Position.Bottom }
            style={{ transform: "translate(0%, 0%)", background: "blue", width: 5, height: 5 }}
        />
        <Handle
            id= "S"
            type="target"
            position={ Position.Bottom }
            style={{ transform: "translate(0%, 0%)", background: "red", width: 5, height: 5 }}
        />

        <Handle
            id= "W"
            type="source"
            position={ Position.Left }
            style={{ transform: "translate(0%, 0%)", background: "blue", width: 5, height: 5 }}
        />
        <Handle
            id= "W"
            type="target"
            position={ Position.Left }
            style={{ transform: "translate(0%, 0%)", background: "red", width: 5, height: 5 }}
        />

        <Handle
            id= "E"
            type="source"
            position={ Position.Right }
            style={{ transform: "translate(0%, 0%)", background: "blue", width: 5, height: 5 }}
        />
        <Handle
            id= "E"
            type="target"
            position={ Position.Right }
            style={{ transform: "translate(0%, 0%)", background: "red", width: 5, height: 5 }}
        />

        {/* Pontos Colaterais */}

        <Handle
            id= "NW"
            type="source"
            position={Position.Right}
            style={{ position: 'absolute', transform: 'translate(-800%, 300%)', background: '#555' }}
        />
        <Handle
            id= "NW"
            type="target"
            position={Position.Right}
            style={{ position: 'absolute', transform: 'translate(-800%, 300%)', background: '#555' }}
        />
        <Handle
            id= "NE"
            type="source"
            position={Position.Left}
            style={{ position: 'absolute', transform: 'translate(800%, 300%)', background: '#555' }}
        />
        <Handle
            id= "NE"
            type="target"
            position={Position.Left}
            style={{ position: 'absolute', transform: 'translate(800%, 300%)', background: '#555' }}
        />

        <Handle
            id= "SW"
            type="source"
            position={Position.Right}
            style={{ position: 'absolute', transform: 'translate(-800%, -400%)', background: '#555' }}
        />
        <Handle
            id= "SW"
            type="target"
            position={Position.Right}
            style={{ position: 'absolute', transform: 'translate(-800%, -400%)', background: '#555' }}
        />
        
        <Handle
            id= "SE"
            type="source"
            position={Position.Left}
            style={{ position: 'absolute', transform: 'translate(800%, -400%)', background: '#555' }}
        />
        <Handle
            id= "SE"
            type="target"
            position={Position.Left}
            style={{ position: 'absolute', transform: 'translate(800%, -400%)', background: '#555' }}
        />
    </>
}


export default memo(Handles);