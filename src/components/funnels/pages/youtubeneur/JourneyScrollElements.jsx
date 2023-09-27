import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function JourneyScrollElements({ details, index }) {
    const { ref, inView } = useInView();
    const lefttoRight = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    }
    const righttoLeft = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    }
    return (
        <div ref={ref} className='flex flex-col md:flex-row items-center justify-center w-full h-full gap-5 md:gap-28'>
            <motion.div
                variants={index % 2 === 0 ? lefttoRight : righttoLeft}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 0.6 }}
                className={`flex flex-col items-center justify-center flex-1 ${index % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}>
                <img src={details.image.src} alt={details.image.alt} className='w-full object-contain h-32 md:h-80' />
            </motion.div>
            <motion.div
                variants={index % 2 === 0 ? righttoLeft : lefttoRight}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 0.6 }}
                className={`flex flex-col justify-center flex-1 gap-3 md:gap-12 ${index % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
                <h2 className='text-2xl md:text-5xl text-center md:text-left font-bold text-green-700'>Challenge {index + 1}</h2>
                <div className='flex flex-col w-full md:gap-2'>
                    <h3 className='text-xl md:text-4xl text-center md:text-left font-semibold text-neutral-300'>{details.title}</h3>
                    <p className='text-base md:text-xl text-center md:text-left text-white'>{details.description}</p>
                </div>
            </motion.div>
        </div>
    )
}
