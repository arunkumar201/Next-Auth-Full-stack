import { getServerSession } from "next-auth/next";
const Dashboard = async () => {
  const session = await getServerSession();
  console.log("🚀 ~ file: page.tsx:7 ~ Dashboard ~ session:", session);
  return (
    <>
      <div className="flex flex-col justify-center w-full h-full gap-2 mt-2 text-2xl">
        <div className="text-center ">
          {!session ? (
            <p className="mb-3 text-3xl font-extrabold text-white text-muted-foreground">
              You are not authorized to access this page,please contact the
              administrator
            </p>
          ) : (
            <p className="mb-3 text-2xl text-yellow-200 text-muted-foreground">
              Authenticated
            </p>
          )}
          <code className="text-lg">
            User Session Data {JSON.stringify(session)}
          </code>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
