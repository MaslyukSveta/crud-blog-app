import React from 'react';
import '../styles/PostForm.css';

const PostForm = ({ title, body, setTitle, setBody, onSubmit, isEditing }) => (
    <form onSubmit={onSubmit} className="post-form">
            <h2 className="form-title">{isEditing ? 'Редагування поста' : 'Новий пост'}</h2>

            <input
                type="text"
                placeholder="Заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="input-field"
            />

            <textarea
                placeholder="Текст поста"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                rows={4}
                className="textarea-field"
            ></textarea>

            <button type="submit" className={`btn btn-submit ${isEditing ? 'btn-edit' : 'btn-add'}`}>
                    {isEditing ? 'Зберегти зміни' : 'Додати пост'}
            </button>
    </form>
);

export default PostForm;
