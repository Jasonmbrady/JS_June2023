import React from 'react';

const UserDisplay = ({user}) => {
    return(
        <div>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <p>Confirm Password: {user.confirmPass}</p>
        </div>
    );
}
export default UserDisplay;