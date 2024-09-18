"use client"

import { Bebas_Neue } from 'next/font/google'
import {useRive} from "@rive-app/react-canvas"

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: "400",
})

export default function Home() {

  const { RiveComponent } = useRive({
    src: "/assets/heroriv.riv",
    stateMachines: "State Machine 1",
    artboard: "New Artboard",
    autoplay: true,
    onLoadError: () => console.log("Rive not loaded"),

    onload: () => console.log("rive loaded"),
  })



  return (
    
    <div>
    <section id="hero-section">

        <div className="w-[100vw] h-[100vh] bg-purple-300 pt-[150px]">
            <div className="hero-wrapper container flex flex-col gap-3">

                <h1 className={`${bebasNeue.className} text-5xl`}>Don't forget your tasks,<br /> save them in tigidy</h1>
                <p>Only task menager you will ever need, start your journey today!</p>
            </div>
            <div>
                <RiveComponent className='w-[500px] h-[500px]' />
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
