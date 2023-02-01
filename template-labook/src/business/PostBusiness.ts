import { CustomError } from "../error/CustomError";
import { PostInput,PostCreate } from "../models/PostCreate";
import { generateId } from "../services/IdGenerator";
import { PostRep } from "./PostRep";
export class PostBusiness {
    getAllPost(id: string) {
        throw new Error("Method not implemented.");
    }
    constructor(private postDatabase: PostRep) { }
    

    createPost = async ({ photo, description, type, authorId }: PostInput) => {
        try {
            if (!photo || !description || !type || !authorId) {
                throw new CustomError(400, "Body invalido, Verifique foto,descrição ou id.");
            }

            const postId = generateId()

            const insertPost: PostCreate = {
                id: postId,
                photo: photo,
                description: description,
                type: type,
                authorId: authorId
            }

            await this.postDatabase.create(insertPost)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
};
  

   