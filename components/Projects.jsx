import Image from "next/image";
import Link from "next/link";
import Heading from "./Heading";
import projectData from "./ProjectData";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {

    return (
        <div className="" id="projects">
            <Heading title="Projects" />
            <div className="grid lg:grid-cols-2 grid-cols-1 p-4">
                {projectData.map((project) => (
                    <div className="p-4 h-5/6 w-5/6 mx-auto">
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
                                <motion.div whileTap={{ scale: 0.8 }} className="relative flex items-c enter justify-center  hover:bg-accent-color shadow-xl rounded-xl group">
                                    <Image
                                        className="rounded-xl group-hover:opacity-10"
                                        src={project.src}
                                        alt={project.name}
                                    />
                                    <motion.div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                        <h3 className="md:text-2xl text-xl font-bold text-center">
                                            {project.name}
                                        </h3>
                                        <p className="pb-4 pt-2 text-center">{project.technologies}</p>
                                        <motion.div whileHover={{ bounce: 30, scale: 1.2 }}>
                                            <Link href={project.url} passHref={true} target={"_blank"}>
                                                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                                                    Check it out!
                                                </p>
                                            </Link>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div >

                ))
                }
            </div >
        </div >
    );
}
