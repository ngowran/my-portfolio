import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { TfiEmail } from 'react-icons/tfi';
import { FaTwitterSquare } from 'react-icons/fa';

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
]

export default function Contact() {
    return (
        <div id="contact" className="p-6">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        Get in touch!
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        I'm always open to new opportunities and would love to hear from you!
                    </p>
                </div>

                <div className="mt-10 mb-12 mx-auto items-center justify-center flex">
                    <dl className="mx-auto space-y-10 md:grid md:grid-cols-2 md:gap-x-20 md:gap-y-12 md:space-y-0">
                        {features.map((feature, index) => (
                            <div key={index} className="relative">
                                <dt>
                                    <a href={feature.link} target="blank">
                                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-red-400 text-white">
                                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg font-medium leading-10 text-gray-900">{feature.name}</p>
                                    </a>
                                </dt>

                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}