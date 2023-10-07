import React from 'react'
import Image from "next/image"
import Link from "next/link"

const CalculatorSection = () => {
    return (
        <section id="Calculator">
            <div className="my-12 pb-12 pt-16 sm:pb-48">
                <h1 className='text-center font-bold text-4xl'>
                    Beers?
                    <hr className="w-32 h-1 mx-auto my-4 bg-purple-500 border-0 rounded"></hr>
                </h1>
                <div>
                    <label>
                        HI
                    <input className='rounded border-2 border-stone-500' type='text' name='HUB'/>
                    </label>
                    
                </div>
                

            </div>
        </section>
    )
}

export default CalculatorSection