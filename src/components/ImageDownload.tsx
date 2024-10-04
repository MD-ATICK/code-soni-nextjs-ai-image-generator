"use client"

import download from '@/assets/download.png'
import { handleDownload } from "@/utils/HandleDownload"
import Image from "next/image"


export default function ImageDownload({ imageUrl, imageName }: { imageUrl: string, imageName: string }) {

    return (
        <>
            <button aria-label="download-button" onClick={() => handleDownload({ imageName, imageUrl })} className=" hidden bottom-2 lg:group-hover:translate-y-0 md:translate-y-14 duration-300 w-[95%] left-1/2 -translate-x-1/2 border-2 border-[#ffffff3d] text-center text-[11px] md:text-sm font-medium p-1 sm:p-2 py-2 absolute backdrop-blur-lg rounded-lg cursor-pointer bg-gradient-to-r from-[#ff029a0f] via-purple-800 to-[#0220ff31]">
                Download
            </button>
            <Image src={download} width={30} onClick={() => handleDownload({ imageName, imageUrl })} className=' cursor-pointer hover:scale-105 duration-100 shadow-lg p-1 rounded-md absolute bottom-2 right-2 backdrop-blur-lg bg-[#09090988]' alt="download" title="download" />
        </>
    )
}
