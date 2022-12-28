import { BsStars } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';

export default function Hero() {
    return (
        <div className="grid md:grid-cols-2 pt-20 mx-auto p-auto " id="hero">
            <div className="text-left p-5">

                <h1 className="text-5xl  text-black font-bold"><BsStars className='inline text-amber-400 text-xl align-top' />
                    Hi, I'm <span className="text-red-400">Niamh Gowran</span><BsStars className='inline text-amber-400 text-xl align-top' /></h1>

                <br></br>
                <p><BsStarFill className='inline text-red-400 mx-2' />Student Software Engineer</p>
                <p><BsStarFill className='inline text-red-400 mx-2' />Based in Dublin, Ireland</p>
                <p><BsStarFill className='inline text-red-400 mx-2' />Studying Computer Science at DCU</p>
                <p><BsStarFill className='inline text-red-400 mx-2' />Full Stack Developer</p>

            </div>
            <div className="">

            </div>
        </div>
    );
}