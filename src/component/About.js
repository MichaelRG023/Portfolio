function About(){



    return(
       <section 
       name="about"
       id="about"
       className="w-full h-screen bg-[#0a192f] text-gray-300"
       >
         <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="py-16 rounded-md bg-cyan-800 flex flex-cod justify-center items-center w-4/6">
                <div className="max-w-[100px] w-full grid grid-cols-2 gap-8 mb-4">
                  <div className="sm:text-right pb-8 pl-4">
           <p className="text-4x1 font-bold inline border-b-4 border-cyan-500">
             Hello, I'm Michael Gonzalez, nice to meet you. Please have a look around!
           </p>
          <div>
              <p>
                {""}
                A software Developer with experience in web development. 
                I am well knowledge in the front end of development.
              </p>
              </div>
              </div>
           </div>
           </div>

         </div>
      </section>
      )
}

export default About;