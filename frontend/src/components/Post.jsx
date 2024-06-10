import './Post.css';

const Post = ({ post, deletePost }) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => deletePost(post._id)}>Delete</button>
        </div>
    );
};

export default Post;
