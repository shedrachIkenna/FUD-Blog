import BlogSummary from '../blogSummary/BlogSummmary'
import './bloglist.css'
import { Link } from 'react-router-dom'
const BlogList = ({blogs}) => {
    return (
        <div className="blog-list">
            {
               blogs && blogs.map(blog => {
                   return(
                       <Link to={'/blog/'+ blog.id} className='link' key={blog.id}>
                            <BlogSummary blog={blog} />
                       </Link>
                   )
               })
            }
        </div>
    )
}
export default BlogList