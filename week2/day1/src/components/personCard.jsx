import React from "react";

const PersonCard = ({userList}) => {
    return(
        <div>
            <h3>Name: {user.name}</h3>
            <p>Age: {user.age}</p>
            <p>Hair Color: {user.hairColor}</p>
        </div>

    )
}

export default PersonCard;