import React from 'react';
import App from '../App';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import '../styles/BlogPage.css';

const BlogPage = () => {
    return (
        <App
            renderUI={(props) => (
                <div className="blog-wrapper">
                    <header className="blog-header">
                        <h1 className="blog-title">Blog</h1>
                        <p className="blog-subtitle">Легке створення, редагування і видалення ваших постів</p>
                    </header>

                    <main className="blog-main">
                        <section className="blog-form">
                            <h2 className="section-title">{props.isEditing ? 'Редагування поста' : 'Новий пост'}</h2>
                            <PostForm
                                title={props.title}
                                body={props.body}
                                setTitle={props.setTitle}
                                setBody={props.setBody}
                                onSubmit={props.onSubmit}
                                isEditing={props.isEditing}
                            />
                        </section>

                        <section className="blog-list">
                            <h2 className="section-title">Усі пости</h2>
                            <PostList
                                posts={props.posts}
                                onEdit={props.onEdit}
                                onDelete={props.onDelete}
                                onView={props.onView}
                            />
                        </section>
                    </main>

                    {props.selectedPost && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <h2 className="modal-title">Деталі поста</h2>
                                <h3 className="modal-heading">{props.selectedPost.title}</h3>
                                <p className="modal-text">{props.selectedPost.body}</p>
                                <button
                                    onClick={props.onClose}
                                    className="btn btn-close"
                                >
                                    Закрити
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        />
    );
};

export default BlogPage;