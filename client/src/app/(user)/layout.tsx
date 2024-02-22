import type { Metadata } from "next";
import "../../styles/globals.css"
import Navbar from "@/src/components/Navbar";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children
}:{children: React.ReactNode;}){
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
        </body>
    </html>
  );
}
