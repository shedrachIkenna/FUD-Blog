
export const createBlog = (blog) => {
    return (dispatch, getState, { getFirebase }) => {
        //Make Async call to database
        const firestore = getFirebase().firestore()
        firestore.collection('blogs').add({
            ...blog,
            createdAt: new Date()
        })
        .then(() => {
            dispatch({type: 'CREATE_BLOG', blog:blog});
        }).catch((err) => {
            dispatch({ type: 'CREAT_BLOG_ERROR', err })
        })
    }
} 