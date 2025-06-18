import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET(){
    const client = await clientPromise;
    const db = client.db();
    const users = await db.collection('users').find({}).toArray();

    const sanitizeUsers = users.map(user=>({
        ...user,
        _id: user._id.toString(),
    }))


    return NextResponse.json(sanitizeUsers);
}

// POST - Kreiraj novog korisnika
export async function POST(request: Request) {
  const client = await clientPromise;
  const db = client.db();

  try {
    const body = await request.json();

    // Validacija po potrebi
    if (!body.name || !body.age || !body.price) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const newUser = {
      name: body.name,
      age: body.age,
      price: body.price,
    };

    const result = await db.collection('users').insertOne(newUser);

    return NextResponse.json({ ...newUser, id: result.insertedId.toString() });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}
