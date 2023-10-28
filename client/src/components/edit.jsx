import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link} from "react-router-dom";
const Update = (props) => {
    const { id } = useParams();
    const [comment, setComment] = useState();
    const [wpm, setWpm] = useState();
    const navigate = useNavigate();
    const [errors, setErrors] = useState("");
    const formValidator = () => {
        if (comment.length < 3) {
            return false
        }
        return true
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/scores/' + id)
            .then(res => {
                setComment(res.data.comment);
                setWpm(res.data.wpm);
                console.log(wpm, comment);
            })
            .catch(err => console.log(err))
    }, [])
    const updateScore = (e) => {
        if (formValidator()){
        e.preventDefault();
        axios.put('http://localhost:8000/api/scores/' + id, {
            comment,
        })
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err))
        }
        else{
            e.preventDefault();
            setErrors({comment: "Comment must be at least 3 characters"})
        }
    }
    const deleteScore = (e) => {
        axios.delete('http://localhost:8000/api/scores/' + id)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        navigate("/")
    }
    return (
        <div>
            <nav className='navbar' style={{marginTop:"40px", padding:"0px 7% 0px 7%"}}>
                <h1>Edit Comment</h1>
                <Link style={{fontSize:"14px"}} to={"/"}> go back home </Link>
            </nav>
            <h1 style={{margin:"2% 0% 2% 2%"}}>Edit Score Comment</h1>
            <form className="form col-md-4 mx-auto" onSubmit={updateScore}>
            <div className='Form-group mt-3'>
            {errors.comment? <p className="text-danger">{errors.comment}</p> : ""}
                    <label htmlFor="" className='form-label'>Score: {wpm} WPM</label> 
                    <input type="text" className='form-control' value={comment} onChange={ (e) =>setComment(e.target.value)} />
            </div>
                <button className='btn btn-primary mt-3'>Submit Edit</button>
            </form>
            <div className='row justify-content-center'>
                <button style={{width:"100px", marginBottom:"30px"}} className='btn btn-danger mt-3' onClick={(e) => {deleteScore(id)}}>Delete</button>
            </div>
        </div>
    )
}
export default Update;