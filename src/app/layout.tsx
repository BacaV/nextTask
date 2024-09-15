import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logoipsum-296.svg"

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
      <body className="bg-[#303030]">
        <nav className="fixed">
          <div className="m-5 w-[95vw] h-[100px] bg-violet-700 flex justify-between p-[50px] items-center rounded-full">
            <div className="">
            <Image src={Logo} alt="Logo" width={60} height={60} />
            </div>
            <div className="flex gap-8">
              <Link href="/task-dash">Dashboard</Link>
              <Link href="/task-dash">Profile</Link>
              <Link href="/task-dash">Settings</Link>
              <Link href="/task-dash">Support</Link>
            </div>
          </div>
        </nav>
        <div className="pt-[200px] w-[80vw] m-auto">
          {children}
          </div>
        
      </body>
    </html>
  );
}
