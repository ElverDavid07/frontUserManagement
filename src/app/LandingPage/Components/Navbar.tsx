"use client";
import { Button, ThemeProvider } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { RiDvdLine, RiHandHeartFill } from "react-icons/ri";
const Navbar = () => {
 const router = useRouter();

 const RegisterNewUser = () => {
  router.push("auth/register");
 };
 const LoginUser = () => {
  router.push("auth/login");
 };
 return (
  <ThemeProvider>
   <nav className="Navbar">
    <div className="Logo">
     <RiDvdLine  className="w-10 h-10"/>
     <span>Company SAS</span>
    </div>
    <div className="space-x-3">
     <Button color="indigo" variant="outlined" onClick={RegisterNewUser}>
      registrarse
     </Button>
     <Button color="indigo" variant="gradient" onClick={LoginUser}>
      iniciar sesion
     </Button>
    </div>
   </nav>
  </ThemeProvider>
 );
};

export default Navbar;
