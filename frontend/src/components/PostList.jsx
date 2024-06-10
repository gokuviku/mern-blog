import Post from './Post';
import './PostList.css'
const PostList = ({ posts, deletePost }) => {
    return (
        <div>
            {posts.map((post) => (
                <Post key={post._id} post={post} deletePost={deletePost} />
            ))}
        </div>
    );
};

export default PostList;
