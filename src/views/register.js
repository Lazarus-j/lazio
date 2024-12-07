import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Masking from '../commonComponent/Masking';
import Input from '../commonComponent/Input';
import Button from '../commonComponent/Button';
import '../css/login.css'
import dark from '../Modules/Dark.module.css'
import { fnGetElementById } from '../js/common';


function Register() {
    const [needMask,maskState]=useState(false);
    function fnMask(){
        maskState(true)
    }

    const navigate = useNavigate();
    const goToAxiosView = () => { navigate('/AxiosView'); }
   
    return (
        <>
            <div id="mainContainer" className='registerBG'>
                <div className="container">
                    <form id="regForm">
                        <h1>Register</h1>
                        <Input id='name'  placeHolder="Name" required/>
                        <Input id='uId' placeHolder="Phone-Number"   required/>
                        <Input id='emailId' type='email' placeHolder="Email-Id" required/>
                        <Input id='dob' type='date' placeHolder="Password" required/>
                        <Input id='gender' placeHolder="Gender" required/>
                        <Input id='pass' type='password' placeHolder="Password"  required/>
                        <Input id='rPass' type='password' placeHolder="Re-Password" required/>
                        <div className="remember-forgot" >
                            <label>
                                <input type="checkbox" id="reMe" required />
                                <p className='a' onClick={goToAxiosView}> Aggre to terms and conditions</p>
                            </label>
                        </div>
                    </form>
                    <Button className={dark.btnDark} id="registerBtn" onClick={fnMask} text='Register'/>
                </div>
            </div>
            <Masking mask={needMask}/>
        </>
    );
}

export default Register;