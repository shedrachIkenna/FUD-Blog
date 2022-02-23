import BlogList from '../blogs/blogList/BlogList'
import Board from '../board/Board'
import './dashboard.css'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import DashHeader from './DashHeader'

const Dashboard = ({blogs}) => {
    return (
        <div className="dashboard md:mt-0 mt-16">
            <DashHeader />
            <BlogList blogs={blogs}/>
            <Board className="notice-board"/>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
       blogs : state.firestore.ordered.blogs
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(() => [
       { collection: 'blogs' }
    ]),
)(Dashboard)