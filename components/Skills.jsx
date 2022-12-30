import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";

const skill = [
    {
        name: "React",
        icon: FaReact,
    },
    {
        name: "JavaScript",
        icon: FaJsSquare,
    },

    {
        name: "CSS",
        icon: FaCss3,
    },
    {
        name: "Python",
        icon: FaPython,
    },
    {
        name: "C",
        icon: FaPython,
    },
    {
        name: "Django",
        icon: FaPython,
    },
    {
        name: "MySQL",
        icon: FaPython,
    },
    {
        name: "Git",
        icon: FaGitAlt,
    },
    {
        name: "GitHub",
        icon: FaGithub,
    },
    {
        name: "Bootstrap",
        icon: FaBootstrap,
    },
    {
        name: "Tailwind",
        icon: FaBootstrap,
    },
    {
        name: "React Native",
        icon: FaBootstrap,
    },
    {
        name: "HTML",
        icon: FaHtml5,
    },
];

export default function Skills() {
    return (
        <div className="" id="skills">
            <div>
                <h1 className="text-6xl text-center pt-16 font-bold">Skills</h1>
            </div>
            <br></br>
            <div className="grid md:grid-cols-4 grid-cols-2">
                {skill.map((skillz, index) => (
                    <div key={index}>
                        <div className="p-6 relative  group">
                            <div className=" w-5/6 h-full mx-auto relative hover:bg-red-600 bg-white rounded-lg shadow-xl p-6 group-hover:opacity-10">
                                <skillz.icon className="h-20 w-20 mx-auto text-red-400" />
                            </div>
                            <div className="hidden group-hover:block font-bold absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black">
                                <p>{skillz.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}