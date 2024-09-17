import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logoipsum-296.svg"
import XLogo from "@/public/twitter.png"



export const metadata: Metadata = {
  title: "Tigidy",
  description: "Task Menager by your taste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#dddddd]">
        <div className="flex justify-center">
          <nav className="fixed mx-auto">
            <div className="m-5 w-[80vw] h-[70px] bg-violet-700 flex justify-between px-20 items-center rounded-full">
              <Image src={Logo} alt="Logo" width={50} height={50} />
              <div className="flex gap-8">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/profile">Profile</Link>
                <Link href="/settings">Settings</Link>
                <Link href="/support">Support</Link>
              </div>
            </div>
          </nav>
        </div>
        
        <div className="pt-[200px] w-[80vw] m-auto">
          {children}
          </div>

          <footer className="absolute bottom-0 w-[100vw] bg-[#111111] h-fit p-20 flex">
              <div className="flex gap-5 items-center">
                <Image src={Logo} alt="Logo" width={50} height={50} />
                TIGIDY
              </div>
              <div>
                <Link href="x.com">
                  <Image src={XLogo} alt="Logo" width={50} height={50}/>
                </Link>
              </div>
          </footer>
        
      </body>
    </html>
  );
}
