function Skills(){


    // more tailwind css options such as grid-cols which is the grid template shown in line 14
    //Use the duration-{amount} utilities to control an element’s transition-duration. A hover option to use.
    return(
       <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
        {/* Container*/}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="w-full flex justify-center item-center flex-col mb-7">
             <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center" >Skills</p>
             <p className="py-4 text-2xl">Here are all the skills that I have worked with in Bootcamp and through my projects</p>
            </div>
             <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <p className="my-4">HTML</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"> 
                    <p className="my-4">CSS</p>
                </div>
             <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <p className="my-4">JavaScript</p>
             </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <p className="my-4">GitHub</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <p className="my-4">React</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <p className="my-4">Ruby on Rails</p>
            </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                     <p className="my-4">TailWindCss</p>
                </div>
                
           
            </div> 
            
           
        </div>
       </div>
    )
}

export default Skills;