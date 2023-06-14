import React, {useState} from "react";

const PersonSetter = ({setUser}) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0)
    const [hairColor, setHairColor] = useState("");

    const formHandler = (event) => {
        event.preventDefault();
        const newUser = {
            name, age, hairColor
        }
        setUser(newUser)
    }
    return(
        <div>
            <form method="post" onSubmit={formHandler}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" value={name} onChange={ event => setName(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" name="age" id="age" value={age} onChange={ event => setAge(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="hairColor">Hair Color</label>
                    <input type="text" name="hairColor" id="hairColor" value={hairColor} onChange={ event => setHairColor(event.target.value)}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default PersonSetter;