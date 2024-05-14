import { motion, AnimatePresence } from "framer-motion";
import Heading from "./Heading";
import Css from "../public/skillsicons/css.png";
import React from "../public/skillsicons/reactjs.png";
import Python from "../public/skillsicons/python.png";
import Github from "../public/skillsicons/githubicon.png";
import Django from "../public/skillsicons/django.png";
import Html from "../public/skillsicons/html.png";
import Next from "../public/skillsicons/nextjs.png";
import Ts from "../public/skillsicons/ts.png";
import Mysql from "../public/skillsicons/mysql.png";
import Tailwind from "../public/skillsicons/tailwindcss.png";
import Firebase from "../public/skillsicons/firebase.png";
import AspNet from "../public/skillsicons/aspnet.jpg";
import Flask from "../public/skillsicons/flask.png";
import Cplus from "../public/skillsicons/c++.jpg";
import Influx from "../public/skillsicons/influx.png";
import Image from "next/image";
import 'flowbite';
import { useState, useEffect } from 'react';

const categories = [
    {
        title: "Frontend",
        bgimage: "bg-gradient-to-r from-stone-50 to-90% to-emerald-50",
        skill: [
            {
                name: "TypeScript",
                icon: Ts,
            },
            {
                name: "Next.js",
                icon: Next,
            },
            {
                name: "React",
                icon: React,
            },
            {
                name: "HTML",
                icon: Html,
            },
            {
                name: "CSS",
                icon: Css,
            },
            {
                name: "Tailwind CSS",
                icon: Tailwind,
            },
            ],
    },
    {
        title: "Backend",
        bgimage: "bg-gradient-to-r from-stone-50 to-90% to-emerald-50",
        skill: [
            {
                name: "",
                icon: Cplus,
            },
            {
                name: "",
                icon: AspNet,
            },
            {
                name: "",
                icon: Flask,
            },
            {
                name: "",
                icon: Django,
            },
        ],
    },
    {
        title: "Database",
        bgimage: "bg-gradient-to-r from-stone-50 to-90% to-emerald-50",
        skill: [
            {
                name: "",
                icon: Mysql,
            },
            {
                name: "",
                icon: Influx,
            }
        ],
    },
    {
        title: "Version Control",
        bgimage: "bg-gradient-to-r from-stone-50 to-90% to-emerald-50",
        skill: [
            {
                name: "GitHub",
                icon: Github,
            },
        ],
    },
];


export default function Skills() {
    const [activeModal, setActiveModal] = useState(null);

    const showModal = (title) => {
        setActiveModal(title);
    };
    
    const hideModal = () => {
        setActiveModal(null);
    };

    return (
        <div className="p-3" id="skills">
            <Heading title="Skills" />
            <br></br>
            <div className="grid md:grid-cols-4 gap-5 items-start">
                {categories.map((category, index) => (
                    <div className="p-4 m-auto text-center w-2/3 h-full shadow-lg bg-white rounded-md">
                        <p className="text-center text-2xl mb-2 font-bold m-0">{category.title}</p>
                        <button onClick={() => showModal(category.title)} type="button" className="bg-gradient-to-r from-pink-400 to-green-400 hover:from-green-400 hover:to-pink-400 text-white font-bold py-2 px-4 m-auto rounded-full mt-2">
                            View
                        </button>
                        <div id={`defaultModal-${category.title}`} tabindex="-1" aria-hidden="true" className={`fixed top-0 bottom-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center ${activeModal === category.title ? 'block' : 'hidden'}`}>
                            <div class="relative w-full max-w-2xl max-h-full">
                                <div class=" flex flex-col w-full p-4 bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                <button onClick={hideModal} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" id="closeModel" >
                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                    <p className="text-center font-bold text-3xl p-3">{category.title}</p>
                                    <div className="grid grid-cols-3">
                                    {category.skill.map((skillz, index) => (
                                        <div key={index} >
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
                                                    className="grid-cols-1 my-2">
                                                        <Image src={skillz.icon} className="h-20 w-20 mx-auto"></Image>
                                                        <p className="text-center font-bold">{skillz.name}</p>
                                                   
                                                </motion.div>
                                           
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    ))}
                
            </div>
            {/*}
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
            {*/}
        </div >
    );
}