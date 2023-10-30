import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link} from "react-router-dom";

const Registration = () => {
const [username, setUsername] = useState();
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const navigate = useNavigate();
const [errors, setErrors] = useState("");
    const formValidator = () => {
        if (username.length < 3) {
            return false
        }
        return true
    }
    const register = (e) => {
        if (formValidator()){
        e.preventDefault();
        axios.post('http://localhost:8000/api/users' ,{
            username,
            email,
            password
        })
            .then(res => {
                console.log(res);
                navigate("/test");
            })
            .catch(err => console.log(err))
        }
        else{
            e.preventDefault();
            setErrors({username: "Username Must be at least 3 characters"})
        }
    }
    // ADD VALIDATIONS
    return (
        <div>
            <nav className='navbar'>
                <h1>Register for AvocadoType!</h1>
            </nav>
            <div className='container'>
                <h1 style={{margin:"2% 0% 2% 2%"}}>Register</h1>
                <form className="form col-md-4 mx-auto" onSubmit={register}>
                <div className='Form-group mt-3'>
                {errors.username? <p className="text-danger">{errors.username}</p> : ""}
                        <label htmlFor="" className='form-label'>Username:</label> 
                        <input type="text" className='form-control' value={username} onChange={ (e) =>setUsername(e.target.value)} />
                </div>
                <div className='Form-group mt-3'>
                {errors.email? <p className="text-danger">{errors.email}</p> : ""}
                        <label htmlFor="" className='form-label'>Email:</label> 
                        <input type="text" className='form-control' value={email} onChange={ (e) =>setEmail(e.target.value)} />
                </div>
                <div className='Form-group mt-3'>
                {errors.password? <p className="text-danger">{errors.password}</p> : ""}
                        <label htmlFor="" className='form-label'>Password:</label> 
                        <input type="text" className='form-control' value={password} onChange={ (e) =>setPassword(e.target.value)} />
                </div>
                    <button className='btn btn-primary mt-3'>Submit</button>
                </form>
                {/* <div className='row justify-content-center'>
                    <button style={{width:"100px", marginBottom:"30px"}} className='btn btn-danger mt-3' onClick={(e) => {deleteScore(id)}}>Delete</button>
                </div> */}
            </div>
        </div>
    )
}
export default Registration;
