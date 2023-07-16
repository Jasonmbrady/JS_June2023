import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, Link} from 'react-router-dom';
import axios from "axios";

const EditRecord = ({allRecords, setAllRecords}) => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [description, setDescription] = useState("");
    const [isOwned, setIsOwned] = useState(false);
    const [genre1, setGenre1] = useState("");
    const [genre2, setGenre2] = useState("");
    const [genre3, setGenre3] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect( () => {
        axios.get(`http://127.0.0.1:8000/api/records/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setArtist(res.data.artist);
                setDescription(res.data.description);
                setIsOwned(res.data.isOwned);
                setGenre1(res.data.genre1);
                setGenre2(res.data.genre2);
                setGenre3(res.data.genre3);
            })
            .catch( err => console.log(err));
    }, [id])

    const updateRecordHandler = e => {
        e.preventDefault();
        const editRecord = {
            title, artist, description, isOwned, genre1, genre2, genre3
        }
        axios.patch(`http://127.0.0.1:8000/api/records/${id}`, editRecord)
            .then( res => {
                const updatedRecord = res.data;
                const updatedAllRecords = allRecords.map( record => {
                    return record._id === updatedRecord._id ? updatedRecord : record;
                })
                setAllRecords(updatedAllRecords);
                navigate("/albums");
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
        <Link to="/albums">Home</Link>
        <h3>Add a New Record</h3>
        <form onSubmit={updateRecordHandler}>
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

            <button>Edit Album</button>
        </form>
    </div>
    );
}
export default EditRecord;