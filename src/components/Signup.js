import React from 'react';
const Parse = require('parse');

const Signup = () => {
    

    const handelSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const email = form.name2.value;
        const pass = form.pass.value;
        const phone = form.name3.value;
        console.log(userName, email, pass, phone);
        const user = new Parse.User();
        user.set("username", userName);
        user.set("password", pass);
        user.set("email", email);
    
        // other fields can be set just like with Parse.Object
        user.set("phone", phone);
       
             user.signUp().then((user)=>{
                console.log(user);
             }, (error) => {
                console.log(error);
             });
    }
    return (
        <form onSubmit={handelSubmit}>
            <span>UserName: <input type="text" name='name' /></span>
            <span>Email: <input type="text" name='name2' /></span>
            <span>Password: <input type="password" name='pass'/></span>
            <span>Phone: <input type="text" name='name3' /></span>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default Signup;