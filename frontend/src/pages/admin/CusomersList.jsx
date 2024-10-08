import { getAllCustomers } from "@/utils/api";
import { Table } from "flowbite-react";
import { useLoaderData } from "react-router-dom";


const CustomersList = () => {

    const data = useLoaderData();
    console.log(data)

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
                        {data.length > 0 ? data.map(({_id, firstName, lastName, phone, email, course, status, createdAt}) => (
                            <Table.Row key={_id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell> <div className="flex flex-col">
                                {firstName} {lastName}<span className='text-blue-600'>{email}</span>
                            </div>
                            </Table.Cell>
                            <Table.Cell>{phone}</Table.Cell>
                            <Table.Cell>{new Date(createdAt).toLocaleDateString('fr-FR', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: "2-digit"})}</Table.Cell>
                            <Table.Cell>{course}</Table.Cell>
                            <Table.Cell className="text-green-600">{status}</Table.Cell>
                        </Table.Row>
                        )) : (<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell colSpan={5} className="text-yellow-600 text-center text-xl">Pas encore!</Table.Cell>
                        </Table.Row>)}

                    </Table.Body>

                </Table>
            </div>
        </div>

    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => getAllCustomers()

export default CustomersList