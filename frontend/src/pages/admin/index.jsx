import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { reset } from "../../features/admin/adminSlice";
import { toast } from "react-toastify";
import Sidebar from "../../components/Sidebar";
import CustomerList from "./CustomerList";
import Courses from "../courses/Courses";


const Dashboard = () => {
    const dispatch = useDispatch()

    const { data, status } = useSelector(state => state.admin);

    useEffect(() => {
        const dispatchReset = async () => {
            await new Promise(resolve => setTimeout(resolve, 2000))
            dispatch(reset())
        }


        return () => {
            if (data && status === "succeeded") {
                toast.success(data.message)
                dispatchReset()
            }
        }

    }, [])

    return (
        <div className="w-full">
            <Sidebar />
            <div className="lg:ms-[300px] p-10 h-full">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard