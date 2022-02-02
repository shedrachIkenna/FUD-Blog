import { RiTwitterLine, RiChat3Line, RiHeartLine, RiFacebookCircleFill, RiSnapchatLine, RiTelegramLine, RiCheckFill, RiUser3Line } from 'react-icons/ri'
import './blogdetails.css'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { useParams } from 'react-router-dom'


let paramsId;
const BlogDetails = (props) => {
    let params = useParams();
    console.log(props)
    paramsId = params.id

    const { blog } = props;
    if (blog){
        return(
            <div className="blog-details-main">
            <div className="blog-details-container">
                <div className="blog-details-content">
                    <h2 className="blog-details-title">{blog.title}</h2>
                    <div className="blog-details-author-links-container">
                        <div className="blog-details-author-container">
                            <RiUser3Line size={27}/> 
                            <p className="blog-details-author">Shedrach Ikenna - 20th Sept, 2022</p>
                        </div>
                        <div className="blog-details-socials">
                            <button className="blog-details-btn">Connect</button>
                        </div>
                    </div>
                    <p className="blog-details-text">{blog.content}</p>
                </div>
                <div className="blog-details-links">
                    <div className="blog-details-reaction">
                        <RiCheckFill size={27}/>
                        <RiHeartLine size={27}/>
                        <RiChat3Line size={27}/>
                    </div>
                    <div className="blog-details-socials">
                        <RiTwitterLine size={27}/>
                        <RiFacebookCircleFill size={27}/>
                        <RiSnapchatLine size={27}/>
                        <RiTelegramLine size={27}/>
                    </div>
                </div>
            </div>
            <div className="blog-details-footer">
                <footer>
                    <div className="footer-content">
                        <h2 className="h2-footer">Fud Blog</h2>
                        <p className="p-footer">Fud Official Site</p>
                    </div>
                    <p className="copyright">&copy; Copyright 2021 Shedrach Nwali</p>
                </footer>
            </div>
        </div>
        )
    } else
    return (
        <div className="blog-details-main">
            <div className="blog-details-container">
                <p>Loading...</p>
            </div>
        </div>
    )
}

// export default BlogDetails;

const mapStateToProps = (state) => {
    console.log(paramsId)
    console.log(state)
    const blogs = state.firestore.data.blogs
    const blog = blogs ? blogs[paramsId] : null
    return {
        blog: blog
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'blogs'}
    ])
)(BlogDetails)