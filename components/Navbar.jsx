import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
    const navigation = [
        { name: "Experience", href: "/#experience", current: false },
        { name: "Skills", href: "/#skills", current: false },
        { name: "Projects", href: "/#projects", current: false },
        { name: "Contact", href: "/#contact", current: false },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <div>
            <Disclosure
                as="nav"
                className=" bg-gradient-to-r from-zinc-50 to-90% to-zinc-50 shadow-md fixed left-0 w-full z-10 top-0 "
            >
                {({ open }) => (
                    <>
                        
                        <div className="  mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-20 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-red-100">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8, rotate: 360 }}>
                                            <Link href="#hero">
                                                <Image
                                                    src={logo}
                                                    width={100}
                                                    height={100}
                                                    className="block md:h-14 h-20 max-sm:pt-4 w-auto rounded-full"
                                                    alt="Logo"
                                                />
                                            </Link>
                                        </motion.div>
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4 align-middle my-auto">
                                            {navigation.map((item) => (
                                                <motion.a
                                                    whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8, rotate: 180 }}
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? "" : "",
                                                        "px-7 py-4 rounded-md lg:text-md text-sm font-bold tracking-wide align-middle my-auto hover:text-text-color hover:scale-105"
                                                    )}
                                                    aria-current={item.current ? "page" : undefined}
                                                >
                                                    {item.name}
                                                </motion.a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-3 px-2 pt-4 pb-3 align-middle">
                                {navigation.map((item) => (

                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? "" : "",
                                            "block px-5 py-2 rounded-md text-base font-bold tracking-wide align-middle hover:text-text-color hover:scale-105"
                                        )}
                                        aria-current={item.current ? "page" : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>

                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div >
    );
}