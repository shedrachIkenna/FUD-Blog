import './createblog.css'

const CreateBlog = () => {
    return (
        <div className="create-blog">
            <div className="create-blog-header">
                <div className="create-blog-draft-header-box">
                    <p>Draft</p>
                    <p>Shedrach ikenna</p>
                </div>
                <button className="btn">Publish</button>
            </div>
            <div className="create-blog-body">
                <div className="create-blog-title">
                    <input type="text" placeholder="Title" id="title"/>
                </div>
                <div className="create-blog-content">
                    <textarea type="text" placeholder="Share you ideas..." id="content"/>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog;