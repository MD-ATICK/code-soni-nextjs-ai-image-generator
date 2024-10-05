import ImageDownload from "@/components/ImageDownload"
import { currentUserServer } from "@/lib/currentUserServer"
import { getSingleUser } from "@/lib/getSingleUser"
import moment from 'moment'
import Image from "next/image"
import Link from "next/link"

export default async function SingleUser({ params: { id } }: { params: { id: string } }) {

  const user = await getSingleUser(id)



  const me = await currentUserServer()

  if (!me) {
    return <div className=" text-sm text-gray-400 p-4 flex flex-col gap-4">
      <p>you are not authorized!</p>
      <Link href={'/'} className=" cursor-pointer text-sky-500 underline">Go to home</Link>
    </div>
  }
  if (me.email !== process.env.NEXT_ACCESS_EMAIL) {
    return <div className=" text-sm text-gray-400 p-4 flex flex-col gap-4">
      <p>you cannot access this page!</p>
      <Link href={'/'} className=" cursor-pointer text-sky-500 underline">Go to home</Link>
    </div>
  }

  return (
    <div className=" container mx-auto p-[3vw]">
      <div className=" space-y-2 ">
        <p className=" text-sm font-medium">Id : {user?.id}</p>
        <p className=" text-sm font-medium">Name : {user?.name}</p>
        <p className=" text-sm font-medium">Email : {user?.email}</p>
        <p className=" text-sm font-medium">CreatedAt : {moment(user?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
      </div>
      <div className=" mt-6">
        <h1 className=" font-semibold text-xl text-sky-500">Generated Images({user?.posts.length})</h1>
        <div className=" py-4 gap-3 md:gap-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            user?.posts.map(post => (
              <div key={post.id} className=" relative overflow-hidden  group shadow-lg w-full aspect-square">
                <Image src={post.url} placeholder="blur" blurDataURL={post.url} fill sizes="150px" className=" object-cover rounded-xl" alt={post.prompt} title={post.prompt} />
                <div className=" w-[96%] left-1/2 gap-1 rounded-lg flex items-center justify-between backdrop-blur-lg p-2 md:p-3 bg-[#0000007b] -translate-x-1/2 absolute top-2">
                  <p className=" text-[10px] font-medium text-gray-200">{post.prompt.slice(0, 55) + (post.prompt.length > 40 ? '...' : '')}</p>
                </div>
                <ImageDownload imageUrl={post.url} imageName={post.prompt} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
