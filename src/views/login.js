import React, { useState } from 'react';
import Alert from '../commonComponent/Alert';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'
import '../css/theme/dark.css'

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
                        <div className="inputs">
                            <input type="text" id="uId" placeholder="User-Id" className="input" required />
                            <i className='bx bx-user'></i>
                        </div>
                        <div className="inputs">
                            <input type="password" id="pass" placeholder="Password" className="input" required />
                            <i className='bx bx-lock-alt'></i>
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" id="reMe" /> Remember me
                            </label>
                            <p className='a' onClick={handleShowAlertFromPass}>Forgot password?</p>
                        </div>
                    </form>
                    <button className="btn" id="loginBtn" onClick={handleShowAlert}>Login</button>
                    <div className="register-now">
                        Don't have an account? <p className='a' onClick={goToRegister}>Register Now</p>
                    </div>
                </div>
            </div>

            {/* Show the custom alert */}
            <Alert status={alertStatus} message={alertMessage} showAlert={showAlert} onDismiss={handleDismissAlert} />
        </>
    );
}

export default Login;
