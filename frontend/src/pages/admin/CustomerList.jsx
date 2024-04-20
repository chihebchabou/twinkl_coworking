import React from 'react'

const CustomerList = () => {
    return (
        <>
            <h1 className='mb-6 text-2xl'>Liste des inscriptions</h1>
            <div className="border border-gray-300 px-6 py-5 rounded-xl overflow-x-auto">
                <table className='users w-full text-left text-slate-600 snap-center'>
                    <tr className='md:text-lg'>
                        <th>Nom</th>
                        <th>Phone</th>
                        <th>Date d'inscription</th>
                        <th>Formation</th>
                        <th>Status</th>
                    </tr>
                    <tr className='text-gray-500'>
                        <td className='flex flex-col text-blue-600'>Jane Doe <span className=' text-sm'>jane@gmail.com</span> </td>
                        <td>11111111</td>
                        <td>10 Fev 2024</td>
                        <td>Design</td>
                        <td className='text-green-600'>Active</td>
                    </tr>

                </table>
            </div>
        </>
    )
}

export default CustomerList