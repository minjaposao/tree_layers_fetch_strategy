import clientPromise from "@/lib/mongodb";
import { User } from "@/types/users";

export async function getAllUsers() {
    try {
        const client = await clientPromise;
        const db = client.db('db');
        const users = await db.collection('users').find().toArray();

        const sanitizeUsers = users.map(user => ({
            ...user,
            _id: user._id.toString(),
        }))

        return sanitizeUsers as User[];

    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch users');
    }
}