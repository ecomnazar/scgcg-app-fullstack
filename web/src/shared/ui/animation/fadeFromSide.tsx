import React from 'react'
import { motion } from "framer-motion"

interface Props {
    children: React.ReactNode;
    left?: boolean;
}

export const FadeFromSide: React.FC<Props> = ({ children, left = false }) => {
    return (
        <motion.div
            initial={{ x: left ? "-100%" : "100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    )
}
