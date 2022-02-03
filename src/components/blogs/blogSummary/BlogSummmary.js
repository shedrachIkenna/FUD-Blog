
import './blogsummary.css'

const BlogSummary = ({blog}) => {
    return (
        <div className="blog-summary">
            <p className="blog-author">{blog.author}</p>
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-content">{blog.content.slice(0, 70) + `...`}</p>
            <p className="blog-date">Sept 20, 2022 - Trending - Studies</p>
        </div>
    )
}

export default BlogSummary