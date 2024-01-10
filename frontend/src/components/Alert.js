import React from 'react'
import { motion } from 'framer-motion';

function Alert() {
    return (
        <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
            type: "easeIn",
            duration: 1
        }}
        className="absolute -top-14 w-full p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-200 dark:bg-gray-800 dark:text-green-400" role="alert">
            <span className="font-medium">Success alert!</span> Your Message has been Sent
        </motion.div>

    )
}

export default Alert
