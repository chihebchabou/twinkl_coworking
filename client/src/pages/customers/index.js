import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomers, reset } from "../../features/customer/customerSlice";

export const useFetchCustomers = () => {
    const dispatch = useDispatch()
    const { customers, error, message, status } = useSelector(state => state.customer);

    useEffect (() => {
        dispatch(getAllCustomers())

        const dispatchReset = async () => {
            await new Promise(resolve => setTimeout(resolve, 3000))
            dispatch(reset())
        }

        dispatchReset()
    }, [dispatch]);

    return { customers }
}