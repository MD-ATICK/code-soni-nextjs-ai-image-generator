
import { Skeleton } from './ui/skeleton'

export default function ProfileLoading() {
    return (
        <div className='p-[2vw] h-full w-full gap-3 md:gap-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <Skeleton className=' w-full aspect-square' />
            <Skeleton className=' w-full aspect-square' />
            <Skeleton className=' w-full aspect-square' />
            <Skeleton className=' w-full aspect-square' />
            <Skeleton className=' w-full aspect-square' />
            <Skeleton className=' w-full aspect-square' />
            <Skeleton className=' w-full aspect-square' />
            <Skeleton className=' w-full aspect-square' />
        </div>
    )
}
