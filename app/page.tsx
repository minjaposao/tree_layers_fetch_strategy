// export const dynamic = 'force-dynamic';
import { getAllUsers } from "@/query/users/getAllUsers";

import DashboardPage from "./components/dashboard";
import { Providers } from "./providers";

export default async function Home() {

  const users = await getAllUsers();


  return (
    <div>
      <h1>Radi</h1>
    <Providers initialUsers={users}>

        <DashboardPage />

    </Providers>
    </div>
  );
}
