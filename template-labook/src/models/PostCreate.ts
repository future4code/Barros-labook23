export interface PostInput {
    photo: string,
    description: string,
    type: string, 
    authorId: string
}

export interface PostCreate {
    id: string,
    photo: string,
    description: string,
    type: string, 
    authorId: string
}