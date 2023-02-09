"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = __importDefault(require("express"));
const PostBusiness_1 = require("../business/PostBusiness");
const PostController_1 = require("../controller/PostController");
const PostData_1 = require("../data/PostData");
exports.postRouter = express_1.default.Router();
const postData = new PostData_1.PostData();
const postBusiness = new PostBusiness_1.PostBusiness(postData);
const postController = new PostController_1.PostController(postBusiness);
exports.postRouter.post("/post", (req, res) => postController.createPost(req, res));
exports.postRouter.get("/:id", (req, res) => postController.getAllPost(req, res));
