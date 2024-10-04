"use client"
import logo from "@/../public/logo.png";
import { motion } from 'framer-motion';
import Image from "next/image";

export default function ImageMotion() {
    return (
        <motion.div

            initial={{
                opacity: 0,
                scale: 0.95,
                filter: 'blur(5px)',
            }}
            animate={{
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
            }}
            transition={{ duration: 0.5 }}
            className={``}
        >
            <div>
            <Image src={logo} height={40} className=" hidden sm:block" alt="ImageAlx - AI Image Generator | Create Stunning Images with AI" title="ImageAlx - AI Image Generator | Create Stunning Images with AI" />
            <Image src={logo} height={35} className=" sm:hidden block" alt="ImageAlx - AI Image Generator | Create Stunning Images with AI" title="ImageAlx - AI Image Generator | Create Stunning Images with AI" />

            </div>
        </motion.div>
    )
}
