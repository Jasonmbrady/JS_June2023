import React, {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";
import AllRecords from "./AllRecords"
import axios from "axios";
import NewRecord from './NewRecord';
import OneRecord from './OneRecord';
import EditRecord from './EditRecord';


const Home = (props) => {
    const [allRecords, setAllRecords] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/records')
            .then( res => setAllRecords(res.data))
            .catch( err => console.log(err));
    }, [])

    const deleteRecord = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/records/${id}`)
            .then( res => {
                const updatedAllRecords = allRecords.filter( record => record._id !== res.data._id)
                setAllRecords(updatedAllRecords);
                navigate("/albums");
            })
    }
    return(
        <div>
            <h1>The Vinyl Countdown</h1>
            <Routes>
                <Route path="/" element={<AllRecords allRecords={allRecords} deleteRecord={deleteRecord}/>}/>
                <Route path="/new" element={<NewRecord allRecords={allRecords} setAllRecords={setAllRecords}/>} />
                <Route path="/edit/:id" element={<EditRecord allRecords={allRecords} setAllRecords={setAllRecords}/>}/>
                <Route path='/:id' element={<OneRecord deleteRecord={deleteRecord}/>} />
            </Routes>
        </div>
    );
}
export default Home;