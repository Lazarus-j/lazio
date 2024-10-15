import '../css/login.css'
import '../css/theme/light.css'
import React, { useState } from 'react';
import Axios from '../js/commonJS/Axios';

function AxiosView() {
    const [axiosType, setAxiosType] = useState('post');
    const [axiosUrl, setAxiosUrl] = useState('');
    const [axiosData, setAxiosData] = useState(null);
    const [needAxiosCall, setNeedCall] = useState(false);
    const testAxios = () => {
        console.log('In view   ', axiosData);
        setAxiosUrl('http://localhost:5010/api/Register/GetRegisterData');
        setAxiosType('get');
        setNeedCall(true);
    }
    return (
        <>
            <div id="mainContainer" className='registerBG'>
                <button className="btn" id="AxiosView" onClick={testAxios}>AxiosView</button>
            </div>
            <Axios axiosObj={{ type: axiosType, url: axiosUrl, getReturnData: setAxiosData, needCall: needAxiosCall } } needCall={setNeedCall} />
        </>
    )
}

export default AxiosView