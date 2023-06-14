import React, {useState} from "react";

const NewBox = ({boxes, setBoxes}) => {
    const [color, setColor] = useState("");
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    const formHandler = (event) => {
        event.preventDefault();
        // take data from the form, use it to create a box object, and setBoxes to boxes + newBox
        const newBox = {color: color, height: height + "px", width: width + "px", display: "inline-block"};
        setBoxes([...boxes, newBox]);
    }
    return(
        <form onSubmit={formHandler}>
            <div>
                <label htmlFor="color">Color</label>
                <input type="text" name="color" id="color" value={color} onChange={event => setColor(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="height">Height</label>
                <input type="text" name="height" id="height" value={height} onChange={event => setHeight(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="width">Width</label>
                <input type="text" name="width" id="width" value={width} onChange={event => setWidth(event.target.value)}/>
            </div>
            <button>Create Box</button>
        </form>
    )
}

export default NewBox;