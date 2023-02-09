"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
class PostController {
    constructor(postBusiness) {
        this.postBusiness = postBusiness;
        this.createPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { photo, description, type, authorId } = req.body;
                const input = {
                    photo,
                    description,
                    type,
                    authorId
                };
                yield this.postBusiness.createPost(input);
                res.status(200).send("Post criado com sucesso!");
            }
            catch (error) {
                res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
            }
        });
        this.getAllPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const postId = yield this.postBusiness.getAllPost(id);
                res.status(200).send(postId);
            }
            catch (error) {
                res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
            }
        });
    }
}
exports.PostController = PostController;
