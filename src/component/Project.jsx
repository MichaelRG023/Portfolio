import React from "react";
function Project(){




    return(
        <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4x1 font-bold inline border-b-4 text-gray-300 border-cyan-500">Projects</p>
                    <p className="py-6 text-2x1">Check out some of my projects!</p>
                </div>
                {/*Container*/}
                <div>
                    <div>
                        {/*Grid Item */}
                        <div
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                            {/*Hover Effects */}
                            <div>
                                <span>
                                    
                                </span>
                                <p> A website application built using React and API </p>
                                <a
                                href="https://github.com/MichaelRG023/Ken-MoveSet">
                                    Ken Masters Bio 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
    
}

export default Project;