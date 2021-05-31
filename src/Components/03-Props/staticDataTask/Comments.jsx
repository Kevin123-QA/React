import data from '../static/Comments.json';
import Comment from './Comment';

const Comments =()=>{

    return(
        <>
            <h1>hello</h1>
            {
            data.map((item, index)=>(
                <Comment key={index} item={item}/>
            ))
            }
        </>
    )

}

export default Comments;