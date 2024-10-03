import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logoipsum-296.svg"
import XLogo from "@/public/twitter.png"
import Instagram from "@/public/instagram.png"
import LinkedIn from "@/public/linkedin.png"
import { Bebas_Neue, Archivo } from 'next/font/google'

// {`${bebasNeue.className}`}

export const metadata: Metadata = {
  title: "Tigidy",
  description: "Task Menager by your taste",
};

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: "400",
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: "400",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#F5F7F8] text-black ${archivo.className} overflow-x-hidden relative`}>
        <div className="flex justify-center">
          <nav className="fixed mx-auto">
            <div className="m-5 w-[70vw] h-[70px] bg-[#45474B] flex justify-between px-20 items-center rounded-full">
            <div className={`flex gap-1 items-center text-white text-3xl ${bebasNeue.className}`}>
                <Image src={Logo} alt="Logo" width={50} height={50} />
                TIGIDY
              </div>
              <div className="flex text-white gap-8 text-xl">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/profile">Profile</Link>
                <Link href="/settings">Settings</Link>
                <Link href="/support">Support</Link>
              </div>
            </div>
          </nav>
        </div>
        
        <div>
          {children}
          </div>

          <footer className="absolute bottom-0 w-[100vw] bg-[#45474B] h-[200px] p-20 flex justify-between text-white">
              <div className={`flex text-white gap-1 items-center text-2xl ${bebasNeue.className}`}>
                <Image src={Logo} alt="Logo" width={50} height={50} />
                TIGIDY
              </div>
              <div className="flex gap-3 justify-center items-center">
                <p>Made by NikolaJevtic</p>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <Link href="x.com">
                  <Image src={XLogo} alt="Twitter" width={30} height={30}/>
                </Link>
                <Link href="instagram.com">
                  <Image src={Instagram} alt="Instagram" width={30} height={30}/>
                </Link>
                <Link href="linkedin.com">
                  <Image src={LinkedIn} alt="LinkedIn" width={30} height={30}/>
                </Link>
              </div>
              <div className="flex gap-3 justify-center items-center">
                  <p>
                    Without Street 123 <br />
                    New Country <br />
                    Since 2025 <br />
                  </p>
              </div>
          </footer>
        
      </body>
    </html>
  );
}
