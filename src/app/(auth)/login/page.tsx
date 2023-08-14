import { FaApple, FaLinkedin } from "react-icons/fa";

import AuthNavBar from "@/components/AuthNavBar";
import { FcGoogle } from "react-icons/fc";
import LoginForm from "@/components/LoginForm";
import LogoTitle from "@/components/LogoTitle";
import OrBox from "@/components/OrBox";
import SocialProviders from "@/components/SocialProviders";

const LoginPage = () => {
	return (
		<>
			<div className="dark:bg-[#111212] bg-slate-200 flex w-full justify-center items-center min-h-screen ">
				<div className="w-full md:w-[30rem] dark:bg-[#1F202A]  md:min-h-[90vh] h-screen  rounded-none md:rounded-3xl bg-slate-300 shadow-neutral-300/100">
					{/* Navbar for page */}
					<AuthNavBar />
					{/* Logo and title */}
					<div className="static">
						<LogoTitle title="Login Auth-App" />
					</div>
					{/* SocialProviders */}
					<div className="all-center ">
						<SocialProviders
							Icon={FcGoogle}
							description={"Login With Google"}
							providerName={"Google"}
						/>
						<SocialProviders
							Icon={FaApple}
							description={"Login With Apple"}
							providerName={"Apple"}
						/>
						<SocialProviders
							Icon={FaLinkedin}
							description={"Login With Linkedin"}
							providerName={"Linkedin"}
						/>
						
						
					</div>
					{/* Separator  */}
					<div className="all-center mt-3 p-3">
						<OrBox />
					</div>
					{/* Form start */}
					<div className="all-center mt-2">
                      <LoginForm/>  
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
