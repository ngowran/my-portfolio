import { BsStarFill } from 'react-icons/bs';
import { motion, useMotionValue, AnimatePresence } from "framer-motion"
import { useState } from 'react';
import jobs from './Job';
import Heading from './Heading';

export default function Experiance() {
    return (
        <div className="" id="experiance">
            <Heading title="Experiance" />
            <br></br>
            <div className="grid md:grid-cols-2">
                {jobs.map((job, index) => (
                    <div key={index} className="p-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.2,
                                    type: "spring",
                                    stiffness: 120,
                                    duration: 3,
                                    bounce: 0.5,
                                }}
                                whileHover={{ scale: 1.1 }} >
                                <div className=" bg-white rounded-lg shadow-sm h-auto p-3">
                                    <div className="p-3">
                                        <h2 className="text-4xl font-bold pb-2">{job.name}</h2>
                                        <p className="py-2">
                                            <span className="font-bold">{job.company}</span><span>    <BsStarFill className='inline text-amber-400' />   </span> <span className="text-red-400 font-semibold ">{job.date}</span>
                                        </p>

                                        {job.description.map((des, i) => (
                                            <div key={i}>
                                                <ul><li><span className='inline'>-  </span>{des}</li></ul>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                ))}
            </div>

        </div>
    );
}