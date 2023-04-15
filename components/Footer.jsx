import { FaHeart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
    return (
        <div className="text-center shadow-inner p-3 bg-gradient-to-r from-stone-50 to-60% to-emerald-50" id="footer">
            <div className='grid grid-cols-3'>
                <div className='p-4 m-auto'>
                    <p>Student developer portoflio</p>
                </div>
                <div className='p-4'>
                    <motion.p whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.4 }} >Made with
                        <span> <FaHeart className='text-red-400 inline' /> </span> by Niamh Gowran</motion.p>

                </div>
                <div className='p-4 m-auto'>
                    <p>Computer Science Student</p>
                </div>



            </div>



        </div>
    );
}