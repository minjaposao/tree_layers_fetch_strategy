'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useUsers } from "@/context/userContext";

// const users = [
//   { name: "Ana", age: 28, price: 123.45 },
//   { name: "Marko", age: 35, price: 678.9 },
//   { name: "Jelena", age: 42, price: 321.0 },
// ];

export default function DashboardPage() {

  const { users } = useUsers();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100 p-10">
      <Card className="w-full max-w-4xl mx-auto shadow-xl rounded-2xl border border-gray-200 bg-white/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800">Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-xl">
            <Table className="min-w-full text-sm text-left text-gray-700">
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                  <TableHead className="px-4 py-3">Name</TableHead>
                  <TableHead className="px-4 py-3">Age</TableHead>
                  <TableHead className="px-4 py-3">Price ($)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow
                    key={user._id}
                    className="hover:bg-blue-50 transition-colors duration-200"
                  >
                    <TableCell className="px-4 py-3 font-medium">{user.name}</TableCell>
                    <TableCell className="px-4 py-3">{user.age}</TableCell>
                    <TableCell className="px-4 py-3">${user.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}