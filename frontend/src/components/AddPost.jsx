import { useState } from 'react';
import { createPost } from '../services/api';
import './AddPost.css'

const AddPost = ({ fetchPosts }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createPost({ title, content });
        fetchPosts();
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Content</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button type="submit">Add Post</button>
        </form>
    );
};

export default AddPost;
