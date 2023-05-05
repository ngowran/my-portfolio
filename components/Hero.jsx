import { BsStars } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';
import { BiCodeAlt } from "react-icons/bi";
import {GoLocation} from "react-icons/go";
import {MdSchool} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
    {
        icon: <BiCodeAlt className='inline m-auto' />,
        title: "Full Stack Developer"
    },
    {
        icon: <GoLocation className='inline m-auto' />,
        title: "Dublin, Ireland",
    },
    {
        icon: <MdSchool className='inline m-auto' />,
        title: "BSc Computer Science 2021-2025"
    }
]

export default function Hero() {
    return (
        <div >
            {/* <div className=" w-full h-full hero-pattern bg-cover bg-center flex justify-center items-center"> */}
            <div className="grid md:grid-cols-2 pt-20 mx-auto" id="hero">
                <motion.div
                    className="md:text-left text-center mx-auto max-md:p-5 max-md:pl-16 md:pt-12 pt-12">
                        <button className='hover:scale-110 border-white border-2 p-4 text-white mb-8 font-bold rounded-md shadow-xl shadow-pink-100  bg-gradient-to-r from-emerald-400 to-60% to-pink-400'>Welcome to my Portfolio</button>
                    <h1 className="md:text-5xl text-4xl text-black font-bold"><BsStars className='inline text-amber-400 text-xl align-top' />
                        Hi, I'm <span className="text-green-600">Niamh Gowran</span><BsStars className='inline text-amber-400 text-xl align-top' /></h1>
                    <br></br>
                    <div className='text-xl text-left md:px-5'>
                        {cards.map((card) => (
                            <div key="card" className='p-3 m-3 hover:bg-white hover:shadow-md rounded-md'>
                               <p className='inline'><span className='text-green-500'>{card.icon} </span>{card.title} </p>

                            </div>
                        ))} 
                    </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    className="align-top text-center  mx-auto">
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_g7ycvpvy.json" background="transparent" speed="1"
                        style={{ width: '90%', height: '90%' }}
                        loop autoplay></lottie-player>
                </motion.div>
            </div>
        </div>
    );
}