import { BsStars } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';
import { motion, AnimatePresence } from "framer-motion";


export default function Hero() {
    return (
        <div className="grid md:grid-cols-2 pt-20 mx-auto" id="hero">
            <motion.div whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="md:text-left text-center mx-auto max-md:p-5 max-md:pl-16 pt-24">
                <h1 className="md:text-5xl text-4xl text-black font-bold"><BsStars className='inline text-amber-400 text-xl align-top' />
                    Hi, I'm <span className="text-red-400">Niamh Gowran</span><BsStars className='inline text-amber-400 text-xl align-top' /></h1>
                <br></br>
                <div className='text-xl text-left md:px-5'>
                    <p><BsStarFill className='inline text-red-400 mx-2' />Student Software Engineer</p>
                    <p><BsStarFill className='inline text-red-400 mx-2' />Based in Dublin, Ireland</p>
                    <p><BsStarFill className='inline text-red-400 mx-2' />Studying Computer Science at DCU</p>
                    <p><BsStarFill className='inline text-red-400 mx-2' />Full Stack Developer</p>
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
    );
}