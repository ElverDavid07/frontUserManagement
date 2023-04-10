import Navbar from "./Components/Navbar";
import { Metadata } from "next";

const metadata: Metadata = {
 title: "Auth ",
};

export default function LayoutAuth({ children }: { children: React.ReactNode }) {
 return (
  <>
   <Navbar />
   {children}
  </>
 );
}

export { metadata };
