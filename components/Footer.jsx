import { FaHeart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
    return (
        <div className="text-center shadow-inner bg-red-200" id="footer">
            <div className='p-4'>
                <motion.p whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.4 }} >Made with
                    <span> <FaHeart className='text-red-400 inline' /> </span> by Niamh Gowran</motion.p>
            </div>
        </div>
    );
}