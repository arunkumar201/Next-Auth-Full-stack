import "./globals.css";

import AuthProvider from "../context/AuthProvider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/NavBar";
import { ThemeProviders } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: " Next Auth App",
	description: "Auth Application`",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession();
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProviders>
					<AuthProvider>
						<div className="items-center w-full min-h-screen text-white dark:bg-gray-700 bg-gray-300">
							{session && <Navbar />}
							<div className={session ? "top-12 absolute w-full" : "mt-0"}>
								{children}
							</div>
						</div>
					</AuthProvider>
				</ThemeProviders>
			</body>
		</html>
	);
}
