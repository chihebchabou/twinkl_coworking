import { createContext, useContext } from "react";

const alertContext = createContext();

export const useAlert = () => useContext(alertContext);

export default alertContext;