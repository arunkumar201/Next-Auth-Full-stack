"use client";

import { FaGlobe, FaHome, FaLock, FaUserCircle } from "react-icons/fa";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "./ui/button";
import Link from "next/link";
import ToggleBtn from "./ToggleBtn";
import { cn } from "@/lib/utils";

const Navbar = () => {
	const [currentBtn, setCurrentBtn] = useState<string>("Sign-In");
	const pathname = usePathname();
	const router = useRouter();
	const { status } = useSession();
	useEffect(() => {
		if (status === "authenticated") {
			setCurrentBtn("Sign-Out");
		} else {
			setCurrentBtn("Sign-In");
		}
	}, [status]);

	const buttonHandler = () => {
		if (status === "authenticated") {
			signOut({ callbackUrl: "/login" });
    } else {
      router.refresh();
			router.push("/login");
		}
	};

	return (
		<nav className="fixed bg-blend-color-burn  backdrop-blur-xl  backdrop-brightness-150	z-50 w-full top-0 flex flex-wrap items-center justify-center p-2 bg-gray-800 gap-x-4 ">
			<Link href="/">
				<div
					className={cn(
						"flex items-center flex-shrink-0 px-3 py-2 mr-6 text-zinc-200 rounded-xl hover:bg-slate-600",
						pathname === "/" ? "bg-slate-600" : ""
					)}
				>
					<FaHome className="mr-2 w-6 h-6 " />
					<span className="text-lg font-semibold tracking-tight">Home</span>
				</div>
			</Link>
			<Link href="/dashboard">
				<div
					className={cn(
						"flex items-center flex-shrink-0 px-3 py-2 mr-6 text-zinc-200 rounded-xl hover:bg-slate-600",
						pathname === "/dashboard" ? "bg-slate-600" : ""
					)}
				>
					<FaGlobe className="mr-2 w-6 h-6 " />
					<span className="text-lg font-semibold tracking-tight">
						Dashboard
					</span>
				</div>
			</Link>
			<Link href="/user">
				<div
					className={cn(
						"flex items-center flex-shrink-0 px-3 py-2 mr-6 text-zinc-200 rounded-xl hover:bg-slate-600",
						pathname === "/user" ? "bg-slate-600" : ""
					)}
				>
					<FaUserCircle className="mr-2 w-6 h-6 " />
					<span className="text-lg font-semibold tracking-tight">Profile</span>
				</div>
			</Link>
			<Link href="/admin">
				<div
					className={cn(
						"flex items-center flex-shrink-0 px-3 py-2 mr-6 text-zinc-200 rounded-xl hover:bg-slate-600",
						pathname === "/admin" ? "bg-slate-600" : ""
					)}
				>
					<FaLock className="mr-2 w-6 h-6 " />
					<span className="text-lg font-semibold tracking-tight ">
						Protected-Server
					</span>
				</div>
			</Link>
			<Button
				variant={"secondary"}
				className="w-[8rem] p-5 text-lg"
				onClick={buttonHandler}
			>
				{currentBtn}
			</Button>
			<div className="fixed right-12 ml-9">
				<ToggleBtn />
			</div>
		</nav>
	);
};

export default Navbar;
