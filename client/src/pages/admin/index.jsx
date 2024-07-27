import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { reset } from "../../features/admin/adminSlice";
import { toast } from "react-toastify";

import { DarkThemeToggle, Flowbite, useThemeMode } from "flowbite-react";
import SidebarComponent from "../../components/SidebarComponent";


const Admin = () => {
    const { mode, setMode } = useThemeMode()
    // console.log(mode)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { data, status } = useSelector(state => state.admin);

    useEffect(() => {
        setMode("auto")
        const dispatchReset = async () => {
            await new Promise(resolve => setTimeout(resolve, 2000))
            dispatch(reset())
        }

        navigate('/admin/dashboard')


        return () => {
            if (data && status === "succeeded") {
                toast.success(data.message)
                dispatchReset()
            }
        }

    }, [])

    return (
        <Flowbite>
            <div className="bg-[#e7e8e9] dark:bg-[#111827] min-h-screen">
                <SidebarComponent />
                <div className="lg:ms-[300px] p-10">
                    <span className="text-black dark:text-white block mb-5">Welcome {data.firstName} {data.lastName}</span>
                    <Outlet />
                </div>
            </div>
            <DarkThemeToggle className="fixed bottom-5 right-5" />
        </Flowbite>
    )
}

export default Admin