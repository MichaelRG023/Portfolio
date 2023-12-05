import { Link } from "react-scroll";
import {HiArrowNarrowRight} from 'react-icons/hi'
import me from '../component/assests/me.png';


function Home(){


    return(
        <div
        name="home"
        className="">
            <p>
                I am a recent student at Flatiron Bootcamp and has experiences with languages such as JavaScript,HTML,CSS  and Rails. My choice of frameworks are React.Js and Ruby on Rails.
            </p>
            <div>
                <Link
                to="about"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r"
                >
                    About Me
                    <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight size={25} className="ml-3"/>
                    </span>
                </Link>
            </div>
            <div>
                <img
                src={me}
                alt="my-profile"
                className="rounded-2x1 mx-auto ww2/3 md:w-full"
                />
            </div>
        </div>
    )
}

export default Home;