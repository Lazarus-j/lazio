import axios from "axios";
import { useEffect, useState } from "react";
import Alert from "../../commonComponent/Alert";
import Masking from "../../commonComponent/Masking";

const Axios = ({ axiosObj }) => {
    const [masking, maskingState] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');  // Custom alert message
    const [alertStatus, setAlertStatus] = useState(true);  // Success or Error flag

    const handleDismissAlert = () => {
        setShowAlert(false);
    };
    useEffect(() => {
        const fetchData = async () => {
            if (!axiosObj || axiosObj.url === '') {  return; }
            maskingState(true);
            let fetchedData = await fnAxiosByType(axiosObj);  // Pass full axiosObj
            if (fetchedData && fetchedData.status) {
                maskingState(false);
                setAlertStatus(true);  // Assuming success if data is fetched
                if (fetchedData.data && fetchedData.data.length > 0 && (typeof axiosObj.getReturnData === 'function'))
                    axiosObj.getReturnData(fetchedData.data);
                if (fetchedData.message) {
                    setAlertMessage(fetchedData.message);
                    setShowAlert(true);
                }
            } else {
                maskingState(false);
                setAlertMessage(fetchedData.message || 'Error while fetching data');
                setAlertStatus(false);
                setShowAlert(true);
            }
        };
        fetchData();
    }, [axiosObj]);  // Dependency array includes axiosObj 

    return (
        <>
            <Alert status={alertStatus} message={alertMessage} showAlert={showAlert} onDismiss={handleDismissAlert} />
            <Masking mask={masking} />
        </>
    );
}

const fnAxiosByType = async (axiosObj) => {
    switch (axiosObj.type) {
        case 'post':
            return await fnAxiosPost(axiosObj);
        case 'get':
            return await fnAxiosGet(axiosObj);
        case 'put':
            return await fnAxiosPut(axiosObj);
        case 'delete':
            return;
        default:
            return await fnAxiosPost(axiosObj);
    }
}

const fnAxiosGet = async (axiosObj) => {
    let response = null;
    await axios.get(`${axiosObj.url}`).then(res => {
        response = res.data
    }).catch((error) => { console.log(error) });
    return response;
}

const fnAxiosPost = async (axiosObj) => {
    let response = null;
    await axios.post(axiosObj.url, axiosObj.data).then(res => {
        response = res.data
    }).catch((error) => { console.log(error) });
    return response;
}

const fnAxiosPut = async (axiosObj) => {
    let response = null;
    await axios.put(`${axiosObj.url}`, axiosObj.data).then(res => {
        response = res.data
    }).catch((error) => { console.log(error) });
    return response;
}

export default Axios;
