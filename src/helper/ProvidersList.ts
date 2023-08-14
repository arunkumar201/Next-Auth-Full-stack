import { Awaitable, RequestInternal } from "next-auth";

import AppleProvider from "next-auth/providers/apple";
import Auth0Provider from "next-auth/providers/auth0";
import CoinbaseProvider from "next-auth/providers/coinbase";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import LinkedinProvider from "next-auth/providers/linkedin";
import TwitterProvider from "next-auth/providers/twitter";

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
		credentials: {
			userName: {
				label: "userName",
				type: "text",
				placeholder: "username eg.John_wick_",
			},
			email: {
				label: "email",
				type: "text",
				placeholder: "example123@example.com",
			},
			password: {
				label: "password",
				type: "password",
				placeholder: "Your password",
			},
		},
		authorize: async function (
			credentials:
				| Record<"userName" | "email" | "password", string>
				| undefined,
			req: Pick<RequestInternal, "headers" | "body" | "query" | "method">
		) {
			const { userName, password, email } = credentials || {};
			//  await User.insertOne({ email,password,userName });
			// const user = await User.findOne({ email });
			const user = null || { password: "" };
			if (!user) {
				throw new Error("Invalid Email or Password");
			}
			if (user.password !== password) {
				throw new Error("Invalid Credentials");
			}
			return user;
		},
	}),
];
