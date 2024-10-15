import axios from "axios";
import Masking from "../../commonComponent/Masking";
import Alert from "../../commonComponent/Alert";

async function CommonAxios(axiosObj) {
    const [isLoading, setIsLoading] = useState(false);  // To show/hide Masking
    const [showAlert, setShowAlert] = useState(false);  // To show/hide Alert
    const [alertMessage, setAlertMessage] = useState('');  // Custom alert message
    const [alertStatus, setAlertStatus] = useState(true);  // Success or Error flag

    const handleDismissAlert = () => {
        setShowAlert(false);  // Dismiss alert
    };

    try {
        setIsLoading(true);  // Start loading
        const data = await Axios({ type: 'get', url: 'https://jsonplaceholder.typicode.com/' });
        setAxiosData(data);
        setAlertMessage('Data fetched successfully!');
        setAlertStatus(true);  // Success status
        axiosObj(data);
    } catch (error) {
        setAlertMessage('Error fetching data!');
        setAlertStatus(false);  // Error status
    } finally {
        setIsLoading(false);  // Stop loading
        setShowAlert(true);  // Show alert after data fetch or error
    }

    return (
        <>
            {/* Masking Component (Loading Spinner) */}
            <Masking mask={isLoading} />
            {/* Alert Component (Notification) */}
            <Alert
                status={alertStatus}  // true for success, false for error
                message={alertMessage}
                showAlert={showAlert}
                onDismiss={handleDismissAlert}
            />
        </>
    );
}

async function Axios(axiosObj) {
    try {
        let response;
        switch (axiosObj.type) {
            case 'post':
                response = await axios.post(axiosObj.url, axiosObj.data);
                break;
            case 'get':
                response = await axios.get(`${axiosObj.url}/1`);
                break;
            case 'put':
                response = await axios.put(`${axiosObj.url}/1`, axiosObj.data);
                break;
            case 'delete':
                response = await axios.delete(`${axiosObj.url}/1`);
                break;
            default:
                response = await axios.post(axiosObj.url, axiosObj.data);
        }
        return response.data;
    } catch (error) {
        console.error('Axios error:', error);
        throw error;
    }
}

export default CommonAxios;
