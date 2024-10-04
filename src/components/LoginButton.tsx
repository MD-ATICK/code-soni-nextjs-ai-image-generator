import { currentUserServer } from '@/lib/currentUserServer';
import Image from 'next/image';
import Link from 'next/link';
import LoginBtnClient from './LoginBtnClient';
import LogoutBtnClient from './LogoutBtnClient';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';


export default async function LoginButton() {

    const user = await currentUserServer()


    return (
        <div>
            {/* {
                muted && initialLoading &&
                <PulseLoader color=' white' size={12} />
            } */}
            {
                !user && <LoginBtnClient />
            }
            {
                user && <div className='flex items-center gap-x-2'>
                    <DropdownMenu>
                        <DropdownMenuTrigger className=' outline-none'>
                            <Image src={user.image!} width={40} height={40} blurDataURL={user.image!} placeholder='blur' className=' rounded-full cursor-pointer shadow-lg' alt={user.name || 'John Due'} title={user.name || 'John Due'} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end' className=' bg-black '>
                            <DropdownMenuItem>
                                <Link href={'/profile'} className=' h-full w-full'>
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            {
                                user.email === process.env.NEXT_ACCESS_EMAIL &&
                                <DropdownMenuItem>
                                    <Link href={'/admin'} className=' h-full w-full'>
                                        Dashboard
                                    </Link>
                                </DropdownMenuItem>
                            }
                            <LogoutBtnClient />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            }
        </div>
    )
}
