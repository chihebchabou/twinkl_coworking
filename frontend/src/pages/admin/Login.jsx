import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, profile, reset } from "../../features/admin/adminSlice";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { data, status, error } = useSelector(state => state.admin);

    const onFormSubmitted = (e) => {
        e.preventDefault();
        const { email, password } = Object.fromEntries(new FormData(e.target));
        dispatch(login({ email, password }))
    }

    useEffect(() => {
        if (!data && status === "idle") {
            const request = async () => {
                // await new Promise(resolve => setTimeout(resolve, 5000))
                dispatch(profile())
            }
            request();
        }

        if (error !== null && error.status === 400 && status === "failed") {
            toast.error(error.message)
        }

        if (data) {
            navigate('/admin')
        }



    }, [status, data, error]);


    if (status == "pending") {
        return <div style={{ fontSize: 100 }}>Loading...</div>
    }



    return status === "failed" && (
        <main className='flex flex-col h-screen w-full justify-center items-center px-4'>
            <form onSubmit={onFormSubmitted} className='border border-gray-600 rounded-md w-[500px] lg:w-[400px]'>
                <h1 className='text-center p-5 bg-sky-700 text-white'>Administration</h1>
                <div className='p-5 space-y-3'>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" required className='p-2 outline-none rounded-md border border-black focus:border-sky-500' />
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required className='p-2 outline-none rounded-md border border-black focus:border-sky-500' />
                    </div>
                    <div className='flex justify-end'>
                        <button className="bg-sky-900 hover:bg-sky-500 block text-white px-4 py-2 rounded-md">Login {status == "pending" && "..."}</button>
                    </div>
                </div>
            </form>
        </main>
    )
}




export default Login