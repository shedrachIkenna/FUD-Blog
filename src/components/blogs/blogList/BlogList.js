import BlogSummary from '../blogSummary/BlogSummmary'
import './bloglist.css'
const BlogList = () => {
    return (
        <div className="blog-list">
            <BlogSummary />
            <BlogSummary />
            <BlogSummary />
        </div>
    )
}
export default BlogList