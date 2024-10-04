import ApplyMotion from "@/components/motion/ApplyMotion";
import WebTitle from "@/components/motion/WebTitle";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import Link from "next/link";


export default function Home() {

  return (
    <div className=" h-[calc(100vh-80px)] px-4 w-full md:max-w-[50%] gap-6 mx-auto text-center flex flex-col justify-center items-center">
      <WebTitle variant={'large'} />
      <ApplyMotion type='text'>
        ImageAlx is an AI-powered image generator that helps you create stunning and realistic images for free. Ideal for creative professionals, marketers, and content creators in Bangladesh and beyond.
      </ApplyMotion>
      <Link href={'/generate'} className=" bg-gray-200 dark:bg-white rounded-md">
        <Button className=" gap-x-1 bg-gradient-to-r from-pink-800 via-purple-700 to-blue-800 text-transparent bg-clip-text ">
          Generate Image
          {/* todo : learn this how work that. */}
          <svg width="0" height="0">
            <linearGradient id="gradient1" x1="100%" y1="5%" x2="0%" y2="100%">
              <stop stopColor="#ec4899" offset="0%" /> {/* Pink */}
              <stop stopColor="#8b5cf6" offset="50%" /> {/* Purple */}
              <stop stopColor="#3b82f6" offset="100%" /> {/* Blue */}
            </linearGradient>
          </svg>
          <Brain size={25} style={{ fill: 'url(#gradient1)' }} />
        </Button>
      </Link>
    </div>
  );
}
