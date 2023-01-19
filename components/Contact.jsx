import { BsLinkedin } from "react-icons/bs";
import { TfiEmail } from 'react-icons/tfi';
import { FaGithub } from 'react-icons/fa';
import Heading from './Heading';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
    {
        name: 'Linkedin',
        link:
            'https://www.linkedin.com/in/niamh-gowran-6b3b24221/',
        icon: BsLinkedin,
    },
    {
        name: 'Email',
        link:
            'mailto:nsgowran@gmail.com',
        icon: TfiEmail,
    },
    {
        name: "GitHub",
        link: "https://github.com/ngowran/",
        icon: FaGithub,
    }
]

export default function Contact() {
    return (
        <div id="contact" className="py-16">
            <div className="mx-auto max-w-7xl px-2 ">
                <Heading title="Get in Touch!" />
                <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                    I'm always open to new opportunities and would love to hear from you!
                </p>
            </div>

            <div className="mt-10 mb-12 mx-auto items-center justify-center flex">
                <dl className="mx-auto space-y-10 md:grid md:grid-cols-3 md:gap-x-20 md:gap-y-12 md:space-y-0">
                    {features.map((feature, index) => (
                        <div key={index} className="relative">
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
                                    <dt>
                                        <a href={feature.link} target="blank">
                                            <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-text-color text-white">
                                                <feature.icon className="h-6 w-6" aria-hidden="true" />
                                            </div>
                                            <p className="ml-16 text-lg font-medium leading-10 text-gray-900">{feature.name}</p>
                                        </a>
                                    </dt>
                                </motion.div>
                            </AnimatePresence>

                        </div>
                    ))}
                </dl>
            </div>
        </div>

    )
}