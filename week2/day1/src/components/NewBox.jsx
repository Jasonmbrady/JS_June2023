import React, {useState} from "react";

const NewBox = ({boxes, setBoxes, setBoxesExist}) => {
    const [color, setColor] = useState({value:"", error: false});
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [error, setError] = useState(false);

    const formHandler = (event) => {
        event.preventDefault();
        const allColors =["red", "green", "blue", "black"];
        // take data from the form, use it to create a box object, and setBoxes to boxes + newBox
        if (allColors.includes(color)){
            const newBox = {color: color, height: height + "px", width: width + "px", display: "inline-block"};
            setBoxes([...boxes, newBox]);
            setBoxesExist(true);
            setColor("");
            setHeight(0);
            setWidth(0);
            setError(false);
        } else {
            setColor({error:true, ...color});
        }
    }
    const checkError = () => {
        if (error){
            return (<span style={{color:"red"}}>That is not a valid color</span>)
        }
    }
    return(
        <form onSubmit={formHandler}>
            <div>
                <label htmlFor="color">Color</label>
                <input type="text" name="color" id="color" value={color.value} onChange={event => setColor({value:event.target.value, ...color})}/>
                {checkError()}
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