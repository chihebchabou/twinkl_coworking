import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className='hidden border lg:flex flex-col items-center bg-white md:w-[300px] h-screen p-2 fixed'>
            <div className='h-20 w-full border-b-2 flex justify-center items-center mb-4'>
                <h2>hi, John</h2>
            </div>
            <ul className='space-y-1'>
                <li className='p-3 hover:bg-slate-100 rounded-md'><Link to="/admin">Overview</Link></li>
                <li className='p-3 hover:bg-slate-100 rounded-md'><Link to="/admin/customers">Liste des inscriptions</Link></li>
                <li className='p-3 hover:bg-slate-100 rounded-md'><Link to="/admin/courses">Les cours</Link></li>
            </ul>
        </aside>
    )
}

export default Sidebar