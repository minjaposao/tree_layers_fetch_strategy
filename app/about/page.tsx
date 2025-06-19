import UserCard from "../components/UserCard"

const cards = [
  { name: "Ana", age: '28', price: '123.45', date: '17-05-25' },
  { name: "Marko", age: '35', price: '678.9', date: '20-07-25' },
  { name: "Jelena", age: '42', price: '321.0', date: '13-05-25' },
  { name: "Jelena", age: '42', price: '321.0', date: '14-08-25' },
  { name: "Jelena", age: '42', price: '321.0', date: '14-08-25' },
];



const About = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
         {cards.map((card, i) => (
             <div key={i} className="flex-shrink-0 w-full max-w-sm">
        <UserCard
         {...card}
        />
        </div>
      ))}
    </div>
  )
}

export default About