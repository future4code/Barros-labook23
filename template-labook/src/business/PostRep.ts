import { PostCreate } from "../models/PostCreate"

export interface PostRep{
    
    create ({ id, photo, description, type, authorId }: PostCreate):Promise<void>

    getAll (id:string):Promise<any[]>

    feed (userId: string):Promise<any[]>
}