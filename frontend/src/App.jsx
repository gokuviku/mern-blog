import { useEffect, useState } from 'react';
import AddPost from './components/AddPost';
import PostList from './components/PostList';
import { deletePost, fetchPosts } from './services/api';

const App = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data } = await fetchPosts();
    setPosts(data);
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    getPosts();
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <AddPost fetchPosts={getPosts} />
      <PostList posts={posts} deletePost={handleDelete} />
    </div>
  );
};

export default App;
