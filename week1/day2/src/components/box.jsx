import React from 'react';

const Box = (props) => {
    const {color, number} = props;
    const boxes = []
    for (let i=0; i < number; i++){
        boxes.push(i);
    }
    return (
        boxes.map( num => {
        return <div className="box" style={{ backgroundColor: color, margin: num}}></div>
        })
        
    )
}

export default Box;