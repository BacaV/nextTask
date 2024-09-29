"use client"

import { Bebas_Neue } from 'next/font/google'
import Image from 'next/image'
import heroImg from '@/public/assets/20944370.png'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: "400",
})


export default function Home() {


  return (
    
    <div>
    <section id="hero-section">

        <div className="w-[100vw] h-[100vh] pt-[100px] flex flex-row container justify-between">
            <div className="hero-wrapper flex flex-col gap-3 w-[50%] justify-center">

                <h1 className={`${bebasNeue.className} text-5xl `}>Don't forget your tasks,<br /> save them in tigidy</h1>
                <p>Only task menager you will ever need, start your journey today!</p>
                
            </div>
            <div className='flex justify-center items-center'>
                <Image src={heroImg} alt="ads" width={500} height={500} />
            </div>
        </div>

    </section>

    <section id="possibilities">

      <div className="h-[70vh]">

      </div>

    </section>

    </div>
     
  );
}
