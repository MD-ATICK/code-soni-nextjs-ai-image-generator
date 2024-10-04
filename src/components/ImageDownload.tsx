"use client"

import download from '@/assets/download.png'
import { handleDownload } from "@/utils/HandleDownload"
import Image from "next/image"


export default function ImageDownload({ imageUrl, imageName }: { imageUrl: string, imageName: string }) {

    return (
        <Image src={download} width={30} onClick={() => handleDownload({ imageName, imageUrl })} className=' cursor-pointer hover:scale-105 duration-100 shadow-lg p-1 rounded-md absolute bottom-2 right-2 backdrop-blur-lg bg-[#09090988]' alt="download" title="download" />
    )
}
