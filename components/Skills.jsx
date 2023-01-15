import { motion, AnimatePresence } from "framer-motion";
import Heading from "./Heading";
import Css from "../public/skillsicons/css.png";
import React from "../public/skillsicons/reactjs.png";
import Python from "../public/skillsicons/python.png";
import Github from "../public/skillsicons/githubicon.png";
import Django from "../public/skillsicons/django.png";
import Html from "../public/skillsicons/html.png";
import Js from "../public/skillsicons/javascript.png";
import Mysql from "../public/skillsicons/mysql.png";
import Tailwind from "../public/skillsicons/tailwindcss.png";
import Firebase from "../public/skillsicons/firebase.png";
import Image from "next/image";


const skill = [
    {
        name: "React",
        icon: React,
    },
    {
        name: "JavaScript",
        icon: Js,
    },

    {
        name: "CSS",
        icon: Css,
    },
    {
        name: "Python",
        icon: Python,
    },
    {
        name: "Django",
        icon: Django,
    },
    {
        name: "MySQL",
        icon: Mysql,
    },
    {
        name: "GitHub",
        icon: Github,
    },
    {
        name: "Tailwind CSS",
        icon: Tailwind,
    },
    {
        name: "Firebase",
        icon: Firebase,
    },
    {
        name: "HTML",
        icon: Html,
    },
];

export default function Skills() {
    return (
        <div className="" id="skills">
            <Heading title="Skills" />
            <br></br>
            <div className="grid md:grid-cols-4 px-10 grid-cols-2">
                {skill.map((skillz, index) => (
                    <div key={index} className="">
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
                                }}>
                                <div className="p-3 relative  group">
                                    <motion.div whileHover={{ scale: 1.1 }} className=" w-5/6 h-full mx-auto relative hover:bg-text-color bg-white rounded-lg shadow-xl p-4 group-hover:opacity-10">
                                        <Image
                                            src={skillz.icon}
                                            className="h-20 w-20 mx-auto"
                                        >

                                        </Image>
                                    </motion.div>
                                    <div className="hidden group-hover:block font-bold absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black ">
                                        <p>{skillz.name}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div >
    );
}