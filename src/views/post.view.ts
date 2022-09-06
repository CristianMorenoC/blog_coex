interface IComment {
    postId: number,
    madeBy: string,
    content: string,
}

interface IPost {
    userId: number,
    postId: number,
    username: string;
    content: string;
    comments: Array<IComment>
    status: boolean
}


class Post implements IPost {
     public userId: number = 0
     public postId: number = 0
     public username: string = ''
     public content: string = ''
     public comments: Array<IComment> = []
     public status: boolean = true


    constructor() { }

    public createView() {

        let data = {
            postId: this.postId,
            userId: this.userId,
            username: this.username,
            content: this.content,
            comments: this.comments,
            status: this.status
        }

        return data;
    }

}


