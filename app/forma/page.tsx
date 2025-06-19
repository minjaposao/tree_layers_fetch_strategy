export const dynamic = 'force-dynamic';

import CreateUserForm1 from '../components/CreateUserForm1'
import DashboardPage from '../components/dashboard'
import { Providers } from '../providers'
import { getAllUsers } from '@/query/users/getAllUsers'

const Form = async () => {


  const users = await getAllUsers();

  return (
    <Providers  initialUsers={users}>

        <CreateUserForm1 />
        <DashboardPage />
 
   </Providers>
  )
}

export default Form   