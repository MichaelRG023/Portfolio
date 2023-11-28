import React,{useState} from "react";
import {Link} from 'react-scroll';

function Navbar(){
    const [nav,setNav]=useState(false);

    const handleClick=()=> setNav(!nav)

    



    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-30">
            <div>
                <h1 className="font-thin text-2x1 italic font-serif">TB</h1>
            </div>
            {/*menu*/}
            <ul className="hidden md:flex gap-x-8">
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
            </ul>
         </div>   

        
    )
}

export default Navbar;