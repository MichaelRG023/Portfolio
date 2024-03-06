import React from "react";
function Project(){




    return(
        <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-lg font-bold inline border-b-4 text-gray-300 border-cyan-500">Projects</p>
                    <p className="py-6 text-2x1">Check out my projects!</p>
                </div>
                {/*Container*/}
                <div>
                    <div>
                        {/*Grid Item */}
                        <div
                           className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                            {/*Hover Effects */}
                            <div>
                                
                                <p> A website application made for Ken from Street Fighter frame data and biography. Built using React, JavaScript and db.json API </p>
                                <a
                                href="https://michaelrg023.github.io/Ken-MoveSet/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"> Demo</button>
                                </a>
                                  <strong>Ken Masters Bio </strong>
                            </div> 
                            
                        </div> 
                        <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                            <div>
                                <p> A website app built using ReactJS framework with Rapid API being used to distribute data.</p>
                                    <a
                                    href="https://github.com/MichaelRG023/Language-Translator">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"> Code</button>
                                    </a>
                                   <strong>Language Translator</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
    
}

export default Project;