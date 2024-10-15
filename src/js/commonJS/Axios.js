import axios from "axios";
import { useEffect, useState } from "react";
import Alert from "../../commonComponent/Alert";
import Masking from "../../commonComponent/Masking";

const Axios = ({ axiosObj, needCall }) => {
    const [masking, maskingState] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');  // Custom alert message
    const [alertStatus, setAlertStatus] = useState(true);  // Success or Error flag
    const [axiosData, setAxiosData] = useState(null);

    const handleDismissAlert = () => {
        setShowAlert(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            if (!axiosObj || !axiosObj.needCall || !axiosObj.url) return;

            maskingState(true);
            let fetchedData = await fnAxiosByType(axiosObj);  // Pass full axiosObj
            console.log(fetchedData)
            if (fetchedData) {
                maskingState(false);
                setAlertMessage(fetchedData.message || 'Success');
                setAlertStatus(true);  // Assuming success if data is fetched
                setAxiosData(fetchedData.data);
                if (fetchedData.message)
                    setShowAlert(true);
                needCall(false);
            } else {
                maskingState(false);
                setAlertMessage('Error fetching data');
                setAlertStatus(false);
                setShowAlert(true);
                needCall(false);

            }
        };
        fetchData();
    }, [axiosObj, needCall]);  // Dependency array includes axiosObj

    if (axiosObj.getReturnData) {
        axiosObj.getReturnData(axiosData);
    }

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
