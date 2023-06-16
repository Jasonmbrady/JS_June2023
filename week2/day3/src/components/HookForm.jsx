import React, {useState} from 'react';

const HookForm = ({setUser, user}) => {
    // const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    
    // const firstNameChangeHandler = (event) => {
    //     setUser({...user, firstName: event.target.value})
    // }

    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     // const newUser = {firstName, lastName, email, password, confirmPass};
    //     setUser(newUser);
    // }
    // two pieces: form that takes in User data; fields to output same data
    return(
        <div>
            <form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" value={user.firstName} onChange={event => setUser({...user, firstName: event.target.value})
    }/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" value={lastName} onChange={ event => setLastName(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={email} onChange={ event => setEmail(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={ event => setPassword(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="confirmPass">Confirm Password</label>
                    <input type="password" name="confirmPass" id="confirmPass" value={confirmPass} onChange={ event => setConfirmPass(event.target.value)}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default HookForm;