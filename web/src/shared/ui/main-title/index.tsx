import clsx from 'clsx';
import React from 'react'
import { motion } from "framer-motion"


interface Props {
    children?: React.ReactNode
    className?: string;
}

export const MainTitle: React.FC<Props> = ({ children, className }) => {
    return <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}>
        <h2 className={clsx('text-primary text-[35px] font-semibold pb-2 border-b-2 border-primary/30 mb-4', className)}>{children}</h2>
    </motion.div>
}
