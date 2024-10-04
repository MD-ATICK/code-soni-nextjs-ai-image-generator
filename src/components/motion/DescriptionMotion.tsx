"use client"
import { motion } from 'framer-motion'

interface props {
    size?: number
}
export default function DescriptionMotion({  }: props) {
    return (
        <motion.p

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
            transition={{ duration: 0.5 , delay : 0.3}}
            // style={{ fontSize: `${size || 15}px` }}
            className=' font-medium text-sm text-gray-500'
        >
            ImageAlx is an AI-powered image generator that helps you create stunning and realistic images for free. Ideal for creative professionals, marketers, and content creators in Bangladesh and beyond.
        </motion.p >
    )
}
