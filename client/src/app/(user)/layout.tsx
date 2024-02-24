import type { Metadata } from "next";
import "../../styles/globals.css";
import Navbar from "@/src/components/Navbar";
import Layout from "@/src/components/Layout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          <Navbar />
          {children}
        </Layout>
      </body>
    </html>
  );
}
