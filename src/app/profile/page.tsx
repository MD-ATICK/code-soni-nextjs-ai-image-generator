import ImageDownload from "@/components/ImageDownload"
import ProfileLoading from "@/components/ProfileLoading"
import { currentUserServer } from "@/lib/currentUserServer"
import Image from "next/image"

export default async function ProfilePage() {

    const user = await currentUserServer()

    if (!user) {
        return <ProfileLoading />
    }

    return (
        <main className=" p-[2vw] gap-3 md:gap-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                user?.posts.map(post => (
                    <div key={post.id} className=" relative overflow-hidden  group shadow-lg w-full aspect-square">
                        <Image src={post.url} placeholder="blur" blurDataURL={post.url} fill sizes="150px" className=" object-cover rounded-xl" alt={post.prompt} title={post.prompt} />
                        <div className=" w-[95%] left-1/2 gap-1 rounded-lg flex items-center justify-between backdrop-blur-lg p-3 bg-[#0000007b] -translate-x-1/2 absolute top-2">
                            <p className=" text-[10px] font-medium text-gray-200">{post.prompt.slice(0, 20) + (post.prompt.length > 20 ? '...' : '')}</p>
                            {/* <p className=" text-gray-400 text-[10px] font-medium">{moment(post.createdAt).startOf('minutes').fromNow()}</p> */}
                        </div>
                        <ImageDownload imageUrl={post.url} imageName={post.prompt} />
                    </div>
                ))
            }
        </main>
    )
}
