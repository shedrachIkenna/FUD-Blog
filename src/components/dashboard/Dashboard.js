import BlogList from '../blogs/blogList/BlogList'
import './dashboard.css'
import { connect } from 'react-redux'

const Dashboard = ({blogs}) => {
    return (
        <div className="dashboard">
            <BlogList blogs={blogs}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
       blogs : state.blog.blogs 
    }
}

export default connect(mapStateToProps)(Dashboard)