import './createblog.css'
import { useState } from 'react'

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')


const handleClick = (e) => {
    e.preventDefault();
    const blog = { title, content };
    console.log(blog)
}


    return (
        <div className="create-blog">
            <div className="create-blog-header">
                <div className="create-blog-draft-header-box">
                    <p>Draft</p>
                    <p>Shedrach ikenna</p>
                </div>
                <button className="btn" onClick={handleClick} disabled={!title || !content}>Publish</button>
            </div>
            <div className="create-blog-body">
                <div className="create-blog-title">
                    <textarea type="text" placeholder="Title" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="create-blog-content">
                    <textarea type="text" placeholder="Share you ideas..." id="content" value={content} onChange={(e) => setContent(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog;