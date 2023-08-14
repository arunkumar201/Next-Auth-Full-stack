import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import React from "react";

const LoginForm = () => {
	return (
		<>
			<div className="flex justify-center items-center mt-4 w-[80%] flex-col px-4">
				<Input type="email" id="email" placeholder="Please enter email"className="bg-[hsla(0,0%,100%,.08)] shadow-xl  font-bold py-3 px-4 rounded-md transition-colors shadow-xl w-full h-12" />
			</div>
			<div className="w-[80%] px-4 flex justify-center items-center">
				<Button variant={'outline'} className="w-full mt-2 bg-[#7B6ECE] px-2 py-[25px] text-lg shadow-xl">Log in</Button>
			</div>
			<div className="text-sm md:text-lg">
               <h1 className="text-base title ">Don’t have an account yet? <Link href={'/register'} className="text-[#A98EFF] hover:underline">Sign up</Link></h1>
				
			</div>
		</>
	);
};

export default LoginForm;
