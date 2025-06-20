import { getAllUsers } from "@/query/users/getAllUsers";
import UserCard from "../components/UserCard"
import { Providers } from "../providers";

// const cards = [
//   { name: "Ana", age: '28', price: '123.45', date: '17-05-25' },
//   { name: "Marko", age: '35', price: '678.9', date: '20-07-25' },
//   { name: "Jelena", age: '42', price: '321.0', date: '13-05-25' },
//   { name: "Jelena", age: '42', price: '321.0', date: '14-08-25' },
//   { name: "Jelena", age: '42', price: '321.0', date: '14-08-25' },
// ];



const About = async () => {

    const users = await getAllUsers();
  return (


      <Providers  initialUsers={users}>

        <div className="flex flex-wrap justify-center gap-6 p-6">
         {users.map((card, i) => (
             <div key={i} className="flex-shrink-0 w-full max-w-sm">
        <UserCard
         {...card}
        />
        </div>
      ))}
    </div>
 
   </Providers>
  )

}

export default About