import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Masking from '../commonComponent/Masking';
import '../css/login.css'
import '../css/theme/light.css'

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
                        <div className="inputs">
                            <input type="text" id="name" placeholder="Name" className=" input" required />
                        </div>
                        <div className="inputs">
                            <input type="text" id="uId" placeholder="Phone-Number" className=" input" pattern="\d{10}" required />
                        </div>
                        <div className="inputs">
                            <input type="email" id="emailId" placeholder="Email-Id" className=" input" required />
                        </div>
                        <div className="inputs">
                            <input type="date" id="dob" placeholder="DOB" className=" input" required />
                        </div>
                        <div className="inputs">
                            <input type="text" id="gender" placeholder="Gender" className=" input" required />
                        </div>
                        <div className="inputs">
                            <input type="text" id="pass" placeholder="Password" className=" input" required />
                        </div>
                        <div className="inputs">
                            <input type="text" id="rPass" placeholder="Re-Password" className=" input" required />
                        </div>
                        <div className="remember-forgot" onClick={goToAxiosView}>
                            <label>
                                <input type="checkbox" id="reMe" required />
                                <p className='a'> Aggre to terms and conditions</p>
                            </label>
                        </div>
                    </form>
                    <button className="btn" id="registerBtn" onClick={fnMask}>Register</button>
                </div>
            </div>
            <Masking mask={needMask}/>
        </>
    );
}

export default Register;