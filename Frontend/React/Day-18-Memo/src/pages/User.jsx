
import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard';
import { axiosInstance } from '../config/axiosInstance';

export const User = () => {

    const [userData, setUsersdata] = useState([]);
    const [isloding, setIsloding] = useState(true);
    let getuserData = async () => {
        try {
            let res = await axiosInstance.get("/users")
            setUsersdata(res.data)
            setIsloding(false)

        } catch (error) {

        }

    }
   


    useEffect(() => { getuserData() }, [])

    return (
        <div className="min-h-screen bg-gray-50 p-6">

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Users
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Manage and view all registered users
                    </p>
                </div>

                {/* Total Users */}
                <div className="rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">
                    <p className="text-xs font-medium text-gray-500">
                        Total Users
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                        {userData.length}
                    </p>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

                <div className="overflow-x-auto">
                    <table className="w-full">

                        <thead className="border-b border-gray-200 bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-gray-500">
                                    User
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-gray-500">
                                    Email
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-gray-500">
                                    Username
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-gray-500">
                                    Phone
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-gray-500">
                                    ID
                                </th>
                            </tr>
                        </thead>
                        {
                            isloding ? (<div className='p-4 text-center w-full'>
                                Loding...
                            </div>) : (
                                <tbody className="divide-y divide-gray-100">
                                    {userData.map((user) => (
                                        <UserCard user={user} key={user.id} isloding={isloding} />
                                    ))}

                                </tbody>)
                        }



                    </table>

                </div>
            </div>
        </div >
    )
}
