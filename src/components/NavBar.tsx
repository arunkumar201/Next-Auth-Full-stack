"use client";

import { FaGlobe, FaHome, FaLock, FaUserCircle } from "react-icons/fa";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const Navbar = () => {
  const [currentBtn,setCurrentBtn] =useState<string>('Sign-In')
  const pathname = usePathname();
  const {status}=useSession();
  useEffect(() => {
    if(status==='authenticated'){
      setCurrentBtn('Sign-Out');
    }else{
      setCurrentBtn('Sign-In');
      
    }
  }, [status])
  
 const  buttonHandler=()=>{
  if(status==='authenticated'){
    signOut()
  }else{
    signIn()
  }
 }

  return (
    <nav className="flex flex-wrap items-center justify-center p-5 bg-gray-800 gap-x-4">
      <Link href="/">
        <div
          className={cn(
            "flex items-center flex-shrink-0 px-3 py-2 mr-6 text-zinc-200 rounded-xl hover:bg-slate-600",
            pathname === "/" ? "bg-slate-600" : ""
          )}
        >
          <FaHome className="mr-2 w-7 h-7 " />
          <span className="text-xl font-semibold tracking-tight">Home</span>
        </div>
      </Link>
      <Link href="/dashboard">
        <div
          className={cn(
            "flex items-center flex-shrink-0 px-3 py-2 mr-6 text-zinc-200 rounded-xl hover:bg-slate-600",
            pathname === "/dashboard" ? "bg-slate-600" : ""
          )}
        >
          <FaGlobe className="mr-2 w-7 h-7 " />
          <span className="text-xl font-semibold tracking-tight">Dashboard</span>
        </div>
      </Link>
      <Link href="/user">
        <div
          className={cn(
            "flex items-center flex-shrink-0 px-3 py-2 mr-6 text-zinc-200 rounded-xl hover:bg-slate-600",
            pathname === "/user" ? "bg-slate-600" : ""
          )}
        >
          <FaUserCircle className="mr-2 w-7 h-7 " />
          <span className="text-xl font-semibold tracking-tight">Profile</span>
        </div>
      </Link>
      <Link href="/admin">
        <div
          className={cn(
            "flex items-center flex-shrink-0 px-3 py-2 mr-6 text-zinc-200 rounded-xl hover:bg-slate-600",
            pathname === "/admin" ? "bg-slate-600" : ""
          )}
        >
          <FaLock className="mr-2 w-7 h-7 " />
          <span className="text-xl font-semibold tracking-tight ">
            Protected-Server
          </span>
        </div>
      </Link>
    <Button variant={"secondary"} className="w-[8rem] p-5 text-xl" onClick={buttonHandler}>{currentBtn}</Button>  
    </nav>
  );
};

export default Navbar;
