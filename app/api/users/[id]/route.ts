import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb'; // ili gde već držiš konekciju
import { ObjectId } from 'mongodb';

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {

    const {id} = await params;

    const client = await clientPromise;
    const db = client.db();

    try {
        const result = await db.collection('users').deleteOne({
            _id: new ObjectId(id),
        });

        if (result.deletedCount === 0) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'User deleted' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}