"use client"
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';


export default function LoginButton() {

    const { data, status } = useSession()
    const [initialLoading, setInitialLoading] = useState(true);
    const [muted, setMuted] = useState(false);
    const router = useRouter()

    useEffect(() => {
        if (status !== 'loading') {
            setInitialLoading(false)
        }
    }, [status, data]);


    useEffect(() => {
        setMuted(true)
    }, []);

    return (
        <div>
            {
                muted && initialLoading &&
                <PulseLoader color=' white' size={12} />
            }
            {
                !initialLoading && !data?.user &&
                <Button onClick={() => signIn('google', { callbackUrl: '/generate' })}>Login</Button>
            }
            {
                !initialLoading && data?.user && <div className='flex items-center gap-x-2'>
                    <DropdownMenu>
                        <DropdownMenuTrigger className=' outline-none'>
                            <Image src={data.user.image!} width={40} height={40} blurDataURL={data.user.image!} placeholder='blur' className=' rounded-full cursor-pointer shadow-lg' alt={data.user.name || 'John Due'} title={data.user.name || 'John Due'} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end' className=' bg-black '>
                            <DropdownMenuItem onClick={() => router.push('/profile')}>
                                Profile
                            </DropdownMenuItem>
                            {
                                String(data?.user?.email) === String(process.env.NEXT_ACCESS_EMAIL) ?
                                    <DropdownMenuItem onClick={() => router.push('/admin')}>
                                        Dashboard
                                    </DropdownMenuItem> : null
                            }
                            <DropdownMenuItem onClick={async () => await signOut({ redirectTo: '/' })}>
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            }
        </div>
    )
}
