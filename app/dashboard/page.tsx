import DashboardComp from "@/components/Dashboard";
import { trpcServer } from "../_trpc/serverClient";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Dashboard = async () => {
  const result = await trpcServer.syncToDb()
  console.log(result, "synctodb")

  return (
    <MaxWidthWrapper>
      <div>
        <DashboardComp />
      </div>
    </MaxWidthWrapper>
  )
}

export default Dashboard
