import '../css/login.css'
import btnClass from '../Modules/button.module.css'
import React, { useState } from 'react';
import Axios from '../commonComponent/Axios';
import Button from '../commonComponent/Button';

function AxiosView() {

    const [axiosData, setAxiosData] = useState(null);
    const [axiosObj, setAxiosObj] = useState(false);
    const testAxios_1 = () => {
        console.log('In view  1 ', axiosData);
        setAxiosObj({ type: 'get', url: 'http://localhost:5010/api/Register/GetRegisterData', getReturnData: setAxiosData });
    }
    const testAxios_2 = () => {
        console.log('In view  2 ', axiosData);
        setAxiosObj({ type: 'get', url: 'http://localhost:5010/api/Register/GetRegisterData2', getReturnData: setAxiosData });
    }
    if(axiosData!=null) console.log(axiosData)
    const fnResetAxios=()=>{setAxiosObj(null);}
    return (
        <>
            <div id="mainContainer" className='registerBG'>
                {/* <button className="btn"  onClick={testAxios_1}>Test 1</button>
                <button className="btn"  onClick={testAxios_2}>Test 2</button> */}
                <Button className={btnClass.btnDark}  onClick={testAxios_1} text="Test 1"/>
                <Button  onClick={testAxios_2} text='Test 2'/>
            </div>
            <Axios axiosObj={axiosObj } reset={fnResetAxios} />
        </>
    )
}

export default AxiosView