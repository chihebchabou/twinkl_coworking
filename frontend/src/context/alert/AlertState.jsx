/* eslint-disable react/prop-types */

import { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";

const AlertState = props => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    // Set Alert
    const setAlert = (msg, type) => {
        dispatch({ type : 'SET_ALERT', payload: {msg, type}});
        setTimeout(() => dispatch({type: "REMOVE_ALERT"}), 5000);
    };

    return <AlertContext.Provider value={{
        alert: state,
        setAlert
    }}>
        {props.children}
    </AlertContext.Provider>
}

export default AlertState