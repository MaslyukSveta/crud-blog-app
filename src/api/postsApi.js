export const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async () => {
    console.log('GET:', API_URL);
    const response = await fetch(API_URL);
    return response.json();
};

export const createPost = async (post) => {
    console.log('POST:', API_URL, post);
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ ...post, userId: 1 }),
    });
    const data = await response.json();
    data.id = Math.floor(Math.random() * 100000); // fake ID
    return data;
};

export const updatePost = async (id, post) => {
    console.log('PATCH:', `${API_URL}/${id}`, post);
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(post),
    });
    return response.json();
};

export const deletePost = async (id) => {
    console.log('DELETE:', `${API_URL}/${id}`);
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    return response.ok;
};
