export interface ICommentModel {
    createComment: ({post_id: number, user_id: number, content: string})
    getCommentsFromPost: ({post_id: number}),
    deleteComment: ({comment_id: number})
}

