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
                <Image src={heroImg} alt="ads" width={800} height={800} />
            </div>
        </div>

    </section>

    <section id="possibilities">

      <div className="h-[100vh] bg-[#0c0c0c]">
        <div className='container py-20 text-white'>

          <div className="flex flex-col gap-5">
            <h2 className={`${bebasNeue.className} text-5xl text-center pb-5`}>Possibilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-[#45474B] p-5 rounded-lg flex flex-col justify-center items-center h-[200px]">
                <h3 className={`${bebasNeue.className} text-3xl `}>Task</h3>
                <p className="">Create, edit and delete your tasks</p>
              </div>
              <div className="bg-[#45474B] p-5 rounded-lg flex flex-col justify-center items-center h-[200px]">
                <h3 className={`${bebasNeue.className} text-3xl `}>Calendar</h3>
                <p className="">Get reminded about your tasks</p>
              </div>
              <div className="bg-[#45474B] p-5 rounded-lg flex flex-col justify-center items-center h-[200px]">
                <h3 className={`${bebasNeue.className} text-3xl `}>Profile</h3>
                <p className="">Edit your profile however you like</p>
              </div>
              <div className="bg-[#45474B] p-5 rounded-lg flex flex-col justify-center items-center h-[200px]">
                <h3 className={`${bebasNeue.className} text-3xl `}>Settings</h3>
                <p className="">Edit your preferences</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>

    </div>
     
  );
}
