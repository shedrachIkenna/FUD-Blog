import BlogSummary from '../blogSummary/BlogSummmary'
import './bloglist.css'
const BlogList = ({blogs}) => {
    return (
        <div className="blog-list">
            {
               blogs && blogs.map(blog => {
                   return(
                       <BlogSummary blog={blog} key={blog.id}/>
                   )
               })
            }
        </div>
    )
}
export default BlogList