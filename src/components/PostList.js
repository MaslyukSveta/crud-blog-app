import React from 'react';
import '../styles/PostList.css';

const PostList = ({ posts, onEdit, onDelete }) => (
    <div className="post-list">
        {posts.map((post) => (
            <div key={post.id} className="post-card">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-body full-text">{post.body}</p> {}
                <div className="post-actions">
                    <button onClick={() => onEdit(post)} className="btn btn-edit">
                        Редагувати
                    </button>
                    <button onClick={() => onDelete(post.id)} className="btn btn-delete">
                        Видалити
                    </button>
                </div>
            </div>
        ))}
    </div>
);

export default PostList;
