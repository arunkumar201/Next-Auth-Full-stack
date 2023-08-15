"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";
const Dashboard = () => {
  const { data: session, status } = useSession();
  // const route = useRouter();
  // const { data: session, status } = useSession({
  //   required: true,
  //   onUnauthenticated: () => {
  //     setTimeout(() => {
  //       route.push("/");
  //     }, 2000);
  //   },
  // });
  if (status === "loading") {
    return <p className="text-center">loading ...</p>;
  }
  if (status === "authenticated") {
    return (
      <div className="max-w-2xl px-4 py-8 mx-auto">
        <p className="w-full p-3 mb-4 text-3xl text-center text-green-500 bg-orange-200 rounded-md">
          Signed in as {session && session.user && session?.user.email}
        </p>
        <div className="flex items-center gap-x-3"></div>
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col justify-center w-full h-full gap-2 mt-2 text-2xl">
        <div className="text-center ">
          <p className="mb-3 text-3xl font-extrabold text-white text-muted-foreground">
            You are not authorized to access this page,please{" "}
            <Link href="/">
              {" "}
              <Button variant={"link"} className="text-3xl text-white">
                Sign-In
              </Button>{" "}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
