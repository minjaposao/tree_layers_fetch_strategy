'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface UserCardProps {
  name: string;
  age: string;
  price: string;
  // date: string; // formatovan datum, npr. "2024-06-19"
}

export default function UserCard({ name, age, price }: UserCardProps) {
  return (
    <Card className="max-w-sm w-full bg-white/90 shadow-xl rounded-2xl border border-gray-200 backdrop-blur
      transition-transform hover:scale-[1.03] hover:shadow-2xl"
    >
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800 tracking-wide">{name}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2 text-sm text-gray-700">
        <div><strong>Name:</strong> {name}</div>
        <div><strong>Age:</strong> {age}</div>
        <div><strong>Price:</strong> ${price}</div>
      </CardContent>

      <CardFooter className="flex justify-between text-xs text-gray-600 pt-4 border-t border-gray-200">
        <span>Ptice: {price}</span>
        {/* <span>{date}</span> */}
      </CardFooter>
    </Card>
  );
}
