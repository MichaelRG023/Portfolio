import React from "react"
function Contact(){



    return(
        <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <div className=" flex flex-col max-w-[600px] w-full">
                <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
                    <h1 className="text-4x1 font-bold inline border-cyan-500 text-gray-300">Contact</h1>
                    <p className="text-gray-300 py-4">Shoot me a Message</p>
                </div>
                <input className="bg-[#ccd6f6] p-2" type="text" placeholder="name" name="name"></input>
                <input className="bg-[#ccd6f6]" type="email" placeholder="email" name="email"></input>
                <textarea className="bg-[#ccd6f6] p-2" name="message" rows="10" placeholder="message"></textarea>      
                <button className="text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center">Lets Chat!!</button>
            </div>
        </div>
    )
}


export default Contact