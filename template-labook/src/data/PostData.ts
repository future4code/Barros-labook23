import { CustomError } from "../error/CustomError";
import { PostCreate } from "../models/PostCreate";
import { BaseDatabase } from "./BaseDatabase";
import { PostRep } from "../business/PostRep";

export class PostData extends BaseDatabase implements PostRep {
    feed(userId: string): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    private static TABLE_NAME = "labook_posts";

    create = async ({ id, photo, description, type, authorId }: PostCreate) => {
        try {
            await PostData.connection.insert({
                id: id,
                photo: photo,
                description: description,
                type: type,
                author_id: authorId
            }).into(PostData.TABLE_NAME)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    getAll = async (id: string) => {
        try {

            const result = await PostData.connection.raw(`
            SELECT * FROM ${PostData.TABLE_NAME} WHERE ${id}
            `)

            return (result[0])

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    } }
