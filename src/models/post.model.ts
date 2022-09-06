export interface IPostModel {
    createPost: ({user_Id: number, content: string}),
    getPost: ({post_id: number}),
    updatedPost: ({post_id: number, content: string, status: string}),
    deletePost: ({post_id: number}),
    blockUser: ({user_id: number})
}


