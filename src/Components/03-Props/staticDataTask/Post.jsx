import PropTypes from 'prop-types';

const Post = (props)=>{

    const {id,title,userId,body} = props

    return (
        <tr>
            <td>{props.headerText}</td>
            <td>{userId}</td>
            <td>{title}</td>
            <td>{body}</td>
        
        </tr>
    )
}

Post.defaultProps={
    headerText :"This is a dummy val"
}
Post.propTypes = {
    body:PropTypes.string.isRequired
}

export default Post;