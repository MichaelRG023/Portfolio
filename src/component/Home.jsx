import { Link } from "react-scroll";
import {HiArrowNarrowRight} from 'react-icons/hi'



function Home(){


    return(
        <div
        name="home"
        className="">
            <p>
                I am a student at Flatiron Bootcamp and has experiences with languages such as JavaScript, HTML, CSS and Rails. My choice of frameworks are React.Js and Ruby on Rails. 
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
               
            </div>
        </div>
    )
}

export default Home;