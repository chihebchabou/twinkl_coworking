import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./home/Footer";

const RootLayout = () => {
    return ( 
        <>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
     );
}
 
export default RootLayout;