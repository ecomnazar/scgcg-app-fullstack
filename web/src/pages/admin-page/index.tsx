import { getUsersApi } from '@/shared/api/getUsersApi'
import clsx from 'clsx'
import React from 'react'

interface IUser {
    id: number,
    email: string,
    fullname: string,
    region: string,
    gender: string,
    createdAt: string,
    updatedAt: string
}

export const AdminPage = () => {
    const [users, setUsers] = React.useState<IUser[]>([])

    const getUserData = async () => {
        const data = await getUsersApi()
        setUsers(data)
    }

    React.useEffect(() => {
        getUserData()
    }, [])
    console.log(users);


    return (
        <div className=''>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table
                                className="min-w-full text-center text-sm font-light text-surface dark:text-white">
                                <thead
                                    className="bg-[#F9FAFB] text-[14px] text-[#667085]">
                                    <tr>
                                        <th scope="col" className="font-medium text-left px-6 py-4">Id</th>
                                        <th scope="col" className="font-medium text-left px-6 py-4">Username</th>
                                        <th scope="col" className="font-medium text-left px-6 py-4">Email</th>
                                        <th scope="col" className="font-medium text-left px-6 py-4">Region</th>
                                        <th scope="col" className="font-medium text-left px-6 py-4">Gender</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users?.map((user) => {
                                        const { id, fullname, email, region, gender } = user
                                        return <tr key={id} className="border-b border-neutral-200 dark:border-white/10">
                                            <td className="whitespace-nowrap text-left text-[#667085] px-6 py-4">{id}</td>
                                            <td className="whitespace-nowrap text-left text-[#667085] px-6 py-4">{fullname}</td>
                                            <td className="whitespace-nowrap text-left text-[#667085] px-6 py-4">{email}</td>
                                            <td className="whitespace-nowrap text-left text-[#667085] px-6 py-4">{region}</td>
                                            <td className="whitespace-nowrap text-left text-[#667085] px-6 py-4">
                                                <div className={clsx('w-6 h-6 rounded-full', {
                                                    'bg-blue-300': gender === 'male',
                                                    'bg-red-300': gender === 'female',
                                                    'bg-gray-300': gender === 'other'
                                                })}></div>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
