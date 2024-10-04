"use client"
import { motion } from 'framer-motion'

interface props {
    variant: "large" | "medium",
    title?: string
}
export default function WebTitle({ variant, title }: props) {
    return (
        <motion.h1

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
            className={`font-bold text-2xl ${variant === 'large' ? 'md:text-4xl' : 'md:text-3xl'} py-1 bg-gradient-to-r from-pink-700 via-purple-600 to-blue-700 text-transparent bg-clip-text`}
        >
            {title || 'ImageAlx'}
        </motion.h1>
    )
}
