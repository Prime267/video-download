import React, { useState } from 'react';
import './login.css';
import Upload from '../components/Upload';

const Login = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    console.log(name);
    console.log(mail);
    return (
            <div class="row login-wrapper">
                <div class="col login">
                    <div class="login-form-header">
                        <div>
                            <h1>Automate your business now, contact us</h1>
                        </div>
                        <div class="name-field">
                            <input class="input-wrapper" onChange={(event) => setName(event.target.value)} value={name} type="text" placeholder="Your Name"></input>
                        </div>
                        <div>
                            <input class="input-wrapper" onChange={(event) => setMail(event.target.value)} value={mail} type="text" placeholder="Your Email"></input>
                        </div>
                            <Upload />
                        <div>
                            <button class="submit-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login;