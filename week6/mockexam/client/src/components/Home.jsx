import React, {useState, useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import AllRecords from "./AllRecords"
import axios from "axios";
import NewRecord from './NewRecord';
import OneRecord from './OneRecord';

const Home = (props) => {
    const [allRecords, setAllRecords] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/records')
            .then( res => setAllRecords(res.data))
            .catch( err => console.log(err));
    }, [])
    return(
        <div>
            <h1>The Vinyl Countdown</h1>
            <Routes>
                <Route path="/" element={<AllRecords allRecords={allRecords}/>}/>
                <Route path="/new" element={<NewRecord allRecords={allRecords} setAllRecords={setAllRecords}/>} />
                <Route path='/:id' element={<OneRecord />}/>
            </Routes>
        </div>
    );
}
export default Home;