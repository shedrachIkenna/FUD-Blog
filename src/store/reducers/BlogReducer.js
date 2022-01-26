
const initState = {
    blogs: [
        {id: 1, title: 'Make some money', content: 'blah blah blah', author: 'Shedrach Ikenna'},
        {id: 2, title: 'Make more money', content: 'blah blah blah', author: 'Shedrach Ikenna'},
        {id: 3, title: 'Make alot of money', content: 'blah blah blah', author: 'Shedrach Ikenna'},
    ]
}

const BlogReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_BLOG':
            console.log('created blog', action.blog)
    }
    return state
}

export default BlogReducer
