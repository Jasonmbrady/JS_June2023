import React from 'react';
import {Link} from "react-router-dom";
import "../App.css";

const AllRecords = ({allRecords, deleteRecord}) => {
    const deleteHandler = e => {
        const recordId = e.target.id;
        deleteRecord(recordId);
    }
    return(
        <div>
            <Link to={'/albums/new'}>Add a New Record</Link>
            <h3>My Vinyl Wishlist and Collection</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Album Title</th>
                        <th>Artist</th>
                        <th>Owned</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { allRecords.map( record => {
                        return (
                            <tr key={record._id}>
                                <td><Link to={`${record._id}`}>{record.title}</Link></td>
                                <td>{record.artist}</td>
                                <td>{record.isOwned ? "Yes": "No"}</td>
                                <td><Link to={`/albums/edit/${record._id}`}>Edit</Link> | <span className="fake-link" onClick={deleteHandler} id={record._id}>Delete</span></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default AllRecords;