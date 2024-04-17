import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../features/admin/adminSlice";
import { Outlet, Navigate } from "react-router-dom"
import { toast } from "react-toastify";


const PrivateRoute = () => {
    const dispatch = useDispatch()
    const { data, status, error } = useSelector(state => state.admin);

    useEffect(() => {
        if (!data && status === "idle") {
            const request = async () => {
                // await new Promise(resolve => setTimeout(resolve, 2000))
                dispatch(profile())
            }
            request()
        }

        if (error && status === "failed") {
            toast.error(error.message)
        }
    }, [status]);

    if (status === "pending")
        return <div style={{ fontSize: 50 }}>Loading...</div>;

    if (data)
        return <Outlet />;

    if (status === "failed")
        return <Navigate to="/admin/login" />;
}

export default PrivateRoute