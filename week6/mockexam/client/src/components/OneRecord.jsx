import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const OneRecord = (props) => {
    const [record, setRecord] = useState({});
    const {id} = useParams();
    useEffect( () => {
        axios.get(`http://127.0.0.1:8000/api/records/${id}`)
            .then(res => setRecord(res.data))
            .catch( err => console.log(err));
    }, [])
    return(
        <div>
            <Link to="/albums">Home</Link>
            <h3>Details: {record.title}</h3>
            <p>Album Title: {record.title}</p>
            <p>Artist: {record.artist}</p>
            <p>Details: {record.details}</p>
            <p>Owned: {record.isOwned ? "Yes": "No"}</p>
            <p>Genres: {record.genre1 ? record.genre1 + ", ": ""} {record.genre2 ? record.genre2 + ", ": ""} {record.genre3 ? record.genre3 + ", ": ""} </p>
        </div>
    );
}
export default OneRecord;