import "../styles/styles.scss"
import React, {useState, useEffect} from 'react';
import {ColorRandom} from "../container/DivFunctions";

export function Principal() {

    const [color, setColor] = useState('black');
    const [isColorChanging, setIsColorChanging] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isColorChanging) {
            intervalId = setInterval(() => {
                setColor(ColorRandom())
            }, 10);
        }
        return () => {
            clearInterval(intervalId);
        }
    }, [isColorChanging])
    const handleMouseEnter = () => {
        setIsColorChanging(true)
        setColor(ColorRandom())
    }
    const handleMouseLeave = () => {
        setIsColorChanging(false)
        setColor('black')
    }
    const handleClick = () => {
        setIsColorChanging(prevState => !prevState);
    }

    return <div className={"container my-lg-5"}>
        <div className={"d-flex"}>
            <div id={"Componente"} style={{
                width: '255px',
                height: '255px',
                backgroundColor: color,
            }}
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                 onDoubleClick={handleClick}>
            </div>
        </div>
    </div>
}
