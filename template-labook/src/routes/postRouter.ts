import express from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostController } from "../controller/PostController";
import { PostData } from "../data/PostData";


export const postRouter = express.Router();
const postData = new PostData()

const postBusiness = new PostBusiness(postData)

const postController = new PostController(postBusiness)

postRouter.post("/post",(req,res)=> postController.createPost(req,res))

postRouter.get("/:id",(req,res)=> postController.getAllPost(req,res))