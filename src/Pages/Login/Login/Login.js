import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='container login-form'>
            <h2 className='my-5 login-title'>Please login</h2>
            <form className='w-50 mx-auto'>
                <input type="text" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input className='w-50 d-block mx-auto' style={{ backgroundColor: "#00896F", color: "#ffffff" }} type="submit" value="Login" />
            </form>
            <div className='text-center'>
                <p>Don't have an account ? <span><Link to="/register" style={{ color: "#00896F" }} className='text-decoration-none pe-auto'>Please Register</Link></span></p>
            </div>
        </div>
    );
};

export default Login;