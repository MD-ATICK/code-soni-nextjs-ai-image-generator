"use client"

import { handleDownload } from "@/utils/HandleDownload"


export default function ImageDownload({ imageUrl, imageName }: { imageUrl: string, imageName: string }) {

    return (
        
        <p onClick={() => handleDownload({ imageName, imageUrl })} className="bottom-2 lg:group-hover:translate-y-0 md:translate-y-14 duration-300 w-[95%] left-1/2 -translate-x-1/2 border-2 border-[#ffffff3d] text-center text-[11px] md:text-sm font-medium p-1 sm:p-2 py-2 absolute backdrop-blur-lg rounded-lg cursor-pointer bg-gradient-to-r from-[#ff029a0f] via-purple-800 to-[#0220ff31]">
            Download
        </p>
    )
}
