import React from "react";

const DisplayBoxes = ({boxes}) => {

    return(
        <div>
            {boxes.map( (box, idx) => {
                return(
                    <div style={{backgroundColor: box.color, height: box.height, width: box.width, display: box.display}} key={idx}></div>
                )
            })}
        </div>
    )
}

export default DisplayBoxes;