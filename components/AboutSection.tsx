import React from 'react'
import Image from "next/image"

const skills = [
    { skill: "Python" },
    { skill: "Java" },
    { skill: "SQL" },
    { skill: "HTML" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Haskell" },
    { skill: "C++" },
    { skill: "R" },
    { skill: "Github" },
]

const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className='text-center font-bold text-4xl'>
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 purple-500 border-0 rounded"></hr>
                </h1>
                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className='md:w-1/2'>
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            Get to know me!
                        </h1>
                        <p>
                            Hi, my name is August and I am a{" "}
                            <span className="font-bold">{" self-motivated"}</span>, and
                            <span className="font-bold">{" driven"}</span> software developer
                            based in Chicago, IL.
                        </p>
                        <br />
                        <p>
                            I graduated from the University of Iowa in 2023
                            with a BS in Computer Science as well as a BS in Mathematical
                            Statistics, and I have worked in IT within the financial sector ever since. 
                        </p>
                        <br />
                        <p>
                            I have a wide range of hobbies and passions that keep me busy.
                            From watching sports, playing sports, trivia, to gambling,
                            I am always seeking new experiences and love to keep myself
                            engaged and learning new things.
                        </p>
                        <br />
                        <p>
                            I believe that you should{" "}
                            <span className="font-bold text-purple-500">
                                always keep learning
                            </span>{" "}
                            and that&#39;s what I strive to do, I have a passion for
                            technology and a desire to always push the limits of what is
                            possible. I am excited to see where my career takes me and am
                            always open to new opportunities. 🙂
                        </p>
                    </div>
                    <div className='md:w-1/2'>
                        <div>
                            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">My Skills</h1>
                        <div className="flex flex-wrap flex-row justify-center md:justify-start">
                            {skills.map((item, idx) => {
                                return <p
                                    key={idx}
                                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                >{item.skill}</p>
                            })}
                        </div></div>
                        
                        <div className='content-center'> 
                        <Image
                            src="/Tigerhawk-black.png"
                            alt=""
                            width={325}
                            height={325}
                            className="hidden md:block md:relative md:bottom-4 md:left-1/5 md:z-0 md:pt-16"
                        />
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection