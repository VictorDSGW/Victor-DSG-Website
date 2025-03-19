"use client"
import React, { memo } from "react";    
import { Handle, Position } from "@xyflow/react";

const Handles = () => {

    return <>
        {/* Pontos Cardeais */}

        <Handle
            id= "N"
            type="source"
            position={ Position.Top }
            style={{ transform: "translate(0%, 0%)", width: 5, height: 5 }}
        />
        <Handle
            id= "N"
            type="target"
            position={ Position.Top }
            style={{ transform: "translate(0%, 0%)", width: 5, height: 5 }}
        />

        <Handle
            id= "S"
            type="source"
            position={ Position.Bottom }
            style={{ transform: "translate(0%, 0%)", width: 5, height: 5 }}
        />
        <Handle
            id= "S"
            type="target"
            position={ Position.Bottom }
            style={{ transform: "translate(0%, 0%)", width: 5, height: 5 }}
        />

        <Handle
            id= "W"
            type="source"
            position={ Position.Left }
            style={{ transform: "translate(0%, 0%)", width: 5, height: 5 }}
        />
        <Handle
            id= "W"
            type="target"
            position={ Position.Left }
            style={{ transform: "translate(0%, 0%)", width: 5, height: 5 }}
        />

        <Handle
            id= "E"
            type="source"
            position={ Position.Right }
            style={{ transform: "translate(0%, 0%)", width: 5, height: 5 }}
        />
        <Handle
            id= "E"
            type="target"
            position={ Position.Right }
            style={{ transform: "translate(0%, 0%)", width: 5, height: 5 }}
        />

        {/* Pontos Colaterais */}

        <Handle
            id= "NW"
            type="source"
            position={Position.Right}
            style={{ position: 'absolute', transform: 'translate(-800%, 300%)' }}
        />
        <Handle
            id= "NW"
            type="target"
            position={Position.Right}
            style={{ position: 'absolute', transform: 'translate(-800%, 300%)' }}
        />
        <Handle
            id= "NE"
            type="source"
            position={Position.Left}
            style={{ position: 'absolute', transform: 'translate(800%, 300%)' }}
        />
        <Handle
            id= "NE"
            type="target"
            position={Position.Left}
            style={{ position: 'absolute', transform: 'translate(800%, 300%)' }}
        />

        <Handle
            id= "SW"
            type="source"
            position={Position.Right}
            style={{ position: 'absolute', transform: 'translate(-800%, -400%)' }}
        />
        <Handle
            id= "SW"
            type="target"
            position={Position.Right}
            style={{ position: 'absolute', transform: 'translate(-800%, -400%)' }}
        />
        
        <Handle
            id= "SE"
            type="source"
            position={Position.Left}
            style={{ position: 'absolute', transform: 'translate(800%, -400%)' }}
        />
        <Handle
            id= "SE"
            type="target"
            position={Position.Left}
            style={{ position: 'absolute', transform: 'translate(800%, -400%)' }}
        />
    </>
}


export default memo(Handles);