

const Comment =(props)=>{
    console.log(props)

    const {postId,name,id,email,body} = props.item;

    return(
        <div>
            <p></p>
            <p>{postId} {name}</p>
        </div>
    )


}

export default Comment;