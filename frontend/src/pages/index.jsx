
import logo from '../assets/logo.png'

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Main