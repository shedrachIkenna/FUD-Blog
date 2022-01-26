export const createBlog = (blog) => {
    return (dispatch, getState) => {
        //Make Async call to database
        dispatch({type: 'CREATE_BLOG', blog:blog});
    }
}