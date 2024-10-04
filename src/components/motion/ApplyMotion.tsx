"use client"
import { motion } from 'framer-motion'
import { ReactNode } from 'react'


interface props {
    children: ReactNode
    type: 'image' | 'text'  | 'button'
}
export default function ApplyMotion({ children, type }: props) {
    return (
        <>
            {
                type === 'text' &&
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
                    transition={{ duration: 0.5, delay: 0.3 }}
                    // style={{ fontSize: `${size || 15}px` }}
                    className=' font-medium text-sm text-gray-500'
                >
                    {children}
                </motion.p >
            }
            {
                type === 'image' &&
                <motion.image

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
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {children}
                </motion.image >
            }

        </>
    )
}
