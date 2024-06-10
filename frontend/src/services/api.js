import axios from 'axios';

const API_URL = 'http://localhost:5000/api/posts';

export const fetchPosts = async () => {
    return await axios.get(API_URL);
};

export const createPost = async (post) => {
    return await axios.post(API_URL, post);
};

export const deletePost = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
