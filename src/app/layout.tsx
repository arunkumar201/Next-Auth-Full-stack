import "./globals.css";

import AuthProvider from "../context/AuthProvider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProviders } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: " Next Auth App",
	description: "Auth Application`",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProviders>
					<AuthProvider>
						<div className="items-center w-full min-h-screen text-white dark:bg-gray-700 bg-gray-300">
							{children}
						</div>
					</AuthProvider>
				</ThemeProviders>
			</body>
		</html>
	);
}
