import { Table } from "flowbite-react";
import { useFetchCustomers } from ".";

const CustomerList = () => {

    const {customers} = useFetchCustomers()

    return (
        <div className="">
            <h1 className='mb-6 w-full pb-4 text-2xl text-center border-gray-600 border-b dark:text-white'>Listes des inscriptions</h1>
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Nom</Table.HeadCell>
                        <Table.HeadCell>Phone</Table.HeadCell>
                        <Table.HeadCell>Date d&lsquo;inscription</Table.HeadCell>
                        <Table.HeadCell>Formation</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {customers && customers.map(({_id, firstName, lastName, phone, email, course, status, createdAt}) => (
                            <Table.Row key={_id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell> <div className="flex flex-col">
                                {firstName} {lastName}<span className='text-blue-600'>{email}</span>
                            </div>
                            </Table.Cell>
                            <Table.Cell>{phone}</Table.Cell>
                            <Table.Cell>{new Date(createdAt).toLocaleDateString('ar-TN', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: "2-digit"})}</Table.Cell>
                            <Table.Cell>{course}</Table.Cell>
                            <Table.Cell className="text-green-600">{status}</Table.Cell>
                        </Table.Row>
                        ))}

                    </Table.Body>

                </Table>
            </div>
        </div>

    )

    // return (
    //     <>
    //         <h1 className='mb-6 text-2xl'>Liste des inscriptions</h1>
    //         <div className="border border-gray-300 px-6 py-5 rounded-xl overflow-x-auto">
    //             <table className='users w-full text-left text-slate-600 snap-center'>
    //                 <tr className='md:text-lg'>
    //                     <th>Nom</th>
    //                     <th>Phone</th>
    //                     <th>Date d'inscription</th>
    //                     <th>Formation</th>
    //                     <th>Status</th>
    //                 </tr>
    //                 <tr className='text-gray-500'>
    //                     <td className='flex flex-col text-blue-600'>Jane Doe <span className=' text-sm'>jane@gmail.com</span> </td>
    //                     <td>11111111</td>
    //                     <td>10 Fev 2024</td>
    //                     <td>Design</td>
    //                     <td className='text-green-600'>Active</td>
    //                 </tr>

    //             </table>
    //         </div>
    //     </>
    // )
}

export default CustomerList