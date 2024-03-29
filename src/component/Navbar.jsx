import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
   
} from 'react-icons/fa'
import React,{useState} from "react";
import {Link} from 'react-scroll';
import {BsFillPersonLinesFill} from 'react-icons/bs'

function Navbar(){
    const [nav,setNav]=useState(false);

    const handleClick=()=> setNav(!nav)

    

    // react-scroll is used in order to scoll to a different part of the same page instead of clicking on a button.
    //
    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <h1 className="font-thin text-2x1 italic font-serif">Michael Gonzalez Portfolio</h1>
            </div>
            {/*menu*/}
            <ul className="hidden md:flex gap-x-8">
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                    </li>
                    <li>
                       <Link to="about" smooth={true} duration={500}>
                        About
                      </Link> 
                  </li>
                  <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                  </li>
                  <li>
                    <Link to="project" smooth={true} duration={500}>
                        Project
                    </Link>
                  </li>
                  <li>
                  <Link to='contact' smooth={true} duration={500}>
                    Contact
                  </Link>
               </li>
            </ul>
          

            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>
            {/*Mobile menu*/}
            <ul
            className={
                !nav
                ? 'hidden'
                :'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            
            }
            >
                <li className=''>
                    <Link onClick={handleClick} to='about'smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                    </Link>
                </li>
                <li>
                    <Link onClick={handleClick} to="project" smooth={true} duration={500}>
                        Project 
                    </Link>
                </li>
            </ul>
            {/* Social icons*/}
            <div className='hidden lg:flex fixed flex-col top-[25%] left-0'>
                <ul>
                   <li className='w-[160px] h-[60px] flex justify-between items-center ml-[100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a
                    className='flex justify-between items-center w-full text-gray-300'
                        href='https://www.linkedin.com/in/michael-gonzalez-756b37241/'
                        >
                        Linkedin<FaLinkedin size={30}/>
                    </a>
                   </li>
                   <li className='w-[160px] h-[60px] flex justify-between items-center ml-[100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='https://github.com/MichaelRG023'
                    >
                    Gituhub<FaGithub size={30}/>
                    </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                     <a 
                     className='flex justify-between items-center w-full text-gray-300'
                        href='/'
                        >
                      Resume<BsFillPersonLinesFill size={30}/>
                        </a>
                   </li>
                </ul>
            </div>
         </div>   

        
    )
}

export default Navbar;