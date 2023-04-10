"use client";
import { ThemeProvider } from "@material-tailwind/react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { ApiSlice } from "./StateGlobal/Slices/ApiSlice";
const Providers = ({ children }: { children: React.ReactNode }) => {
 return (
  <>
   <ApiProvider api={ApiSlice}>
    <ThemeProvider>{children}</ThemeProvider>
   </ApiProvider>
  </>
 );
};

export default Providers;
