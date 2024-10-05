import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { GetUsers } from "@/lib/getUsers";
import Image from "next/image";

import { currentUserServer } from "@/lib/currentUserServer";
import { Post, User } from '@prisma/client';
import moment from 'moment';
import Link from "next/link";

interface ExtendedUser extends User {
    posts: Post[];  // Extending the user to include posts
}

export default async function AdminPage() {

    const response = await GetUsers()
    const users = JSON.parse(response)

    const user = await currentUserServer()

    if (!user) {
        return <div className=" text-sm text-gray-400 p-4 flex flex-col gap-4">
            <p>you are not authorized!</p>
            <Link href={'/'} className=" cursor-pointer text-sky-500 underline">Go to home</Link>
        </div>
    }
    if (user.email !== process.env.NEXT_ACCESS_EMAIL) {
        return <div className=" text-sm text-gray-400 p-4 flex flex-col gap-4">
            <p>you cannot access this page!</p>
            <Link href={'/'} className=" cursor-pointer text-sky-500 underline">Go to home</Link>
        </div>
    }

    return (
        <div className=" p-0 md:p-[5vw] overflow-x-auto scrollBarHide container mx-auto">
            <Table className="">
                <TableHeader>
                    <TableRow>
                        <TableHead className=" text-center">IMAGE</TableHead>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="text-right">POSTS</TableHead>
                        <TableHead className="text-right">CREATED_AT</TableHead>
                        <TableHead className="text-right">ACTION</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users?.map((user: ExtendedUser) => (
                        <TableRow key={user.id}>
                            <TableCell className=" flex justify-center items-center">
                                <Image src={user.image!} height={30} width={30} className=" rounded-full hover:scale-105 duration-100 object-cover" alt={user.name!} title={user.name!} />
                            </TableCell>
                            <TableCell className="font-medium text-xs sm:text-sm">{user.id}</TableCell>
                            <TableCell className=" whitespace-nowrap font-medium">{user.name}</TableCell>
                            <TableCell className=" text-xs sm:text-sm font-medium">{user.email}</TableCell>
                            <TableCell className="text-center font-semibold text-xs sm:text-sm">{user.posts.length || 0}</TableCell>
                            <TableCell className='text-right text-xs sm:text-sm whitespace-nowrap'>{moment(user?.createdAt || new Date()).startOf('minutes').fromNow()}</TableCell>
                            <TableCell className=" text-xs sm:text-sm h-10 py-1 font-medium">
                                <div className=" h-full w-[80%] ml-auto mr-1 bg-gray-800 hover:bg-gray-700 rounded-md">
                                    <Link href={`/admin/${user.id}`} className='h-full w-full flex justify-center items-center'>Show</Link>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </div>
    )
}
