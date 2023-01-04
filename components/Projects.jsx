import enactus from "../public/enactusdcusite.png";
import renu from "../public/renu-ireland.png";
import timelogger from "../public/timelogger.png";
import Image from "next/image";
import Link from "next/link";
import Heading from "./Heading";

export const projectData = [
    {
        name: "Enactus DCU",
        src: enactus,
        url: "https://www.enactusdcu.com",
        technologies: "NextJS, Tailwind CSS",
    },
    {
        name: "Renu Ireland",
        src: renu,
        url: "https://www.renu-ireland.com",
        technologies: "ReactJS, MaterialUI, Django, MySQL DB, Firebase, Bootstrap",
    },
    {
        name: "Enactus DCU Timelogger",
        src: timelogger,
        url: "https://www.github.com/ngowran/Time-Logger",
        technologies: "ReactJS, MaterialUI, Django, MySQL DB, Firebase, Bootstrap",
    },
];

export default function Projects() {
    return (
        <div className="" id="projects">
            <Heading title="Projects" />
            <div className="grid md:grid-cols-2 grid-cols-1 pt-4">
                {projectData.map((project) => (
                    <div className="p-6">
                        <div className="relative flex items-center justify-center  hover:bg-red-300 shadow-xl rounded-xl group">
                            <Image
                                className="rounded-xl group-hover:opacity-10"
                                src={project.src}
                                alt="{project.name}"
                            />
                            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                <h3 className="md:text-2xl text-xl font-bold text-center">
                                    {project.name}
                                </h3>
                                <p className="pb-4 pt-2 text-center">{project.technologies}</p>
                                <Link href={project.url} passHref={true} target={"_blank"}>
                                    <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                                        More Info
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}


                <div className="relative ">
                </div>
            </div>
        </div>
    );
}
