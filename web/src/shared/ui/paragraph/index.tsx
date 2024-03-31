import clsx from 'clsx';
import React from 'react'
import { motion } from "framer-motion"

interface Props {
    children?: React.ReactNode
    className?: string;
}

export const Paragraph: React.FC<Props> = ({ children, className }) => {
    return <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}><p className={clsx('font-medium mb-8 text-[19px]', className)}>{children}</p></motion.div>
}
