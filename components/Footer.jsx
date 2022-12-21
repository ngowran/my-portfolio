import { FaHeart } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="text-center bg-red-200" id="footer">
            <div className='p-4'>
                <p>Made with <span> <FaHeart className='text-red-400 inline' /> </span> by Niamh Gowran</p>
            </div>
        </div>
    );
}