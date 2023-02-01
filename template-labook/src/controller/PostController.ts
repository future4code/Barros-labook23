import { PostCreate,PostInput } from "../models/PostCreate";
import { Request,Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
export class PostController {
    constructor(private postBusiness: PostBusiness) { }

    createPost = async (req: Request, res: Response) => {
        try {
            const { photo, description, type, authorId } = req.body;

            const input: PostInput = {
                photo,
                description,
                type,
                authorId
            }
            await this.postBusiness.createPost(input)

            res.status(200).send("Post criado com sucesso!")
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
    getAllPost = async (req: Request, res: Response) => {
        try {

            const id = req.params.id as string

            const postId = await this.postBusiness.getAllPost(id)
           
            res.status(200).send(postId)

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)

        }

    }}