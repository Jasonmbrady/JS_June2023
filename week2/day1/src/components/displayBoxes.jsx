import React from "react";

const DisplayBoxes = ({boxes, boxesExist}) => {

    
    const checkBoxesExist = () => {
        if (boxesExist) {
            return boxes.map( (box, idx) => {
                return(
                    <div style={{backgroundColor: box.color, height: box.height, width: box.width, display: box.display}} key={idx}></div>
                )
            })
        } else {
            return <h1>No boxes exist to display!</h1>
        }
    }
    return(
        <div>
            {checkBoxesExist()}
        </div>
    )
}

export default DisplayBoxes;