import { createContext, useState, useCallback } from "react";

export const NotificationContext = createContext();

export const types = {
    error: "error",
    warning: "warning",
    success: "success",
    info: "info",
    default: "default"
}

const initialNotifications = {
    show: false,
    message: "",
    type: ""
}

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState(initialNotifications);

    const showNotifications = useCallback((message, type) => {
        setNotification({show: true, message, type});
         setTimeout(() => {
            setNotification(initialNotifications);
         }, 5000)
    }, []);

    const hideNotification = useCallback(() => {
        setNotification(initialNotifications);
    }, []);

    return(
        <NotificationContext.Provider 
            value={{notification, showNotifications, hideNotification}}>
            {children}
        </NotificationContext.Provider>
    )
}
 