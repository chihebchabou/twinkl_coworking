import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { profile, reset } from "../../features/admin/adminSlice";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { data, status, error } = useSelector(state => state.admin);

    useEffect(() => {
        dispatch(profile())
    }, [])

    useEffect(() => {
        if (status == "failed") {
            navigate('/admin/login')
        }

        if (status == "succeeded") {
            setTimeout(() => dispatch(reset()), 5000)
        }
    }, [status]);
    return (
        <div>
            {status == "succeeded" && data.message}
            Dashboard
        </div>
    )
}

export default Dashboard