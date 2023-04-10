"use client";
import { Button, Input } from "@material-tailwind/react";
import Link from "next/link";

const Register = () => {
 return (
  <div className="flex justify-center">
   <div className="Content">
    <h2 className="Title">Crea una cuenta</h2>
    <form className="Form">
     <Input label="nombre" color="indigo" size="lg" type={"text"} variant={"standard"} />
     <Input label="correo" color="indigo" size="lg" type={"email"} variant={"standard"} />
     <Input label="contraseña" color="indigo" size="lg" type={"password"} variant={"standard"} />
     <Button color="indigo" fullWidth={true}>
      Registrarse
     </Button>
    </form>
    <div className="py-5 space-x-1 flex justify-center">
      <span className="">ya tienes una cuenta?</span>
      <Link href={"auth/login"} className="text-indigo-600">
       iniciar sesion
      </Link>
     </div>
   </div>
  </div>
 );
};

export default Register;
