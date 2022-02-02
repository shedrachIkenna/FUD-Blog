import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Navbar from './components/layout/navbar/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import BlogDetails from './components/blogs/blogDetails/BlogDetails'
import CreateBlog from './components/blogs/createBlog/CreateBlog'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Dashboard/>} />
            <Route path='/blog/:id' element={<BlogDetails />} />
            <Route path='/create' element={<CreateBlog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
