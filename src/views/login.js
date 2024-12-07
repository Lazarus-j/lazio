import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../commonComponent/Alert';
import Button from '../commonComponent/Button';
import Input from '../commonComponent/Input';
import '../css/login.css'
import dark from '../Modules/Dark.module.css'

function Login() {
    const navigate = useNavigate();
    const goToRegister = () => { navigate('/register'); }

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');  // Custom alert message
    const [alertStatus, setAlertStatus] = useState(true);  // Success or Error flag

    const handleShowAlert = () => {
        setAlertMessage('From login');  // Custom message for the alert
        setAlertStatus(true);  // Set status (true for success, false for error)
        setShowAlert(true);  // This should trigger the alert only once
    };
    const handleShowAlertFromPass = () => {
        setAlertMessage('From F-Pass');  // Custom message for the alert
        setAlertStatus(false);  // Set status (true for success, false for error)
        setShowAlert(true);  // This should trigger the alert only once
    };

    // Reset alert visibility when it's manually dismissed
    const handleDismissAlert = () => {
        setShowAlert(false);
    };

    return (
        <>
            <div id="mainContainer" className='loginBG'>
                <div className="container">
                    <form>
                        <h1>Login</h1>
                        <Input id="uId" placeHolder="User-Id" iCol='dk' i="bx-user" className={dark.inputDark} required/>
                        <Input id='pass' type='password' placeHolder="Password" iCol='dk' i='bx bx-lock-alt' className={dark.inputDark} required/>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" id="reMe" /> Remember me
                            </label>
                            <p className='a' onClick={handleShowAlertFromPass}>Forgot password?</p>
                        </div>
                    </form>
                    <Button className={dark.btnDark} id="loginBtn" onClick={handleShowAlert} text='Login'/>
                    <div className="register-now">
                        <label>Don't have an account?</label> <p className='a' onClick={goToRegister}>Register Now</p>
                    </div>
                </div>
            </div>
            <Alert status={alertStatus} message={alertMessage} showAlert={showAlert} onDismiss={handleDismissAlert} />
        </>
    );
}

export default Login;
