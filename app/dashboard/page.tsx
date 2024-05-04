import DashboardComp from "@/components/Dashboard";
import { trpcServer } from "../_trpc/serverClient";

const Dashboard = async () => {
  const result = await trpcServer.syncToDb()
  console.log(result, "synctodb")

  return (
    <div>
      <DashboardComp />
    </div>
  )
}

export default Dashboard
