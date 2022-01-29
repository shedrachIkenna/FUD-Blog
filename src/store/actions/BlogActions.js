import { getFirestore, collection, addDoc } from '../../config/fbConfig'

export const createBlog = (blog) => {
    return (dispatch, getState, { getFirebase }) => {
        //Make Async call to database
        const firestore = getFirestore()
        const colRef = collection(firestore, 'blogs')
        addDoc(colRef, {
            ...blog,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_BLOG', blog:blog});
        }).catch((err) => {
            dispatch({ type: 'CREAT_BLOG_ERROR', err })
        })
    }
} 