"use client"

import { Bebas_Neue } from 'next/font/google'
import {useRive} from "@rive-app/react-canvas"
import rive from "@rive-app/canvas"

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: "400",
})

const r = new rive.Rive({
  src: "https://cdn.rive.app/animations/vehicles.riv",
  canvas: document.getElementById("canvas"),
  stateMachines: "bumpy",
  autoplay: true,
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  }
});
export default function Home() {

  



  return (
    
    <div>
    <section id="hero-section">

        <div className="w-[100vw] h-[100vh] bg-purple-300 pt-[150px]">
            <div className="hero-wrapper container flex flex-col gap-3">

                <h1 className={`${bebasNeue.className} text-5xl`}>Don't forget your tasks,<br /> save them in tigidy</h1>
                <p>Only task menager you will ever need, start your journey today!</p>
                
            </div>
            <div>
                <canvas id="canvas"></canvas>
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
