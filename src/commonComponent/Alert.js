import '../css/alert.css';
import React, { useState, useEffect } from 'react';

const Alert = ({status, message, showAlert, onDismiss }) => {
    const [visible, setVisible] = useState(false);
    const alertStyle = status ? 'success' : 'error';
console.log('alert');
    useEffect(() => {
        if (showAlert) {
            setVisible(true);  // Fade in
            
            // Fade out after 3 seconds (3000 milliseconds)
            const timer = setTimeout(() => {
                setVisible(false);  // Fade out
                onDismiss(); // Inform parent component
            }, 3000);
            
            return () => clearTimeout(timer);  // Cleanup timer on unmount
        }
    }, [showAlert, onDismiss]);  // Added dependencies for effect

    return (
        <div id="_alert" className={`alert-box ${alertStyle} ${visible ? 'fade-in' : 'fade-out'}`}>
            <p id="alertMessage">{message}</p>
            <div className="cancel" id="alertCancel" onClick={() => {
                setVisible(false);
                onDismiss();  // Close and inform parent component
            }}>
                &#10023;
            </div>
        </div>
    );
};

export default Alert;
