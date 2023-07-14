import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const NewRecord = ({allRecords, setAllRecords}) => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [description, setDescription] = useState("");
    const [isOwned, setIsOwned] = useState(false);
    const [genre1, setGenre1] = useState("");
    const [genre2, setGenre2] = useState("");
    const [genre3, setGenre3] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const newRecordHandler = e => {
        e.preventDefault();
        const newRecord = {
            title, artist, description, isOwned, genre1, genre2, genre3
        }
        // console.log(newRecord);
        axios.post("http://127.0.0.1:8000/api/records", newRecord)
            .then( res => {
                setAllRecords([...allRecords, res.data])
                navigate("/albums")
                }
            )
            .catch( err => {
                const errArray = [];
                // console.log(err);
                for (const key of Object.keys(err.response.data.errors)){
                    errArray.push(err.response.data.errors[key].message)
                }
                setErrors(errArray);
            })
    }
    return(
        <div>
            <Link to="/albums">Home</Link>
            <h3>Add a New Record</h3>
            <form onSubmit={newRecordHandler}>
                <div style={{color: "red"}}>
                    {
                        errors.map( (err, idx) => {
                            return(
                                <p key={idx}>{err}</p>
                            )
                        })
                    }
                </div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" value={title} onChange={ e => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="artist">Artist:</label>
                    <input type="text" name="artist" id="artist" value={artist} onChange={ e => setArtist(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" id="description" value={description} onChange={ e => setDescription(e.target.value)}/>
                </div>
                <div>
                    <input type="checkbox" name="isOwned" id="isOwned" checked={isOwned} onChange={e => setIsOwned(e.target.checked)} />
                    <label htmlFor="isOwned">Owned?</label>
                </div>
                <div>
                    <label htmlFor="genre1">Genre 1</label>
                    <input type="text" name="genre1" id="genre1" value={genre1} onChange={e => setGenre1(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="genre2">Genre 2</label>
                    <input type="text" name="genre2" id="genre2" value={genre2} onChange={e => setGenre2(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="genre3">Genre 3</label>
                    <input type="text" name="genre3" id="genre3" value={genre3} onChange={e => setGenre3(e.target.value)}/>
                </div>

                <button>Add Album</button>
            </form>
        </div>
    );
}
export default NewRecord;