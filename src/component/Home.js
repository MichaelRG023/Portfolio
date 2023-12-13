import { Link } from "react-scroll";
import {HiArrowNarrowRight} from 'react-icons/hi'



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
                src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/336730073_1209232506621842_807278614068645840_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=M-OjJQUivO0AX-xL7PZ&_nc_ht=scontent-lga3-2.xx&oh=00_AfCovrMjLRy9AUn-Xw7yyHg8eHgWC4-vb-VN6Gs-eCPOxA&oe=657FE36D"
                
                alt="my-profile"
                className="rounded-2x1 mx-auto ww2/3 md:w-full"
                />
            </div>
        </div>
    )
}

export default Home;