import Providers from "./providers";
import "./styles/globals.css";
import { Metadata } from "next";

const metadata: Metadata = {
 title: "Landing page",
 description: "plataforma web desarrollada con next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en">
   <body>
    <Providers>{children}</Providers>
   </body>
  </html>
 );
}

export { metadata };
