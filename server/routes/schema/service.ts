import { ObjectId } from 'mongodb'
import { db } from '../../database'

const collection = db.collection<Schema>('schema')

export const createSchema = async (schema: Schema) => {
    await collection.updateOne({ _id: new ObjectId() }, schema, { upsert: true })
}
