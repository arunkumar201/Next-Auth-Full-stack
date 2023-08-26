import { Awaitable, RequestInternal } from "next-auth";

import AppleProvider from "next-auth/providers/apple";
import Auth0Provider from "next-auth/providers/auth0";
import CoinbaseProvider from "next-auth/providers/coinbase";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import { FormDataType } from "@/app/(auth)/register/[email]/page";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import LinkedinProvider from "next-auth/providers/linkedin";
import TwitterProvider from "next-auth/providers/twitter";
import { User } from "@/models/userModel";
import bcrypt from "bcrypt";
import { connect } from "@/dbConfig";
import { disconnect } from "mongoose";

export const authProviders = [
	GithubProvider({
		clientId: process.env.GITHUB_ID as string,
		clientSecret: process.env.GITHUB_SECRET as string,
	}),
	GoogleProvider({
		clientId: process.env.GOOGLE_ID as string,
		clientSecret: process.env.GOOGLE_SECRET as string,
	}),
	FacebookProvider({
		clientId: process.env.FACEBOOK_ID as string,
		clientSecret: process.env.FACEBOOK_SECRET as string,
	}),
	TwitterProvider({
		clientId: process.env.TWITTER_ID as string,
		clientSecret: process.env.TWITTER_SECRET as string,
	}),
	Auth0Provider({
		clientId: process.env.AUTH0_ID as string,
		clientSecret: process.env.AUTH0_SECRET as string,
		issuer: process.env.AUTH0_ISSUER as string,
	}),
	AppleProvider({
		clientId: process.env.APPLE_ID as string,
		clientSecret: process.env.APPLE_SECRET as string,
	}),
	LinkedinProvider({
		clientId: process.env.Linkedin_ID as string,
		clientSecret: process.env.Linkedin_SECRET as string,
	}),
	CoinbaseProvider({
		clientId: process.env.Coinbase_ID as string,
		clientSecret: process.env.Coinbase_SECRET as string,
	}),
	CredentialsProvider({
		name: "Email and Password",
		credentials: {},
		authorize: async function (
			credentials: Record<string, string> | undefined
		) {
			await connect();
			const { password, email } = credentials || {};
			if (!email || !password) {
				await disconnect();
				return "Email and password fields are empty. Please try again.";
			}

			const existingUser = await User.findOne({ email });
			if (!existingUser) {
				await disconnect();
				throw new Error("Invalid credentials. Please try again.");
			}

			const passwordMatch = await bcrypt.compare(
				password,
				existingUser.password
			);

			console.debug(
				"🚀 ~ file: ProvidersList.ts:76 ~ passwordMatch:",
				passwordMatch
			);

			if (!passwordMatch) {
				await disconnect();
				throw new Error("Invalid credentials. Please try again.");
			}

			await disconnect();
			return existingUser; // Return the user object if the credentials are valid
		},
	}),
];
