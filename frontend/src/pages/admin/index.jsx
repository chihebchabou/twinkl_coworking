import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../features/admin/adminSlice";
import { toast } from "react-toastify";


const Dashboard = () => {
    const dispatch = useDispatch()

    const { data } = useSelector(state => state.admin);

    useEffect(() => {
        dispatch(reset())

        if (data) {
            toast.success(data.message)
        }

    }, [])

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard