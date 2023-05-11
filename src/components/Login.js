import React from 'react';
import Parse from 'parse';

const Login = () => {
    const handelLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;

        const user = Parse.User.logIn(email, pass);
    }
    
    return (
        <form onSubmit={handelLogin}>
            <p>Email: </p><input type="text" name='email'/>
            <p>Password: </p><input type="password" name='pass'/>
        </form>
    );
};

export default Login;