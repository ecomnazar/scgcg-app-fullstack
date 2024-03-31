import React from 'react'
import { motion } from "framer-motion"

interface Props {
    children?: React.ReactNode
}

export const FadeIn: React.FC<Props> = ({ children }) => {
    return <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}>{children}</motion.div>
}
