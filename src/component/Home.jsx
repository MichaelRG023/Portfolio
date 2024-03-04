import { Link } from "react-scroll";
import {HiArrowNarrowRight} from 'react-icons/hi'



function Home(){


    return(
        <div>
            <div>
                <Link
                to="about"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r"
                >
                    About
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