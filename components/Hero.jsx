import { BsStars } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';


export default function Hero() {
    return (
        <div className="grid md:grid-cols-2 pt-20 mx-auto p-auto " id="hero">
            <div className="text-left p-5 pt-20">

                <h1 className="text-5xl  text-black font-bold"><BsStars className='inline text-amber-400 text-xl align-top' />
                    Hi, I'm <span className="text-red-400">Niamh Gowran</span><BsStars className='inline text-amber-400 text-xl align-top' /></h1>

                <br></br>
                <div className='text-xl px-5'>
                    <p><BsStarFill className='inline text-red-400 mx-2' />Student Software Engineer</p>
                    <p><BsStarFill className='inline text-red-400 mx-2' />Based in Dublin, Ireland</p>
                    <p><BsStarFill className='inline text-red-400 mx-2' />Studying Computer Science at DCU</p>
                    <p><BsStarFill className='inline text-red-400 mx-2' />Full Stack Developer</p>
                </div>
            </div>
            <div className="align-top p-0 m-0 mx-auto">
                <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_g7ycvpvy.json" background="transparent" speed="1" style={{ width: "500px", height: "500px" }} loop autoplay></lottie-player>

            </div>
        </div>
    );
}