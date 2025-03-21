import React, { useState, useEffect } from 'react';
import { fetchPosts, createPost, updatePost, deletePost } from './api/postsApi';

const App = ({ renderUI }) => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [editId, setEditId] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const data = await fetchPosts();
      console.log('GET /posts →', data);
      setPosts(data.slice(0, 10));
    } catch (err) {
      console.error('Помилка при завантаженні постів:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        const updated = await updatePost(editId, { title, body });
        console.log(`PATCH /posts/${editId} →`, updated);
        setPosts((prev) =>
            prev.map((p) => (p.id === editId ? { ...p, title, body } : p))
        );
      } else {
        const created = await createPost({ title, body });
        console.log('POST /posts →', created);
        setPosts((prev) => [created, ...prev]);
      }
      resetForm();
    } catch (err) {
      console.error('Помилка при збереженні поста:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const success = await deletePost(id);
      console.log(`DELETE /posts/${id} →`, success);
      if (success) {
        setPosts((prev) => prev.filter((post) => post.id !== id));
      }
    } catch (err) {
      console.error('Помилка при видаленні поста:', err);
    }
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setBody(post.body);
    setEditId(post.id);
  };

  const handleViewPost = (post) => {
    setSelectedPost(post);
  };

  const resetForm = () => {
    setTitle('');
    setBody('');
    setEditId(null);
    setSelectedPost(null);
  };

  return renderUI({
    posts,
    title,
    body,
    selectedPost,
    isEditing: !!editId,
    setTitle,
    setBody,
    onSubmit: handleSubmit,
    onEdit: handleEdit,
    onDelete: handleDelete,
    onView: handleViewPost,
    onClose: () => setSelectedPost(null),
  });
};

export default App;
