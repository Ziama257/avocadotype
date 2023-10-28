import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const ScoreList = (props) => {
    const [scores, setScores] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/scores")
        .then((res)=>{
            console.log(res.data);
            setScores(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    }, []);

    return (
        <div className={'container'}>
        <h1 style={{marginTop: "35px", marginBottom:"35px"}}>Your Scores:</h1>
        <table className='table table-hover table-dark' style={{borderRadius: "25px"}}>
            <thead>
                <tr>
                    <th scope='col'>WPM</th>
                    <th scope='col'>Comment</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
            {scores.map((score, index)=>{
                return (
                    <tr key={index}>
                        <td style={{fontSize:"25px", margin:"25px"}}>{score.wpm}</td>
                        <td style={{fontSize:"25px", margin:"25px"}}>{score.comment}</td>
                        <td style={{fontSize:"25px", margin:"25px"}}><Link style={{fontSize:"25px", margin:"25px"}} to={`/scores/edit/${score._id}`}> Edit </Link></td>

                    </tr>
                )})
            }
            </tbody>
        </table>
    </div>
    );
}

export default ScoreList;